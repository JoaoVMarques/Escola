import { Container } from 'react-bootstrap';
import CourseBox from '../CourseBox';

function CoursesSection() {
  return (
    <Container className="mt-5">
      <hr />
      <h2 className="text-center">Explore nossos programas de aprendizado</h2>
      <CourseBox />
    </Container>
  );
}

export default CoursesSection;
