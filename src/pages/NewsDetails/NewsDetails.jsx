import React from 'react';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/Header/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const NewsDetails = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className='col-span-3'>
                    <h2 className='text-5xl'>News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;