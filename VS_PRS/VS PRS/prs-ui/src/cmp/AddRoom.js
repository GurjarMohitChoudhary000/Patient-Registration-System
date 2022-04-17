import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import base_url_adm from "../api/BootApiAdm";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";

const AddRoom = () => {
    const location = useLocation();
    return (
        <Formik
            initialValues={{
                admId: 0,
                roomNo: 0,
                patient: {
                    id: location.state.id,
                    firstName: location.state.fname,
                    lastName: location.state.lname,
                    dOB: location.state.dob,
                    gender: location.state.gender,
                    mob: location.state.mob,
                    address: location.state.address,
                    emailId: location.state.email
                }
            }}

            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                axios.put(`${base_url_adm}/admission`, values).then(
                    (response) => {
                        alert("Room Allotment Successful");
                    },
                    (error) => {
                        alert("Room is not Alloted");
                    }
                )
                setTimeout(() => {
                    setSubmitting(false);
                }, 500);
            }}



            validationSchema={Yup.object().shape({
                roomNo: Yup.string().required("Required")
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
                        <h3>ADD ROOM FORM</h3>
                        <hr /><pre />
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="admId">Admission no</Label>
                                <Input
                                    name="admId"
                                    type="text"
                                    placeholder="Enter the Admission no."
                                    value={values.admId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.admId && touched.admId && "error"}
                                />
                                {errors.admId && touched.admId && (
                                    <div className="input-feedback">{errors.admId}</div>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="roomNo">Room no</Label>
                                <Input
                                    name="roomNo"
                                    type="text"
                                    placeholder="Enter the Room no."
                                    value={values.roomNo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.roomNo && touched.roomNo && "error"}
                                />
                                {errors.roomNo && touched.roomNo && (
                                    <div className="input-feedback">{errors.roomNo}</div>
                                )}
                            </FormGroup>

                            <Button color="primary" outline type="submit" disabled={isSubmitting}>
                                Add Room
                            </Button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
}

export default AddRoom;
