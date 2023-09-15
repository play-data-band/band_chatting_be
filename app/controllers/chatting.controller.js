const db = require("../models");
const Chatting = db.chattings;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const chatting = new Chatting({
    communityId: req.body.communityId,
    memberId: req.body.memberId,
    memberName: req.body.memberName,
    memberImage: req.body.memberImage,
    content: req.body.content
  });

  // Save Tutorial in the database
  chatting
    .save(chatting)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const communityId = req.query.communityId;
  // var condition = communityId ? { communityId: { $regex: new RegExp(communityId), $options: "i" } } : {};

  Chatting.find({ communityId: communityId })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};



// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Chatting.deleteMany({ communityId: id }, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

exports.updateMemberFields = (req, res) => {
  const memberId = req.params.id; // URL에서 memberId 가져오기

  const updateFields = {
    memberName: req.body.memberName,
    memberImage: req.body.memberImage
  };

  Chatting.updateMany({ memberId: memberId }, updateFields)
    .then(data => {
      if (data.nModified === 0) {
        // 업데이트된 문서가 없는 경우
        res.status(404).send({
          message: `No documents matched the memberId=${memberId}.`
        });
      } else {
        res.send({
          message: `Member fields were updated successfully!=${memberId}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not update member fields."
      });
    });
};