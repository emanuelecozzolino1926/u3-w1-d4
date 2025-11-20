import { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

// const SingleBook = (props) => {
//   return (
//     <Col xs={1} md={2} lg={3} xxl= key={props.book.asin} className="mt-2">
//       <Card className="h-100">
//         <Card.Img
//           variant="top"
//           src={props.book.img}
//           alt={`Immaggine di ${props.book.title}`}
//           className="h-100 object-fit-cover"
//         />
//         <Card.Body>
//           <Card.Title>{props.book.title}</Card.Title>
//           <Card.Text>Categoria: {props.book.category}</Card.Text>
//           <Button variant="primary">
//             Compra &euro;{`${props.book.price}`}
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleBook = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };
  render() {
    return (
      <Col
        xs={1}
        md={2}
        lg={3}
        xxl={4}
        key={this.props.book.asin}
        className="mt-2"
      >
        <Card
          className={
            "h-100" +
            (this.state.selected ? " border border-3 border-danger" : "")
          }
          onClick={this.toggleBook}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt={`Immaggine di ${this.props.book.title}`}
            className="h-100 object-fit-cover"
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>Categoria: {this.props.book.category}</Card.Text>
            <Button variant="primary">
              Compra &euro;{`${this.props.book.price}`}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
