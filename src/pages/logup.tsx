import { useState } from 'react';
import Layout from '../components/layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert, Stack } from 'react-bootstrap';
import { onLogUp } from '../api/auth';
import { Link } from 'react-router-dom';

const LogUp: React.FC = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    phone_numb: '',
    last_name: '',
    first_name: '',
    nick_name: '',
    description: '',
    position: ''
  })
  const[error, setError] = useState('')
  const[succses, setSuccses] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [e.target.name]: e.target.value})
    // console.log(values)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(values);
    try{
      
      const {data} = await onLogUp(values)
      setError('')
      setSuccses(data.message)
      setValues({
        email: '',
        password: '',
        phone_numb: '',
        last_name: '',
        first_name: '',
        nick_name: '',
        description: '',
        position: ''
      })
    } catch(error: any) {
      console.log(error.response.data)
      const er = error.response.data.message
      Array.isArray(er)
      ? setError(error.response.data.message[0])
      : setError(error.response.data.message)
    }
  }

  return (
    <Layout>
      <Stack className="col-md-5 mx-auto">
        <h1 className="mx-auto">Log Up</h1>
      </Stack>
       <Form onSubmit={(e) => onSubmit(e)}>
        <Stack direction="horizontal" gap={3}>
        <Stack gap={2} className="col-md-5 mx-auto px-3">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              tabIndex={1}
              name="email"
              onChange={onChange}
              type="email"
              placeholder="name@example.com"
              value={values.email}
              />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              tabIndex={3}
              name="first_name"
              onChange={onChange}
              type="text"
              placeholder="First Name"
              value={values.first_name}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone_numb">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              tabIndex={5}
              name="phone_numb"
              onChange={onChange}
              type="number"
              placeholder="Phone Number"
              value={values.phone_numb}
              />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="position">
            <Form.Label>Position</Form.Label>
            <Form.Control
              tabIndex={7}
              name="position"
              onChange={onChange}
              type="text"
              placeholder="Position"
              value={values.position}
              />
          </Form.Group>

          {error && <Alert variant="warning">{error}</Alert>}
          {succses && <Alert variant="success">{succses} Now you need to log in. <Link to="/login">Go to Log In</Link></Alert>}

          <Stack gap={2} className="col-md-3">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2} className="col-md-5 mx-auto px-3">
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              tabIndex={2}
              name="password"
              onChange={onChange}
              type="password"
              placeholder="Password"
              value={values.password}
              />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              tabIndex={4}
              name="last_name"
              onChange={onChange}
              type="text"
              placeholder="Last Name"
              value={values.last_name}
              />
          </Form.Group>

          <Form.Group  className="mb-3" controlId="nick_name">
            <Form.Label>Nick Name</Form.Label>
            <Form.Control
              tabIndex={6}
              name="nick_name"
              onChange={onChange}
              type="text"
              placeholder="Nick Name"
              value={values.nick_name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              tabIndex={8}
              name="description"
              onChange={onChange}
              as="textarea"
              placeholder="Description"
              value={values.description}
            />
          </Form.Group>
        </Stack>
        </Stack>
      </Form>
    </Layout>
  )
}

export default LogUp
