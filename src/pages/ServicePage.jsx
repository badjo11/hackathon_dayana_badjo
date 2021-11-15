import { Form, Button, Card, Modal } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { serviceContext } from '../contexts/serviceContext';
import { Link } from 'react-router-dom';

const ServicePage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { addServices, getServices, deleteService, services } = useContext(serviceContext)
    const schema = yup.object().shape({
        name: yup.string().min(2).max(30).required("Required"),
        category: yup.string().min(4).max(6).required("Required"),
        price: yup.string().min(3).max(255).required("Required"),
    })
    useEffect(() => {
        getServices()
    }, [])
    let addForm
    let buttons
    const [editing, setEditing] = useState({})
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
        if (user.type === 'doctor') {

            addForm = <div>

                <Formik
                    validationSchema={schema}
                    onSubmit={(data, { resetForm }) => {
                        addServices(data);
                        resetForm()

                    }}
                    initialValues={{
                        name: "",
                        category: "",
                        price: "",

                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form
                            style={{ width: "90%", margin: '0 auto' }}
                            className="bg-light p-4"
                            onSubmit={handleSubmit}
                        >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Название услуги</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Введите название услуги"
                                    name="name"
                                    onChange={handleChange}
                                    isValid={!errors.name && touched.name}
                                    isInvalid={!!errors.name}
                                    value={values.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail1">
                                <Form.Label>Категория услуги</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Введите категорию услуги"
                                    name="category"
                                    onChange={handleChange}
                                    isValid={!errors.category && touched.category}
                                    isInvalid={!!errors.category}
                                    value={values.category}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.category}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail2">
                                <Form.Label>Цена услуги</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Введите цену услуги"
                                    name="price"
                                    onChange={handleChange}
                                    isValid={!errors.price && touched.price}
                                    isInvalid={!!errors.price}
                                    value={values.price}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.price}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Отправить
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div >
        }
    }
    return (
        <>
            {addForm}
            {
                services ? (
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>{
                        services.map(item => {
                            return <Card key={item.id} style={{ width: '18rem', border: '1px solid #31B8BF' }}>
                                <Card.Body>
                                    <Card.Title>Название услуги: {item.name}</Card.Title>
                                    <Card.Subtitle>Категория услуги: {item.category}</Card.Subtitle>
                                    <Card.Text>Цена услуги: {item.price}</Card.Text>
                                    {
                                        user ? (user.type === 'doctor' ? (<><Link to={'/edit/' + item.id}><Button onClick={() => {
                                            handleShow()
                                        }}>Редактировать</Button></Link>
                                            <Button onClick={() => { deleteService(item.id) }}>Удалить</Button></>) : (<>
                                                <Button href="#">Корзина</Button>
                                            </>)) : (<h2>Loading...</h2>)
                                    }

                                </Card.Body>
                            </Card>
                        })
                    }</div>
                ) : (
                    <h2>Loading...</h2>
                )
            }

        </>
    );
};

export default ServicePage;