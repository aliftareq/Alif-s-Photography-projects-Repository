import React from 'react';
import BookEvent from '../BookEvent/BookEvent';
import Feature from '../Feature/Feature';
import ServiceHome from '../ServiceHome/ServiceHome';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-10 my-5'>
            <Slider></Slider>
            <ServiceHome></ServiceHome>
            <Feature></Feature>
            <BookEvent></BookEvent>
        </div>
    );
};

export default Home;