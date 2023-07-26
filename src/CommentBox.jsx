import { useState } from "react";
import Comments from "./Comments";
import nestedComments from "./data";

const CommentBox = () => {
  const [commentsData, setCommentsData] = useState(nestedComments);

  // Add new comments
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setCommentsData([
      ...commentsData,
      {
        message: e.target.message.value,
        user: "user 1",
        upVote: 0,
        downVote: 0,
        replies: []
      }
    ]);
    e.target.message.value = null;
  };

  return (
    <div>
      <form style={{ margin: "10px 0px" }} onSubmit={onSubmitHandler}>
        <input type="text" name="message" />
        <button>Send</button>
      </form>

      {commentsData.map((item) => {
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

export default CommentBox;
