import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentList = function (props) {
  const commentsArray = props.comment || [];
  return (
    <ListGroup className="my-3">
      {commentsArray.map((comment) => {
        return <SingleComment key={comment._id} comment={comment} />;
      })}
    </ListGroup>
  );
};

export default CommentList;
