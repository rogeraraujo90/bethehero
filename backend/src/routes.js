const express = require('express');
const OrgController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OrgController.index)
routes.post('/ongs', OrgController.create);

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profiles', ProfileController.index);

module.exports = routes;