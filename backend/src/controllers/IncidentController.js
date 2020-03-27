const connection = require('../database/connection');
const INCIDENTS_PER_PAGE = 5;

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ])
            .limit(INCIDENTS_PER_PAGE)
            .offset((page - 1) * INCIDENTS_PER_PAGE);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
    
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where({ id }).select('ong_id').first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not allowed' });
        }

        await connection('incidents').where({ id }).delete();

        return response.status(204).send();
    }
}