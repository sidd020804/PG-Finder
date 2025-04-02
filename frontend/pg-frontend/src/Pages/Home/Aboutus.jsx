import React from "react";
import "./AboutUs.css"; // Importing CSS for styling
import Navbar from "../../Components/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>AERONEST 360 - A PG FINDER</strong> – your one-stop solution for
          finding the perfect PG accommodation. We help you explore various
          paying guest options that suit your budget and preferences.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make the process of finding a PG hassle-free and
          transparent. We connect you with verified listings and reliable
          landlords to ensure a smooth stay.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Verified PG Listings</li>
          <li>Affordable and Flexible Options</li>
          <li>Easy Online Booking</li>
          <li>24/7 Customer Support</li>
        </ul>

        <h2>Meet Our Developers</h2>
        <p>
          AERONEST 360 is built by a passionate and skilled team dedicated to delivering 
          an intuitive and efficient PG-finding experience. Our developers bring a 
          unique blend of technical expertise and creativity to ensure a seamless and 
          user-friendly platform that caters to your needs with precision and reliability.
        </p>
        <ul>
          <li><strong>Siddharth Sanghvi</strong> - Developer, SEO Analyst</li>
          <li><strong>Om Rajput</strong> - Backend Developer</li>
          <li><strong>Priyanshi Rao</strong> - Database Expert</li>
        </ul>

        <h2>Contact Us</h2>
        <p>Email: support@aeronest360.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
    </>
  );
};

export default AboutUs;
