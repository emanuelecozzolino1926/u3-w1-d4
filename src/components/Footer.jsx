import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="py-4 bg-dark">
        <Row className="justify-content-center">
          <Col>
            <h3 className="text-center text-white">
              FantasyBook &copy; tutti i diritti riservati
            </h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
