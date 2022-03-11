const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const Mentor = require("../models/mentor");
exports.createUser =async (req, res) => {
  let user_id = parseInt( await User.count()) + 1;
  let user = new User({
    student_id: user_id,
    student_name: req.body.name,
    student_email: req.body.email,
    student_gender: req.body.gender,
    mentor: req.body.mentor,
  });
  user
    .save()
    .then((created_user) => {
      console.log("created user", created_user);
      res.status(201).json({ message: "user creation successful", created_user });
    })
    .catch((error) => {
      console.error(error);
      res.status(409).json({ message: "user creation failed" });
    });
};


exports.getUsers = async (req, res) => {
  User
    .find()
    .then((users) => {
      console.log("users      ", users);
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error(error);
      res.status(409).json({ message: "students fetch failed" });
    });
};

exports.getUsersWithoutMentor = async (req, res) => {
  User
    .find({"mentor":null})
    .then((users) => {
      console.log("users without mentor     ", users);
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error(error);
      res.status(409).json({ message: "students without mentor fetch failed" });
    });
};


exports.getUsersForMentor = async (req, res) => {
  User
    .find({mentor:req.params.mentor})
    .then((users) => {
      console.log("users for mentor   ",req.params.mentor,"\n", users);
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error(error);
      res.status(409).json({ message: "students fetch failed" });
    });
};

exports.assignMentor = async (req, res) => {
  User
    .findOne({student_id:req.body.user})
    .then((user) => {
      if(user){
        Mentor
          .findOne({mentor_id:req.body.mentor})
          .then((mentor) => { 
            if(mentor){
              User.updateOne({student_id:req.body.user},{mentor:req.body.mentor})
              .then(result=>{
                if(result.matchedCount > 0){
                  res.status(200).json({message:"mentor assigned successfully"});
                }
                else{
                  res.status(400).json({message:"user not found"});
                }
              })
              .catch(err=>{
                    res.status(409).json({ error: err });
              });
            }
            else{
              res.status(400).json({message:"mentor not found"});
            }
          })
          .catch(err=>{
            res.status(409).json({ error: err });
          });
        
      } 
      else{
        res.status(400).json({message:"user not found"});
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(409).json({ message: "failed" });
    });
};
