import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Label, Input } from "reactstrap";
import { useNavigate,Link } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";



const ValidatedLoginForm = () => (
    <Formik
        initialValues={{
            email: "",
            password: ""
        }}
        
        onSubmit={(values, { setSubmitting }) => {
                if (values.email === 'a@gmail.com' && values.password === 'AAAsss123') {
                    alert('Working');
                    // <Link to="/home">About</Link>
                } else {
                    alert('Username/Password Incorrect');
                }
            console.log(values);
            setTimeout(() => {
                //console.log("Timeout", values);
                setSubmitting(false);
            }, 500);
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .max(16, "Do not exceed 16 characters limit")
                .matches(/((?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?!.*[\s]))/, "Password must contain atleast a number, one capital letter and one small letter.")
        })}>
        
        
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            // const navigate = useNavigate();
            // if (values.email === 'a@gmail.com' && values.password === 'AAAsss123') {
            //     navigate('/home');
            // }
            

            return (
                <div className="container-fluid text-sm-center p-5 bg-light" >
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                type="text"
                                placeholder="Enter your email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.email && touched.email && "error"}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <Label htmlFor="email">Password</Label>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.password && touched.password && "error"}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            <Button color="primary" outline type="submit" disabled={isSubmitting} >
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            );
        }}
    </Formik>
);

export default ValidatedLoginForm;