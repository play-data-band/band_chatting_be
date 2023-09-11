module.exports = mongoose => {

  //우선 챗 룸 하나 반환하는데 테이블은 같이 구성해봐야 할 것 같음
  var schema = mongoose.Schema(
    {
      communityId: {
        type: String,
        index: true
      },
      memberId: Number,
      memberName: String,
      memberImage: String,
      content: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  mongoose.set('strictQuery', true)
  const Chatting = mongoose.model("chattings", schema);
  return Chatting;
};
