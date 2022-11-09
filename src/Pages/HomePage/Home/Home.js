import React from 'react';
import BookEvent from '../BookEvent/BookEvent';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div className='mx-10 my-5'>
            <Header></Header>
            <ServiceHome></ServiceHome>
            <Feature></Feature>
            <BookEvent></BookEvent>
        </div>
    );
};

export default Home;