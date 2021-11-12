import React from 'react';
import { Card, FormControl, InputGroup } from 'react-bootstrap';
import './MainPage.css'
import logo_img from '../../images/search.svg'
import logo_img1 from '../../images/firstCardOnline.svg'
import logo_img2 from '../../images/secondCardOnline.svg'
import logo_img3 from '../../images/thirdCardInline.svg'
import Button from '@restart/ui/esm/Button';


const MainHeader = () => {
    return (
        <div className="search">
            <div className="search-main-text">
                <h1 className="main-text">Найдите проверенного врача и запишитесь на прием</h1>
                <InputGroup size="lg" >
                    <FormControl placeholder="пример: имя, специальность" />
                    <InputGroup.Text id="inputGroup-sizing-lg" >
                        <img src={logo_img} alt="" />

                    </InputGroup.Text>
                </InputGroup>

            </div>
            <div className="cards d-flex container">
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img style={{ width: "160px", margin: '0 auto' }} src={logo_img1} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>Онлайн консультации</Card.Title>
                        <Card.Text style={{ color: 'black' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button variant="primary">Получить</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ width: "100px", margin: '0 auto' }} src={logo_img2} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>Онлайн консультации</Card.Title>
                        <Card.Text style={{ color: 'black' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button variant="primary">Получить</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ width: "100px", margin: '0 auto' }} src={logo_img3} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>Онлайн консультации</Card.Title>
                        <Card.Text style={{ color: 'black' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button variant="primary">Получить</Button>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default MainHeader;