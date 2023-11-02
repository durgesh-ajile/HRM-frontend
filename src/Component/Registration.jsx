import '../css/Registration.css';
import { BsPersonCircle, BsFillFileLock2Fill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai'
import { useFormik } from "formik";
import { validate } from '../schemas/validate'
import { useEffect, useState } from 'react';
import { asyncThunkSignUp } from '../redux/createAsyncThunk';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/signin')


  const { SignUpData } = useSelector((store) => store.admin)

  const [checkboxes, setCheckboxes] = useState(
    {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
    }
  );

  const initialValues = {
    username: "",
    fname: "",
    lname: "",
    email: "",
    c_email: "",
    password: "",
    c_pass: "",
    checkbox: false,
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  }

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik(
    {
      initialValues: initialValues,
      validationSchema: validate,
      onSubmit: (values) => {
        const payload = {
          "first_name": values.fname,
          "last_name": values.lname,
          "email": values.email,
          "repeat_email": values.c_email,
          "password": values.password,
          "repeat_password": values.c_pass
        }

        dispatch(asyncThunkSignUp(payload))
      }
    }
  );

  useEffect(()=>{
    SignUpData.length !== 0 && navigate('/signin')
  }, [SignUpData])

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  return (
    <>
      <h1 className='text-center mt-2'>Create  Account</h1>


      <div className='Reg-form '>

        <form className='regForm' onSubmit={handleSubmit}>

          <div className="input-group mb-3 username">
            <label className="form-label input-group input-group-lg  label-name "
              htmlFor='username'>User name</label>
            <span className="input-group-text" ><BsPersonCircle /></span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
              autoComplete='off'
              id='username'
              name='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-describedby="basic-addon1" />
              {errors.username && touched.username ?
                  (<small className='form-error'>{errors.username}</small>)
                  : null}
          </div>
          

          <div className='fullname  input-group  mb-3'>
            <div className=" Email">
              <div className="input-group  name ">
                <label className="form-label input-group input-group-lg  label-name "
                  htmlFor='fname'>First Name</label>
                <div className="input-group  mb-1 first-name">

                  <span className="input-group-text" > <BsPersonCircle />
                  </span>
                  <input type="name" className="form-control input-form" placeholder="First name"
                    aria-label="Username" aria-describedby="basic-addon1"
                    required
                    autoComplete='off'
                    id='fname'
                    name='fname'
                    value={values.fname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />


                </div>
                {errors.fname && touched.fname ?
                  (<small className='form-error'>{errors.fname}</small>)
                  : null}
              </div>
            </div>
            <div className=" Email">
              <div className="input-group  name ">
                <label className="form-label  input-group label-name  "
                  htmlFor='lname'>Last Name</label>

                <div className="input-group mb-1 last-name">

                  <span className="input-group-text " ><BsPersonCircle /></span>
                  <input type="name" className="form-control input-form "
                    placeholder="Last name"
                    autoComplete='off'
                    id='lname'
                    name='lname'
                    value={values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label="Username" aria-describedby="basic-addon1" required />

                </div>
                {errors.lname && touched.lname ?
                  (<small className='form-error'>{errors.lname}</small>)
                  : null}
              </div>
            </div>
          </div>
          <div className='email-section '>
            <div className='Email'>
              <div className="input-group mb-1 emailform ">
                <label className="input-group  form-label label-name"
                  htmlFor='email'> Email address</label>

                <span className="input-group-text" >@</span>
                <input type="email" className="form-control input-form" placeholder="Email" autoComplete='off'
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Email" aria-describedby="basic-addon1" required />

              </div>
              {errors.email && touched.email ?
                (<small className='form-error'>{errors.email}</small>)
                : null}
            </div>
            <div className='Email'>
              <div className="input-group mb-1 emailform ">
                <label className="input-group  form-label label-name"
                  htmlFor='c_email'>Confirm email address</label>

                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control input-form" placeholder="Email" autoComplete='off'
                  id='c_email'
                  name='c_email'
                  value={values.c_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Email" aria-describedby="basic-addon1" required />

              </div>
              {errors.c_email && touched.c_email ?
                (<small className='form-error'>{errors.c_email}</small>)
                : null}
            </div>
          </div>


          <div className='email-section '>
            <div className='Email'>
              <div className="input-group mb-1 emailform ">
                <label className="input-group  form-label label-name"
                  htmlFor='password'> Password</label>

                <span className="input-group-text" ><AiFillLock /></span>
                <input type="password" className="form-control input-form" placeholder="Password" autoComplete='off'
                  id='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="password" aria-describedby="basic-addon1" required />

              </div>
              {errors.password && touched.password ?
                (<small className='form-error'>{errors.password}</small>)
                : null}
            </div>
            <div className='Email'>
              <div className="input-group mb-1 emailform ">
                <label className="input-group  form-label label-name"
                  htmlFor='c_pass'>Confirm Password </label>

                <span className="input-group-text" id="basic-addon1"><BsFillFileLock2Fill /></span>
                <input type="password" className="form-control input-form" placeholder="Password" autoComplete='off'
                  id='c_pass'
                  name='c_pass'
                  value={values.c_pass}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Password" aria-describedby="basic-addon1" required />

              </div>
              {errors.c_pass && touched.c_pass ?
                (<small className='form-error'>{errors.c_pass}</small>)
                : null}
            </div>
          </div>



          {/* <div className="mb-3 form-check ">
            <input
              type="checkbox"
              id="checkbox1"
              name="checkbox1"
              checked={checkboxes.checkbox1}
              onChange={handleCheckboxChange}
              onBlur={handleBlur}
            />
            <label className="checkbox ml-2" htmlFor="checkbox1">
              Send Me Test Account Setting
            </label>
          </div>
          <div className="mb-3 form-check ">
            <input

              type="checkbox"
              id="checkbox2"
              name="checkbox2"
              checked={checkboxes.checkbox2}
              onChange={handleCheckboxChange}
              onBlur={handleBlur}
            />
            <label className="checkbox ml-3" htmlFor="checkbox2">
              Subscribe to Monthly Newsletter
            </label>
          </div> */}
          {/* <div className="mb-3 form-check ">
            <input
              type="checkbox"
              id="checkbox3"
              name="checkbox3"
              checked={checkboxes.checkbox3}
              onChange={handleCheckboxChange}
              onBlur={handleBlur}
            />
            <label className="checkbox ml-3" htmlFor="checkbox3">
              Accept Terms of Services
            </label>
            <br/>
          </div> */}  
          <div className='sub-div'>
          <div>
          <Link to="/signin">Already Have an Account ? Please Sign In Here</Link>
</div>
<div style={{display:'flex', justifyContent:'flex-end'}}>
          <button type="submit" className="btn btn-primary" >  Create Account</button>
          </div>
          </div>
        </form>
      </div>
    </>



  )
}

export default Registration