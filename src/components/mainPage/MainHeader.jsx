import React from 'react';
import { Card, FormControl, InputGroup } from 'react-bootstrap';
import './MainPage.css'
import logo_img from '../../images/search.svg'
import logo_img1 from '../../images/firstCardOnline.svg'
import logo_img2 from '../../images/secondCardOnline.svg'
import logo_img3 from '../../images/thirdCardInline.svg'
import logo_img4 from '../../images/searchdoctor.svg'
import logo_img5 from '../../images/lookprofile.svg'
import logo_img6 from '../../images/makeappointment.svg'
import logo_img7 from '../../images/doctor.svg'
import Button from '@restart/ui/esm/Button';
import { Carousel } from 'react-bootstrap';


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
            <div className="first-cards d-flex container">
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "135px", margin: '0 auto', padding: '20px' }} src={logo_img1} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center', }}>Онлайн консультации</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button className="btn">Получить</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "100px", margin: '0 auto', padding: '15px' }} src={logo_img2} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Самодиагностика</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button className="btn">Пройти</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "100px", margin: '0 auto', padding: '15px' }} src={logo_img3} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Вызвать врача на дом</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button className="btn" >Вызвать</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="second-cards d-flex container">
                <h2 className="second-main-text">Как это работает</h2>
                <h4 className="first-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</h4>
            </div>
            <div className="first-cards d-flex container">
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "130px", margin: '0 auto', padding: '20px' }} src={logo_img4} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center', }}>Найти врача</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "130px", margin: '0 auto', padding: '20px' }} src={logo_img5} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Посмотреть профиль</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "130px", margin: '0 auto', padding: '20px' }} src={logo_img6} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Запишитесь на прием</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="third-session">
                <div className="third-cards d-flex container">
                    <h2 className="third-main-text">Популярные врачи</h2>
                    <h4 className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</h4>
                </div>
                <div className="slider">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo_img7}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Ибрагимова Альбина Фархатовна</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo_img7}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo_img7}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div >
    );
};

export default MainHeader;