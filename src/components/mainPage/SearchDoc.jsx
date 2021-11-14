import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { userContext } from '../../contexts/userContext';
import logo_img from '../../images/search.svg'

const SearchDoc = () => {
    const { getAllDocs, doctors } = useContext(userContext)
    useEffect(() => {
        getAllDocs()
    }, [])
    const [dropDownDiv, setDropDownDiv] = useState(<div style={{ display: 'none' }}></div>)
    function handleChange(value) {
        if (value.length > 2) {
            setDropDownDiv(<>

                <div style={{ backgroundColor: 'white', color: 'darkblue', width: '100%', fontSize: '20px', height: 'auto', display: 'block' }}>
                    <h2>
                        Врачи
                    </h2>
                    <ul >
                        {
                            doctors.map(item => {
                                // console.log(item)
                                let res = new RegExp(value)
                                if (item.username.match(res)) {
                                    return <li style={{ listStyleType: 'doted', color: '#0d4e97', textAlign: 'left' }} key={item.id}>{item.username}</li>
                                }
                            })
                        }
                    </ul>

                </div>
            </>)
        } else {
            setDropDownDiv(<div style={{ display: 'nonee' }}></div>)
        }
    }
    return (
        <>
            <InputGroup size="lg" >
                <FormControl placeholder="пример: имя, специальность" onChange={(e) => { handleChange(e.target.value) }} />
                <InputGroup.Text id="inputGroup-sizing-lg"  >
                    <img src={logo_img} alt="" />
                </InputGroup.Text>
            </InputGroup>
            {dropDownDiv}
        </>
    );
};

export default SearchDoc;