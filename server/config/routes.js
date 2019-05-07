const petController = require('./../controllers/pets');
const pets = require('./../controllers/pets.js');
const path = require('path');


module.exports = (app) =>{
    app.post('/register', petController.register);
    app.post('/login', petController.login);
    app.get('/currentUser', petController.getCurrentUser);
    app.get('/api/pets', petController.allPets);
    app.post('/api/pets', petController.addPet);
    app.get('/api/pets/:id', petController.singlePet);
    app.put('/api/pets/:id', petController.editPet);
    app.delete('/api/pets/:id', petController.removePet);
    app.all('*',(req,res) => res.sendFile(path.resolve('./public/dist/public/index.html')));
}