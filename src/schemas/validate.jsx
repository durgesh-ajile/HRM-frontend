
import * as Yup from 'yup';

export const validate = Yup.object({
  username : Yup.string().min(2).max(35).required("User name required"),
    fname : Yup.string().min(2).max(25).required("First name required"),
    lname : Yup.string().min(2).max(25).required("Last name required"),
    email:Yup.string().email().required("Email required"),
    c_email:Yup.string().email().required("Confirm email required").oneOf([Yup.ref("email"),null],
    "Email and confirm email must match"),
    password:Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      'Password must contain at least 1 digit, 1 uppercase letter, and 1 special character'
    )
    .min(6, 'Password must be at least 6 characters long')
    .required('Please enter your password'),

     c_pass: Yup.string()
     .matches(
       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
       'Password must contain at least 1 digit, 1 uppercase letter, and 1 special character'
     )
     .min(6, 'Password must be at least 6 characters long')
     .required('Confirm password required').oneOf([Yup.ref('password'),null] ,
    "Password and confirm password must match"),

})