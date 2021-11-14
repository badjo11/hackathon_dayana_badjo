import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { userContext } from '../../contexts/userContext';
import { Button, Form, Modal } from 'react-bootstrap';
import * as yup from "yup";
import { Formik } from "formik";
const DoctorRoom = () => {
    const { getUser, user, editDoctor, deleteUser, logoutUser, clearState } = useContext(userContext)
    const [show, setShow] = useState(false);
    useEffect(() => {
        clearState()
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleDelete() {
        if (window.confirm('Вы уверены что хотите удалить профиль?')) {
            logoutUser();
            deleteUser(params.id)
            history('/')
            localStorage.clear();
        }
    }
    const schema = yup.object().shape({
        specialty: yup.string().min(2).max(30).required("Required"),
        education: yup.string().min(2).max(30).required("Required"),
        experience: yup.string().min(2).max(30).required("Required"),
    });
    const params = useParams();
    useEffect(() => {
        getUser(params.id);
    }, []);
    const history = useNavigate()

    return (
        <div className="container">
            {
                user ? (
                    <div>
                        <h2>Личный кабинет {user.username}</h2>
                        <h3>Специальность: {
                            user.specialty ? (
                                user.specialty
                            ) : (
                                "Не заполнено"
                            )
                        }</h3>
                        <h3>Возраст: {
                            user.age ? (
                                user.age
                            ) : (
                                'Не заполнено'
                            )}</h3>
                        <h3>Образование: {
                            user.education ? (
                                user.education
                            ) : (
                                'Не заполнено'
                            )}</h3>
                        <h3>Опыт работы: {
                            user.experience ? (
                                user.experience
                            ) : (
                                'Не заполнено'
                            )}</h3>
                    </div>
                ) : (
                    <h2>Loading</h2>
                )
            }
            <Button onClick={handleShow}>Редактировать данные</Button>
            <Button variant="secondary" color="secondary" onClick={handleDelete}>
                Удалить профиль
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменить данные</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        user ? (
                            <Formik
                                validationSchema={schema}
                                onSubmit={(data) => {
                                    editDoctor(data, user);
                                    getUser(user.id)
                                }}
                                initialValues={user}
                            >
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <Form
                                        style={{ width: "90%", margin: '0 auto' }}
                                        className="bg-light p-4"
                                        onSubmit={handleSubmit}
                                    >

                                        <Form.Group className="mb-3" controlId="formBasicEmail3">
                                            <Form.Label>Ваша специальность</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Введите вашу специальность"
                                                name="specialty"
                                                onChange={handleChange}
                                                isValid={!errors.specialty && touched.specialty}
                                                isInvalid={!!errors.specialty}
                                                value={values.specialty}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.specialty}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail4">
                                            <Form.Label>Ваше образование</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Введите ваше образование"
                                                name="education"
                                                onChange={handleChange}
                                                isValid={!errors.education && touched.education}
                                                isInvalid={!!errors.education}
                                                value={values.education}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.education}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail5">
                                            <Form.Label>Ваш опыт работы</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Введите ваш опыт работы"
                                                name="experience"
                                                onChange={handleChange}
                                                isValid={!errors.experience && touched.experience}
                                                isInvalid={!!errors.experience}
                                                value={values.experience}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.experience}
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        <Button variant="primary" type="submit" onClick={handleClose}>
                                            Изменить
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        ) : (<h3>Loading...</h3>)
                    }

                </Modal.Body>

            </Modal>
        </div>
    );
};

export default DoctorRoom;