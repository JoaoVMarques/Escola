import { Col, Container, Row } from 'react-bootstrap';
import LoginFormContainer from './LoginFormContainer';

function LoginContainer() {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <LoginFormContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginContainer;
