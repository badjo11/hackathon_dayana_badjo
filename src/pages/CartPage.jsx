import React, { useContext, useEffect } from 'react';
import { Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { serviceContext } from '../contexts/serviceContext';

const CartPage = () => {
    const { changeCountService, getAll, cart } = useContext(serviceContext)
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div>
            <h2>Корзина</h2>
            {
                cart ? (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th align="right">Category</th>
                                    <th align="right">Count</th>
                                    <th align="right">Summa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.services.map((item) => (
                                    <tr
                                        key={item.service.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <td component="th" scope="row">
                                            {item.service.name}
                                        </td>
                                        <td align="right">{item.service.category}</td>
                                        <td align="right">
                                            <input type="number" onChange={(e) => changeCountService(e.target.value, item.service.id)} value={item.count} />
                                        </td>
                                        <td align="right">{item.subPrice}</td>
                                    </tr>
                                ))}
                                <tr >
                                    <td colSpan={3} align="right" style={{ fontWeight: 'bold', fontSize: '18px' }}>Total: </td>
                                    <td align="right" style={{ fontWeight: 'bold', fontSize: '18px' }}>{cart.totalPrice} сом</td>
                                </tr>
                            </tbody>
                        </Table>
                ) : (
                    <h2>Loading...</h2>
                )
            }

            <h3>Total price: {cart.totalPrice} сом</h3>
            <Link to='/order'><Button>Произвести оплату</Button></Link>
        </div>
    );
};

export default CartPage;