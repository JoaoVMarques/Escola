import { Col, Container, Form, Row } from "react-bootstrap";

function LoginFormContainer() {

  return (
    <Form className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className='text-center'>Entrar</h2>
            <h6 className='text-center'>acesse com seu e-mail e senha</h6>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <button type="submit" className="btn btn-primary w-100">Entrar</button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

export default LoginFormContainer;
