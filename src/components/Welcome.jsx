import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="dark">
      <Alert.Heading>FantasyBook</Alert.Heading>
      <p>
        Benvenuto nello store di <Alert.Link href="#">FantasyBook</Alert.Link>,
        guarda il nostro catalogo e scegli cosa acquistare
      </p>
    </Alert>
  );
}

export default Welcome;
