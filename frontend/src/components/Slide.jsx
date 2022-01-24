import React from 'react';
import Slide1 from '../assets/img/slide1.png';
import Slide2 from '../assets/img/slide3.png';

function Slide() {
    return (
        <>
            <center>
                <h4 class="natural-wonder">Natural Wonders in Europe</h4>
            </center>
            <div class="slide">
                <img class="slide1" src={Slide1} alt="" />
                <img class="slide1" src={Slide1} alt="" />
                <img class="slide2" src={Slide2} alt="" />
                <img class="slide1" src={Slide1} alt="" />
                <img class="slide1" src={Slide1} alt="" />
            </div>
        </>
    );
}

export default Slide;
