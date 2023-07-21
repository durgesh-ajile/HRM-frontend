import '../css/Registration.css';
import { BsPersonCircle, BsFillFileLock2Fill } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai'
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useFormik } from "formik";
import { validate } from '../schemas/validate';
// import { validate } from '../schemas/validate'

const Registration = () => {
  const initialValues =
  {
    fname: "",
    lname: "",
    email: "",
    c_email: "",
    password: "",
    c_pass: ""

  }
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik(
    {

      initialValues: initialValues,
      validationSchema: validate,
      onSubmit: (values, action) => {
        console.log("submitted", values);
        action.resetForm();
      }
    }
  );
  console.log(errors);

  return (
    <>
      <h1 className='text-center mt-5'>Create  Account</h1>


      <div className='Reg-form '>

        <form className='regForm' onSubmit={handleSubmit}>

          <div className="input-group mb-3 username">
            <span className="input-group-text" ><BsPersonCircle /></span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
              aria-describedby="basic-addon1" />
          </div>

          <div className='fullname  input-group  mb-3'>
            <div className=" Email">
              <div className="input-group mb-3 name ">
                <label className="form-label input-group input-group-lg  label-name"
                  htmlFor='fname'>FirstName</label>
                <div className="input-group   first-name">

                  <span className="input-group-text" > <BsPersonCircle />
                  </span>
                  <input type="name" className="form-control input-form " placeholder="Firstname"
                    aria-label="Username" aria-describedby="basic-addon1"
                    required
                    autoComplete='off'
                    id='fname'
                    name='fname'
                    value={values.fname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.fname && touched.fname ?
                    (<p className='form-error'>{errors.fname}</p>)
                    : null}
                </div>
              </div>
            </div>
            <div className=" Email">
              <div className="input-group mb-3 name ">
                <label className="form-label  input-group   "
                  htmlFor='lname'>LastName</label>

                <div className="input-group  last-name">

                  <span className="input-group-text " ><BsPersonCircle /></span>
                  <input type="name" className="form-control input-form "
                    placeholder="Lastname"
                    autoComplete='off'
                    id='lname'
                    name='lname'
                    value={values.lname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label="Username" aria-describedby="basic-addon1" required />
                  {errors.lname && touched.lname ?
                    (<p className='form-error'>{errors.lname}</p>)
                    : null}
                </div>
              </div>
            </div>
          </div>
          <div className='email-section '>
            <div className='Email'>
              <div className="input-group mb-3 email w-20">
                <label className="input-group  form-label"
                  htmlFor='email'> Email address</label>

                <span className="input-group-text" >@</span>
                <input type="email" className="form-control input-form" placeholder="Email" autoComplete='off'
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Email" aria-describedby="basic-addon1" required />
                {errors.email && touched.email ?
                  (<p className='form-error'>{errors.email}</p>)
                  : null}
              </div>
            </div>
            <div className='Email'>
              <div className="input-group mb-3 email w-20">
                <label className="input-group  form-label label-name"
                  htmlFor='c_email'>Repeat Email address</label>

                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control input-form" placeholder="Email" autoComplete='off'
                  id='c_email'
                  name='c_email'
                  value={values.c_email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-label="Email" aria-describedby="basic-addon1" required />
                {errors.c_email && touched.c_email ?
                  (<p className='form-error'>{errors.c_email}</p>)
                  : null}
              </div>
            </div>
          </div>
          <div className='Password'>
            <div className="input-group mb-3 password">
              <label className="input-group label-name"
                htmlFor='password'>Password</label>

              <span className="input-group-text" id="basic-addon1"><AiFillLock /></span>
              <input type="password" className="form-control input-form" placeholder="Password"
                autoComplete='off'
                id='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-label="pawword" aria-describedby="basic-addon1" required />
              {errors.password && touched.password ?
                (<p className='form-error'>{errors.password}</p>)
                : null}
            </div>

            <div className="input-group mb-3 password">
              <label className="input-group label-name"
                htmlFor='c_pass'>Confirm Password</label>

              <span className="input-group-text" ><BsFillFileLock2Fill /></span>

              <input type="password" className="form-control input-form" placeholder="Password"
                autoComplete='off'
                id='c_pass'
                name='c_pass'
                value={values.c_pass}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-label="password" aria-describedby="basic-addon1" required />
              {errors.c_pass && touched.c_pass ?
                (<p className='form-error'>{errors.c_pass}</p>)
                : null}
            </div>
          </div>

          <div className="mb-3 form-check">
            <FormControlLabel required control={<Checkbox />} label="send me test account setting" />

          </div>
          <div className="mb-3 form-check">
            <FormControlLabel required control={<Checkbox />} label="Accept all terms and condition" />
          </div>
          <div className="mb-3 form-check">
            <FormControlLabel required control={<Checkbox />} label="Check me out" />


          </div>
          <button type="submit" className="btn btn-primary button"
              // alert("Registration Succesfully")
            onClick={() =>{}}>  Create Account</button>
        </form>
      </div>
    </>

  )
}

export default Registration