import * as Yup from 'yup';

export const validate = Yup.object({
    fname : Yup.string().min(2).max(25).required("Please Enter Your Firstname"),
    lname : Yup.string().min(2).max(25).required("Please Enter Your Lastname"),
    email:Yup.string().email().required("Enter Your Email"),
    c_email:Yup.string().email().required("Confirm Your Email").oneOf([Yup.ref("email"),null],
    "Email Must Match"),
    password: Yup.string().min(6).required("Please Enter your Password"),
    c_pass: Yup.string().min(6).required("Confirm your Password").oneOf([Yup.ref('password'),null] ,
    "paasword must match"),

})