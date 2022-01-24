import React from 'react';
import Header from '../components/Header';
import Maps from '../assets/img/maps.png';
import Footer from '../components/Footer';

function Map() {
    return (
        <>
            <Header />
            <img class="maps" src={Maps} alt="" />
            <Footer />
        </>
    );
}

export default Map;
