import React from "react";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <><><div class="black-block"></div><><div className="main-content">
      <Navbar />
    </div><div>
        <div className="about-us-container">
          <div className="about-us-header">
            <h1 className="about-us-heading">About Us</h1>
          </div>
          <div className="about-us-content">
            <p className="about-us-paragraph1">
              Welcome to our LuxeMotors dealership! We are passionate about luxury
              cars and committed to providing exceptional customer service. With
              years of experience in the industry, we strive to offer a wide range
              of premium vehicles and make the car buying experience enjoyable and
              hassle-free.
            </p>
          </div>
        </div>
        <div className="team-desc">
          <h1 className="team-heading">Meet Our Team</h1>
          <p className="about-us-paragraph2">
            Our team of experienced professionals is dedicated to assisting you
            in finding the perfect luxury car that meets your unique needs and
            preferences. We carefully curate our inventory to include only the
            finest luxury cars from reputable manufacturers, ensuring that every
            vehicle we offer is of the highest quality.
          </p>
          {/* Team Section */}
          <div className="team-container">
            {/* Member 1 */}
            <div className="team-member">
              <img
                src={'/images/team_member1.jpg'}
                alt="Team Member 1"
                className="team-member-image" />
              <p className="team-member-description">
                John Doe - Sales Manager
              </p>
            </div>

            <div className="team-member">
              <img
                src='/images/team_member2.jpg'
                alt="Team Member 2"
                className="team-member-image" />
              <p className="team-member-description">
                Jane Smith - Finance Manager
              </p>
            </div>

            <div className="team-member">
              <img
                src="/images/team_member3.jpg"
                alt="Team Member 3"
                className="team-member-image" />
              <p className="team-member-description">
                Michael Johnson - Service Manager
              </p>
            </div>
          </div>
          {/* Why Choose Us Section */}
          <div className="why-choose-us">
            <h1 className="team-heading">Why Choose LuxeMotors</h1>
            <p className="about-us-paragraph3">
              Whether you're looking for a sleek sports car, a sophisticated
              sedan, or a spacious SUV, we have a wide selection of luxury
              vehicles to choose from. Our dealership offers competitive
              pricing, flexible financing options, and a knowledgeable sales
              team to guide you through the car buying process.
            </p>
            <div className="whyluxe2">

              <div className="whyluxe">
                <img
                  src={'/images/Exp.jpg'}
                  alt="experience"
                  className="whyluxe-image" />

              </div>
              <div className="whyluxe">
                <img
                  src={'/images/bestPrice.jpg'}
                  alt="bestPrice"
                  className="whyluxe-image" />

              </div>
              <div className="whyluxe">
                <img
                  src={'/images/TopQ.jpg'}
                  alt="top quality"
                  className="whyluxe-image" />

              </div>
            </div>


          </div>
        </div>
      </div></></><><div class="black-block"></div><><div className="main-content">
        <Footer />
      </div>  </></></>

        );
        };

        export default AboutUs;
    
