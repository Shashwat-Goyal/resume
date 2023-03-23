import React from "react";
import moment from "moment";

export const About = ({ assets, profile }: any) => {

  const { dateOfBirth, email, phoneNumber, address, designation } = profile.fields;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Innovative and deadline-driven Software Developer with 6 years of experience, Team player with a can-do attitude, 
						good time management skills, and a strong user focus. Skilled in Continuous Improvement, Agile, and 
						Business Process Improvement.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src={`https:${assets.fields.profileImage.fields.file.url}`}
              className="img-fluid"
              alt=""
							width={420}
							style={{objectFit: 'cover', height: 420}}
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{designation}</h3>
            <p className="fst-italic">
              An accomplished professional who has spent significant time creating user-friendly and visually appealing websites.  My expertise lies in developing responsive, mobile-friendly, and visually appealing web applications that deliver a seamless user experience.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Birthday:</strong> <span>{moment(dateOfBirth).format('DD MMMM, YYYY')}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span><a href={`tel:+1${phoneNumber}`}>+1 {phoneNumber}</a></span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>{address.fields.city}, {address.fields.country}</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong> <span>{moment(moment()).diff(moment(dateOfBirth), 'years')}</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span><a href={`mailto:${email}`}>{email}</a></span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
