import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    <Container>
      <Row>
        {props.book.map((book) => {
          return <SingleBook book={book} key={book.asin} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
