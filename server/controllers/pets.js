const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');
const Pet = mongoose.model('Pet');


module.exports = {
    register: (req,res) => {
        bcrypt.hash(req.body.password, 8, (err, hash)=> {
            if(err){
                res.json(err);
            }else{
                req.body.password = hash;
                User.create(req.body, (err, user)=> {
                    if(err){
                        res.json(err);
                    }else{
                        req.session.userId = user._id;
                        res.json(user);
                    }
                })
            }
        })
        console.log("came in registration");
        
    },
    login: (req,res) => {
        User.findOne({email: req.body.email },(err, user)=>{
            if(err){
                res.json(err);
            } else{
                if(user){
                    bcrypt.compare(req.body.password, user.password, (err, result)=>{
                        if(result === true){
                            req.session.userId = user._id;
                            res.json({ message: 'Success', loginStatus: true});
                        }else{
                            res.json({ message: 'Invalid Credentials', loginStatus: false});
                        }
                    })
                } else{
                    res.json({message: 'Invalid Credentials', loginStatus: false});
                }
            }
       
        })
        console.log("logged in");
    },

    getCurrentUser: (req, res)=> {
        console.log(req.session.userId);
        if(req.session.userId === undefined){
            res.json({loginStatus: false });
        } else{
            User.find({_id: req.session.userId }, (err, user)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json(user)
                }
            })
        }

    },
    
    allPets: (req,res)=>{
        Pet.find({}, (err, pets)=>{
            if(err){
                res.json(err);
            }else{
                res.json(pets);
            }
        })
    },

    singlePet: (req,res) => {
        Pet.findOne({_id: req.params.id}, (err, pet)=>{
            if(err){
                res.json(err);
            }else{
                res.json(pet);
            }
        })
    },
    addPet: (req,res)=>{
        Pet.create(req.body, (err, pet)=>{
            if(err){
                res.json(err);
            }else{
                res.json(pet);
            }
        })
    },
    editPet: (req,res)=>{
        Pet.findOneAndUpdate({_id: req.params.id}, { $set: req.body }, { runValidators: true }, (err,data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },
    removePet: (req,res) => {
        Pet.remove({_id: req.params.id}, (err, data)=>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    }
}