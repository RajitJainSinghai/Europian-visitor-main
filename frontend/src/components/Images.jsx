import React from 'react';
import Img1 from '../assets/img/img1.png';
import Favourite from '../assets/img/favourite.png';

function Images() {
    return (
        <>
            <div class="images">
                <ul class="menu">
                    <li class="option">
                        <img class="visitor-img" src={Img1} alt="“”" />
                        <img class="fav" src={Favourite} alt="" />
                        <p class="heading">Lauterbrunnen Valley</p>
                        <p class="sub-heading">
                            Like something straight out of The Sound of Music, the Lauterbrunnen Valley is endlessly
                            picturesque
                        </p>
                    </li>

                    <li class="option">
                        <img class="visitor-img" src={Img1} alt="“”" />
                        <img class="fav" src={Favourite} alt="" />
                        <p class="heading">Lauterbrunnen Valley</p>
                        <p class="sub-heading">
                            Like something straight out of The Sound of Music, the Lauterbrunnen Valley is endlessly
                            picturesque
                        </p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Images;
