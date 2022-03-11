const Mentor = require("../models/mentor");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");


exports.getMentors = async (req, res) => {
    Mentor
      .find()
      .then((mentors) => {
        console.log("mentors      ", mentors);
        res.status(200).json(mentors);
      })
      .catch((error) => {
        console.error(error);
        res.status(409).json({ message: "mentor fetch failed" });
      });
  };


exports.createMentor = async (req, res) => {
    let mentor_count = parseInt( await Mentor.count());
    console.info("mentor name and id before creation " , mentor_count+1, "  " ,req.body.mentor_name );
  let mentor = new Mentor({
    mentor_name: req.body.mentor_name,
    mentor_id: mentor_count+1
  });
  mentor
    .save()
    .then((created_mentor) => {
      console.log("created mentor", created_mentor);
      res.status(201).json({ message: "mentor creation successful", created_mentor });
    })
    .catch((error) => {
      console.error(error);
      res.status(409).json({ message: "mentor creation failed" });
    });
};

exports.assignMentor = async (req, res) => {
    Mentor
      .findOne({"mentor_id":parseInt(req.body.mentor)})
      .then(async (mentor) => {
        if(mentor){
            let falied_user = [],success_users = [];
            for(let i in req.body.users){
                let user = req.body.users[i];
                console.info("assigning for user      " ,user);
                await User.updateOne({student_id:user},{mentor:mentor.mentor_id})
                .then(result=>{
                    console.info("assigning result for user ",user , "  ",result);
                    if(result.matchedCount > 0){
                        success_users.push(user);
                    }else{
                        console.info("pushing user ",user," into failed list");
                        falied_user.push(user);
                    }
                })
                .catch(err=>{
                    falied_user.push(user);
                    console.error("error for user ",user, err);
                });

            }
            console.info("failed list length ",falied_user.length);
            if(falied_user.length > 0){
                res.status(200).json({ message: "Failed for users "+falied_user });
            }
            else{
                res.status(200).json({ message: "Sucessfully assigned users" });
            }
        }else{
            res.status(500).json({ message: "mentor not available" });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(409).json({ message: "failed" });
      });
  };
  



