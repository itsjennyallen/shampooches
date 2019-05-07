const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, "first name must be at least 3 characters"],
        minlength: [3, "name must be at least 3 characters"]
    },
    lastName: {
        type: String, 
        required: [true, "last name must be at least 3 characters"], 
        minlength: [3, "name must be at least 3 characters"] 
    },
    email: {
        type: String, 
        required: [true, "email must be required"],
        minlength: [5, "email must be at least 5 characters long"], 
        unique: true 
    },
    password: {
        type: String, 
        required: [true, "password must be required"],
        minlength: [5, "password must be at least 5 characters long"] 
    },
    passwordConfirmation: {
        type: String,
        required: [true, "password must match"],
        minlength: [5, "password must be at least 5 characters"]
    }
});


const PetSchema = mongoose.Schema({
    name: {
        type:String, 
        required: [true, "Yo, pet needs a name"], 
        minlength: [3,"name must be at least 3 characters"]
    },
    breed: {
        type: String, 
        required: [true,"Yo, must have breed of pet"], 
        minlength: [3,"type must be at least 3 characters"]
    },

    service: {
        type: String, 
        required: [true, "Yo must have a service"], 
        minlength: [3, "service must at least be 3 characters"]
    },
    notes:{
        type: String,
        required: [true, "Must have notes"]
        
    }

    // skillOne: {type: String, required: [true, "Yo must have a skill"], minlength: [3, "skill must be at least 3 characters long"]},
    // skillTwo: {type: String, required: [true, "Yo must have a skill"], minlength: [3, "skill must be at least 3 characters long"]},
    // skillThree: {type: String, required: [true, "Yo must have a skill"], minlength: [3, "skill must be at least 3 characters long"]},

});
mongoose.model('User', UserSchema);
mongoose.model('Pet', PetSchema);