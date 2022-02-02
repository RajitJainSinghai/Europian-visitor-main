import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div class="footer-div">
          <ul class="footer-ul">
            <li class="footer-li">Quick-link</li>

            <li>Home</li>
            <li>Wonder in Europe</li>
            <li>Tourist Attraction</li>
            <li>favourite</li>
          </ul>
        </div>
        <div class="address">
          <p class="heading-para1">Address</p>
          <p class="sub-heading-para">
            14, 1 Ellis bridge ST, auckland 3500, Europe +15 9900 990 009
            contactus@Europe-visit.com
          </p>
        </div>
        <div class="email-footer">
          <p>Subscribe our news-letter</p>
          <input class="email" type="text" placeholder="Your email" />
          <button class="button-subscribe">Subscribe</button>
        </div>
        <hr class="hr-tag" />
        <center>
          <p>Techis.io © All Rights Reserved</p>
        </center>
      </footer>
    </>
  );
}

export default Footer;
