import { useState } from "react";

const Comments = ({ data: comment, setCommentsData }) => {
  const [reply, setReply] = useState("");

  // Create new Comment
  function createComment(msg) {
    return {
      message: msg,
      user: "user 1",
      upVote: 0,
      downVote: 0,
      commentTime: "",
      commentId: Math.floor(Math.random() + 10000),
      replies: []
    };
  }

  // Add comment
  function addComment(comments, parentId, msg) {
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      if (comment.commentId === parentId) {
        comment.replies.unshift(createComment(msg));
      } else {
        addComment(comment.replies, parentId, msg);
      }
    }
  }

  function vote(comments, parentId, voteType) {
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      if (comment.commentId === parentId) {
        comment[voteType]++;
        break;
      } else {
        vote(comment.replies, parentId, voteType);
      }
    }
  }

  const onSubmitHandler = (e) => {
    console.log(comment);
    e.preventDefault();
    setReply(false);

    setCommentsData((prev) => {
      const commentsData = prev;
      addComment(commentsData, comment.commentId, e.target.message.value);
      return commentsData;
    });

    e.target.message.value = null;
  };

  const upvoteHandler = () => {
    console.log("upvote handler called");

    setCommentsData((prev) => {
      const commentsData = [...prev];
      console.log("Before update", JSON.stringify(commentsData));

      vote(commentsData, comment.commentId, "upVote");
      // console.log(commentsData);
      console.log("After update", commentsData);

      return commentsData;
    });
  };

  const downvoteHandler = () => {
    console.log("downvote handler called");
    setCommentsData((prev) => {
      const commentsData = prev;
      vote(commentsData, comment.commentId, "downVote");
      return commentsData;
    });
  };

  console.log("Rerender");

  if (!comment) return null;

  return (
    <div
      className="comment"
      style={{
        paddingLeft: "50px",
        margin: "10px 0px",
        background: "lightgrey"
      }}
    >
      {/* This is a comment */}
      <div style={{ background: "lightyellow", padding: "10px" }}>
        <p>{comment.message}</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <button onClick={upvoteHandler}>Upvote {comment.upVote}</button>
          <button onClick={downvoteHandler}>Downvote {comment.downVote}</button>
          <button
            onClick={() => {
              setReply(true);
            }}
          >
            Reply
          </button>
        </div>
      </div>

      {reply && (
        <form style={{ margin: "10px 0px" }} onSubmit={onSubmitHandler}>
          <input type="text" name="message" autoFocus />
          <button>Send</button>
        </form>
      )}

      {/* Recursively iterating the comment */}
      {comment.replies.length >= 1 &&
        comment.replies.map((item) => {
          return (
            <Comments
              data={item}
              setCommentsData={setCommentsData}
              key={item.commentId}
            />
          );
        })}
    </div>
  );
};

export default Comments;
