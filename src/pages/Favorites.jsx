import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { serviceContext } from '../contexts/serviceContext';

const Favorites = () => {
    const { changeCountServiceFavorites, getAllFavorites, favorites } = useContext(serviceContext)
    useEffect(() => {
        getAllFavorites()
    }, [])
    return (
        <div>
            <h2 style={{ color: '#31B8BF', textAlign: 'center', marginTop: '25px' }} >Избранное</h2>
            {
                favorites ? (

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th align="right">Category</th>
                                {/* <th align="right">Count</th> */}
                                {/* <th align="right">Summa</th> */}
                            </tr>
                        </thead>

                        <tbody>
                            {favorites.services.map((item) => (
                                <tr
                                    key={item.service.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <td component="th" scope="row">
                                        {item.service.name}
                                    </td>
                                    <td align="right">{item.service.category}</td>
                                    <td align="right">
                                        {/* <input type="number" onChange={(e) => changeCountServiceFavorites(e.target.value, item.service.id)} value={item.count} /> */}
                                    </td>
                                    {/* <td align="right">{item.subPrice}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>


                ) : (
                    <h2 style={{ color: '#1C374C', textAlign: 'center', marginTop: '25px' }}>Вы еще не добавили услуги в избранное</h2>
                )
            }


            {/* <h3>Total price: {favorites ? favorites.totalPrice : 0} сом</h3> */}
            {

                // favorites ? <Link to='/order'><Button style={{ backgroundColor: '#31B8BF', border: 'none' }}>Произвести оплату</Button></Link> : <></>
            }

        </div>
    );
};

export default Favorites;