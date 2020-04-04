const express = require ('express');
const ongController = require ('./controllers/ongController');


const IncidentController = require ('./controllers/incidentController');
const ProfileController = require ('./controllers/profileController');
const SessionController = require ('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;