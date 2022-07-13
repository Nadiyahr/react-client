import { Form, Button, Stack } from 'react-bootstrap';
import Layout from '../components/layout';
import { onLogin } from '../api/auth'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/slices/autSlice';

const LogIn: React.FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
    // console.log(values)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values);
    try{
      const {data} = await onLogin(values)
      dispatch(authenticateUser())
      // setError('')
      // setValues({
      //   email: '',
      //   password: ''
      // })
    } catch(error: any) {
      console.log(error.response.data)
      // const er = error.response.data.message
      // Array.isArray(er)
      // ? setError(error.response.data.message[0])
      // : setError(error.response.data.message)
    }
  }
  return (
    <Layout>
      <Stack gap={2} className="col-md-5 mx-auto px-3">
      <h1>Log In</h1>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={onChange}
            placeholder="name@example.com"
            value={values.email}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={onChange}
            type="password"
            placeholder="Password"
            value={values.password}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </Stack>
    </Layout>
  ) 
}

export default LogIn
