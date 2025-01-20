import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark" interval={3000} fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{
                        height: '100vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQWclWaalPJOzRwJsRJJAEHcOaxiYL5NEug&s"
                    alt="Shopping Cart"
                />
                <Carousel.Caption>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                            padding: '30px',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}
                    >
                        <h5 style={{ fontSize: '3rem', color: '#fff' }}>Online Shopping Made Easy</h5>
                        <p style={{ fontSize: '1.25rem', color: '#fff' }}>
                            Explore our wide range of products and shop from the comfort of your home.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{
                        height: '100vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQngJZl09Eqtf-sCmbYuEI3P_nDAA4UFW2aqmKEsYZCZx0kY3qEbXbEEOZi0T07InQrXo&usqp=CAU"
                    alt="Secure Payments"
                />
                <Carousel.Caption>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                            padding: '30px',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}
                    >
                        <h5 style={{ fontSize: '3rem', color: '#fff' }}>Secure and Fast Payments</h5>
                        <p style={{ fontSize: '1.25rem', color: '#fff' }}>
                            Experience hassle-free transactions with our trusted payment gateways.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{
                        height: '100vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://static.vecteezy.com/ti/photos-gratuite/p1/26481463-copains-avec-achats-sacs-dans-achats-centre-commercial-contexte-avec-vide-espace-pour-texterealisme-photo.jpg"
                    alt="Exclusive Offers"
                />
                <Carousel.Caption>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                            padding: '30px',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}
                    >
                        <h5 style={{ fontSize: '3rem', color: '#fff' }}>Exclusive Deals and Discounts</h5>
                        <p style={{ fontSize: '1.25rem', color: '#fff' }}>
                            Grab the best deals on your favorite products with unbeatable prices.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{
                        height: '100vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8Gvd44hRutopSOpFirlfIPJBPVnJedZdrA&s"
                    alt="Buy With One Touch"
                />
                <Carousel.Caption>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
                            padding: '30px',
                            borderRadius: '10px',
                            textAlign: 'center'
                        }}
                    >
                        <h5 style={{ fontSize: '3rem', color: '#fff' }}>Buy with one touch</h5>
                        <p style={{ fontSize: '1.25rem', color: '#fff' }}>
                            With one touch, Grab the best deals on your favorite products.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default DarkVariantExample;
