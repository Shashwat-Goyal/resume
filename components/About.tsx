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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio
              vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
              incidunt officia tempore. Et eius omnis. Cupiditate ut dicta
              maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat
              cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium
              dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
