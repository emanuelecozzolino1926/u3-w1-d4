import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Fantasy from "../data/fantasy.json";

function FantasyBook() {
  return (
    <>
      <Container>
        <h1>Fantasy Book:</h1>
        <Row className="justify-content-center" xs={1} md={2} lg={3} xl={4}>
          {Fantasy.map((libro) => {
            return (
              <Col key={libro.asin} className="mt-2">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={libro.img}
                    alt={`Immaggine di ${libro.title}`}
                    className="h-100 object-fit-cover"
                  />
                  <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text>Categoria: {libro.category}</Card.Text>
                    <Button variant="primary">
                      Compra &euro;{`${libro.price}`}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default FantasyBook;
