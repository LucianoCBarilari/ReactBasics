import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

function bootstrapEx() {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="success">
            Bootstrap está funcionando!
          </Alert>
          <Button variant="primary">Botón de Bootstrap</Button>
        </Col>
      </Row>
    </Container>
  );
}
export default bootstrapEx;