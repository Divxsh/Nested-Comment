const nestedComments = [
  {
    message: "Hello",
    user: "user 1",
    upVote: 0,
    downVote: 0,
    commentTime: "",
    commentId: 101,
    replies: [
      {
        message: "Hello2",
        user: "user 2",
        upVote: 0,
        downVote: 0,
        replies: [],
        commentTime: "",
        commentId: 111
      },
      {
        message: "Hello3",
        user: "user 3",
        upVote: 0,
        downVote: 0,
        replies: [],
        commentTime: "",
        commentId: 112
      },
      {
        message: "Hello4",
        user: "user 4",
        upVote: 0,
        downVote: 0,
        replies: [],
        commentTime: "",
        commentId: 113
      }
    ]
  },
  {
    message: "Hello2",
    user: "user 2",
    upVote: 0,
    downVote: 0,
    replies: [],
    commentId: 102
  },
  {
    message: "Hello3",
    user: "user 3",
    upVote: 0,
    downVote: 0,
    replies: [],
    commentId: 103
  },
  {
    message: "Hello4",
    user: "user 4",
    upVote: 0,
    downVote: 0,
    replies: [],
    commentId: 104
  }
];

export default nestedComments;
