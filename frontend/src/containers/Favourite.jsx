import React from 'react';
import Header from '../components/Header';
import BackgroundImg from '../assets/img/back-gradient.png';
import Search from '../components/Search';
import Slide from '../components/Slide';
import Images from '../components/Images';
import VedeoImg from '../assets/img/vedeo-img.png';
import ImgBeforeGradient from '../assets/img/img-before-gradient.png';
import GradientImg from '../assets/img/gradient-img.png';
import Maps from '../assets/img/maps.png';
import Footer from '../components/Footer';

function Favourite() {
    return (
        <>
            <Header />
            <img class="background-img" src={BackgroundImg} alt="" />

            <h2 class="heading">Happiest place on Earth!</h2>
            <Search />
            <Slide />
            <center>
                <h4>Tourist Attractions in Europe</h4>
            </center>

            <Images />

            <section class="section-2">
                <div class="last">
                    <img class="vedeo-img" src={VedeoImg} alt="" />
                    <img class="img-before-gradient" src={ImgBeforeGradient} alt="" />
                    <img class="gradient-img" src={GradientImg} alt="" />
                </div>
                <div class="heading1">
                    <h2 class="heading-gradient">Get 10% Off on Your Next Travel</h2>
                    <p class="para">Maximum discount 1000$ per person</p>
                    <input class="email-bar" type="text" placeholder="Enter your Email" />
                    <button class="button-subscribe">Subscribe</button>
                </div>
                <img class="map" src={Maps} alt="" />
            </section>

            <Footer />
        </>
    );
}

export default Favourite;
