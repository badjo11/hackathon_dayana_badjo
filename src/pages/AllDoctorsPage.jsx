import React, { useContext, useEffect } from 'react';
import { userContext } from '../contexts/userContext';
import { Link } from 'react-router-dom'
const AllDoctorsPage = () => {
    const { getAllDocs, doctors } = useContext(userContext)
    useEffect(() => {
        getAllDocs()
    }, [])

    return (
        <div>
            <ul>
                {
                    doctors ? (
                        doctors.map(item => (
                            <Link to={'/doctor/' + item.id}><li key={item.id}>{item.username}</li></Link>
                        ))
                    ) : (<h2>Loading</h2>)
                }
            </ul>
        </div>
    );
};

export default AllDoctorsPage;