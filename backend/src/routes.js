const express = require('express');
const OrgController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const SessionValidator = require('./validators/SessionValidator');
const OngValidator = require('./validators/OngValidator');
const IncidentValidator = require('./validators/IncidentsValidator');
const ProfileValidator = require('./validators/ProfileValidator');

const routes = express.Router();

routes.post('/sessions', SessionValidator(), SessionController.create);

routes.get('/ongs', OrgController.index)
routes.post('/ongs', OngValidator(), OrgController.create);

routes.get('/incidents', IncidentValidator.listValidator(), IncidentController.index)
routes.post('/incidents', IncidentValidator.createValidator() ,IncidentController.create);
routes.delete('/incidents/:id', IncidentValidator.deleteValidator() ,IncidentController.delete);

routes.get('/profiles', ProfileValidator(), ProfileController.index);

module.exports = routes;