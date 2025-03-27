import { Col, Container, Row } from 'react-bootstrap';

function CourseBox() {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="p-3 d-flex justify-content-center border">
          box
        </Col>
        <Col className="p-3 d-flex justify-content-center border">
          box
        </Col>
        <Col className="p-3 d-flex justify-content-center border">
          box
        </Col>
      </Row>
    </Container>
  );
}

export default CourseBox;
