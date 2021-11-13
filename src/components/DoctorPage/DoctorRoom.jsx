import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../contexts/userContext';
import { Button, Form, Modal } from 'react-bootstrap'
const DoctorRoom = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const params = useParams();
    const { getUser, user } = useContext(userContext)
    useEffect(() => {
        getUser(params.id);
    }, []);
    // console.log(user)
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

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменить данные</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Специальность</Form.Label>
                            <Form.Control type="text" placeholder="Ваша специальность" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Опыт работы</Form.Label>
                            <Form.Control type="number" placeholder="Ваш опыт работы" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Образование</Form.Label>
                            <Form.Control type="text" placeholder="Ваше образование " />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DoctorRoom;