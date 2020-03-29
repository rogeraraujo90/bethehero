const app = require('../../src/app');
const request = require('supertest');
const connection = require('../../src/database/connection');

describe('Test ONG related endpoints', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => await connection.destroy());

    it('Should create a ONG properly', async () => {
        expect.assertions(2);

        const response = await request(app).post('/ongs').send({
            name: "ONG 1001",
            email: "contato@novaong.org",
            whatsapp: "5581985080010",
            city: "Recife",
            uf: "PE"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});