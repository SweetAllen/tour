import React ,{useState}from 'react';
import '../styles/login.css'
import { Container,Row, Col,Form,FormGroup,Button } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import registerimg from '../assets/images/register.png'
  import usericon from '../assets/images/user.png'

const Register = () => {
    const [credential,setCredential]= useState (
        {
            userName:undefined,
            email:undefined,
            password:undefined
        }
    )
    const handleChange = e =>{
        setCredential(prev=>({...prev,[e.target.id]:e.target.value}))
        // setCredential(prev=>({...prev,[e.target.id]:e.target.value} ))
    }
    const handleClick = e =>{
        e.preventDefault()
        // navigate("/thank-you")
    }
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className='login_container  d-flex justify-content-between'>
                            <div className='login_img'>
                              <img src={registerimg} alt=''></img>
                            </div>
                             <div className='login_form'>
            <div className='user'>
             <img src={usericon} alt=''/>
            </div>
            <h2>Register</h2>
            <Form onSubmit={handleClick}>
            <FormGroup>
                    <input type="text" placeholder='username' required id='username' onChange={handleChange}></input>
                </FormGroup>
                <FormGroup>
                    <input type="text" placeholder='Email' required id='email' onChange={handleChange}></input>
                </FormGroup>
                <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange}></input>
                </FormGroup>
                <Button className='secondary__btn auth_btn' type='submit'>Create Account</Button>
            </Form>
            <p>Already have an account <Link to='/login'>Login</Link></p>
        </div>

                        </div>
                    </Col>
                </Row>
            </Container>
         </section>

    )
}
export default Register;

