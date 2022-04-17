import React from 'react';
import { useLocation } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import axios from "axios";
import base_url from "../api/BootApi";

const UpdatePatients = () => {
    const location = useLocation();
 
    return (
        <div>

            <Formik
                initialValues={{
                    id: location.state.id,
                    firstName: location.state.fname,
                    lastName: location.state.lname,
                    dOB: location.state.dob,
                    gender: location.state.gender,
                    mob: location.state.mob,
                    address: location.state.address,
                    emailId: location.state.email
                }}

                onSubmit={(values, { setSubmitting }) => {
                    axios.put(`${base_url}/patients`, values).then(
                        (response) => {
                            alert("Updation Successful");
                        },
                        (error) => {
                            alert("Updation Failed");
                        }
                    )
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 500);
                }}



                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required("Required").matches(/(?=.*[A-Z])/, "At least one capital letter required").trim('trim'),
                    lastName: Yup.string().required("Required").matches(/(?=.*[A-Z])/, "At least one capital letter required"),
                    dOB: Yup.string().required("Required").matches(/(?=.*[0-9])/, "At least one number required"),
                    gender: Yup.string().required("Required"),
                    mob: Yup.string().required("Required").matches(/(?=.*[0-9])/, "At least one number required").min(10, "Too short").max(10, "Too long"),
                    address: Yup.string().required("Required"),
                    emailId: Yup.string().email().required("Required"),
                })}
            >
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


                    return (
                        <div className="container-fluid text-sm-center p-5 bg-light">
                            <Form onSubmit={handleSubmit} key={location.state.id}>
                                <FormGroup>
                                    <Label htmlFor="id">Id</Label>
                                    <Input
                                        name="id"
                                        type="text"
                                        placeholder={values.id}
                                        value={values.id}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        readOnly
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="firstName">FirstName</Label>
                                    <Input
                                        name="firstName"
                                        type="text"
                                        placeholder={values.firstName}
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.firstName && touched.firstName && "error"}
                                    />
                                    {errors.firstName && touched.firstName && (
                                        <div className="input-feedback">{errors.firstName}</div>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="lastName">LastName</Label>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        placeholder={values.lastName}
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.lastName && touched.lastName && "error"}
                                    />
                                    {errors.lastName && touched.lastName && (
                                        <div className="input-feedback">{errors.lastName}</div>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="dOB">Date of Birth</Label>
                                    <Input
                                        name="dOB"
                                        type="date"
                                        placeholder={values.dOB}
                                        value={values.dOB}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.dOB && touched.dOB && "error"}
                                    />
                                    {errors.dOB && touched.dOB && (
                                        <div className="input-feedback">{errors.dOB}</div>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="gender">Gender</Label>
                                    <Input
                                        name="gender"
                                        type="select"
                                        placeholder={values.gender}
                                        value={values.gender}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.gender && touched.gender && "error"}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </FormGroup>
                                {errors.gender && touched.gender && (
                                    <div className="input-feedback">{errors.gender}</div>
                                )}

                                <FormGroup>
                                    <Label htmlFor="mob">Contact Number</Label>
                                    <Input
                                        name="mob"
                                        type="number"
                                        placeholder={values.mob}
                                        value={values.mob}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.mob && touched.mob && "error"}
                                    />
                                    {errors.mob && touched.mob && (
                                        <div className="input-feedback">{errors.mob}</div>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                        name="address"
                                        type="text"
                                        placeholder={values.address}
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.address && touched.address && "error"}
                                    />
                                    {errors.address && touched.address && (
                                        <div className="input-feedback">{errors.address}</div>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="emailId">Email</Label>
                                    <Input
                                        name="emailId"
                                        type="text"
                                        placeholder={values.emailId}
                                        value={values.emailId}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={errors.emailId && touched.emailId && "error"}
                                    />
                                    {errors.emailId && touched.emailId && (
                                        <div className="input-feedback">{errors.emailId}</div>
                                    )}
                                </FormGroup>

                                <Button color="primary" outline type="submit" disabled={isSubmitting} >
                                    Update
                                </Button>
                                <Button color="danger ml-2" outline type="submit" disabled={isSubmitting}>
                                    Reset
                                </Button>
                            </Form>
                        </div>
                    );
                }}
            </Formik>
        </div>
    );
    

}

export default UpdatePatients;