import { Col, Container, Row } from 'react-bootstrap';
import LoginFormContainer from '../LoginFormContainer';
import '../../style.css';

function LoginSection() {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <LoginFormContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSection;
