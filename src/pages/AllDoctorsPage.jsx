import React, { useContext, useEffect } from 'react';
import { userContext } from '../contexts/userContext';
import { Link } from 'react-router-dom'
const AllDoctorsPage = () => {
    const { getAllDocs, doctors } = useContext(userContext)
    useEffect(() => {
        getAllDocs()
    }, [])

    return (
        <div style={{ textAlign: 'center', fontSize: '50px' }}>
            <ul>
                {
                    doctors ? (
                        doctors.map(item => (
                            <Link key={item.id} to={'/doctor/' + item.id}><li >{item.username}</li></Link>
                        ))
                    ) : (<h2>Loading</h2>)
                }
                {/* asd */}
            </ul>
        </div>
    );
};

export default AllDoctorsPage;