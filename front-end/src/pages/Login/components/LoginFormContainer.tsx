import { Formik } from 'formik';
import { Col, Container, Form, Row } from 'react-bootstrap';
import accountLoginInterface from '../../../../services/interfaces/accountInterface';
import { verifyAccountForLogin } from '../../../../services/accountService';
import * as yup from 'yup';

function LoginFormContainer() {
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const loginAccount = async (formAccount: accountLoginInterface) => {
    const response = await verifyAccountForLogin(formAccount);
    console.log(response);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => loginAccount(values)}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Container className="login-container p-3 rounded">
            <Row>
              <Col>
                <h2 className="text-center">Entrar</h2>
                <h6 className="text-center">acesse com seu e-mail e senha</h6>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Control
                    id="email"
                    type="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    value={values.email} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Control
                    id="password"
                    type="password" 
                    placeholder="Senha" 
                    onChange={handleChange} 
                    value={values.password}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <button type="submit" className="btn btn-primary w-100">Entrar</button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

export default LoginFormContainer;
