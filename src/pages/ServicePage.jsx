import { Form, Button, Card, Modal } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { serviceContext } from '../contexts/serviceContext';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';

const ServicePage = () => {

    const { addServices, getServices, deleteService, services, currentPosts, setCurrentPage } = useContext(serviceContext)
    const schema = yup.object().shape({
        name: yup.string().min(2).max(30).required("Required"),
        category: yup.string().required("Required"),
        price: yup.string().min(3).max(255).required("Required"),
    })
    useEffect(() => {
        getServices()
    }, [])
    const navigate = useNavigate()
    let addForm
    let buttons
    let object = new URLSearchParams(window.location.search)
    const [brandValue, setBrandValue] = useState('')
    function filterPhones(key, value) {
        object.set(key, value)
        let newUrl = `${window.location.pathname}?${object.toString()}`
        navigate(newUrl)
        getServices()
        setBrandValue(value)
    }
    useEffect(() => {
        setBrandValue(object.get('category'))
    }, [object])
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
        <div style={{ display: 'flex' }}>
            <div style={{ width: '15%', backgroundColor: 'wheat' }}>
                <h3>Filter</h3>
                <Form.Group
                    className="mb-3"
                    value={brandValue}
                    controlId="formBasicEmail"
                    onChange={(e) => {
                        filterPhones('category', e.target.value)
                        // setCurrentPage(1)
                    }}
                >
                    <Form.Check
                        block='true'
                        label="Анализы"
                        value='Анализ'
                        name="category"
                        type="radio"
                        id="inline-radio-1"
                    // onChange={() => setRole('doc')}
                    />
                    <Form.Check
                        block='true'

                        label="Диагностика"
                        value='Диагностика'
                        name="category"
                        type="radio"
                        id="inline-radio-2"
                    // onChange={() => setRole('pac')}
                    />
                    <Form.Check
                        block='true'

                        label="Лечение"
                        value='Лечение'
                        name="category"
                        type="radio"
                        id="inline-radio-2"
                    // onChange={() => setRole('pac')}
                    />
                    <Form.Check
                        block='true'

                        label="Реабилитация"
                        value='Реабилитация'
                        name="category"
                        type="radio"
                        id="inline-radio-2"
                    // onChange={() => setRole('pac')}
                    />
                </Form.Group>
            </div>
            <div style={{ width: '85%' }}>
                {addForm}
                {
                    currentPosts ? (
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>{
                            currentPosts.map(item => {
                                return <Card key={item.id} style={{ width: '18rem', border: '1px solid #31B8BF' }}>
                                    <Card.Body>
                                        <Card.Title>Название услуги: {item.name}</Card.Title>
                                        <Card.Subtitle>Категория услуги: {item.category}</Card.Subtitle>
                                        <Card.Text>Цена услуги: {item.price}</Card.Text>
                                        {
                                            user ? (user.type === 'doctor' ? (<><Link to={'/edit/' + item.id}><Button >Редактировать</Button></Link>
                                                <Button onClick={() => { deleteService(item.id) }}>Удалить</Button></>) : (<>
                                                    <Button href="#">Корзина</Button>
                                                </>)) : (<h2>Loading...</h2>)
                                        }
{/* sad */}
                                    </Card.Body>
                                </Card>
                            })
                        }</div>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
                <Pagination />
            </div>
        </div>
    );
};

export default ServicePage;