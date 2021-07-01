import React from 'react';
import AQP2 from './AQP2.jpg';
import BW from './BW.jpg';
import ITH2 from './ITH2.png'
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1 class="text-center">Super Cinema</h1>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={AQP2}
                        alt="A Quiet Place 2 banner"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={ITH2}
                        alt="In The Heights banner"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={BW}
                        alt="Black Widow banner"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
