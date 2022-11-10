import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import BookEvent from '../BookEvent/BookEvent';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    // states 
    const [services, setServices] = useState([])

    //loading data 
    useEffect(() => {
        fetch('http://localhost:5000/services?route=home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mx-10 my-5'>
            {
                services
                    ?
                    <>
                        <Header></Header>
                        <ServiceHome services={services}></ServiceHome>
                        <Feature></Feature>
                        <BookEvent></BookEvent>
                    </>
                    :
                    <LoadingSpinner></LoadingSpinner>
            }
        </div>
    );
};

export default Home;