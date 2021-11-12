import React, { useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { userContext } from "../../contexts/userContext";
const SignUpModal = (props) => {
    const { signUpUser } = useContext(userContext);
    const schema = yup.object().shape({
        username: yup.string().min(2).max(30).required("Required"),
        type: yup.string().min(4).max(6).required("Required"),
        email: yup.string().email().min(3).max(255).required("Required"),
        password: yup
            .string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
            .min(8)
            .max(24)
            .required("Required"),
        passwordConfirmation: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Required"),
    });

    function handleSignup(data) {
        // e.preventDefault();
        signUpUser(data.username, data.password, data.email, data.type);
        props.handleClose();
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        validationSchema={schema}
                        onSubmit={(data) => {
                            handleSignup(data);
                        }}
                        initialValues={{
                            username: "",
                            type: "",
                            email: "",
                            password: "",
                            passwordConfirmation: "",
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form
                                style={{ width: "70%" }}
                                className="bg-light p-4"
                                onSubmit={handleSubmit}
                            >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Your username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your user name"
                                        name="username"
                                        onChange={handleChange}
                                        isValid={!errors.username && touched.username}
                                        isInvalid={!!errors.username}
                                        value={values.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handleChange}
                                        isValid={!errors.email && touched.email}
                                        isInvalid={!!errors.email}
                                        value={values.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>type</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        name="type"
                                        onChange={handleChange}
                                        isValid={!errors.type && touched.type}
                                        isInvalid={!!errors.type}
                                        value={values.type}
                                    >
                                        <option>Select type</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="pacient">Pacient</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.type}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        isValid={!errors.password && touched.password}
                                        isInvalid={!!errors.password}
                                        value={values.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Repeat a password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Repeat a password"
                                        name="passwordConfirmation"
                                        onChange={handleChange}
                                        isValid={
                                            !errors.passwordConfirmation &&
                                            touched.passwordConfirmation
                                        }
                                        isInvalid={!!errors.passwordConfirmation}
                                        value={values.passwordConfirmation}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.passwordConfirmation}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SignUpModal;