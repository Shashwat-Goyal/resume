import React from 'react';

export const Contact = ({profile }: any) => {

  const { address, phoneNumber, email } = profile.fields;

	return (
		<section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact information for easy and efficient communication, including phone number and email address to reach out and connect with me.</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{address.fields.addressLine1}, {address.fields.city}, {address.fields.state} {address.fields.zipcode}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p><a href={`mailto:${email}`}>{email}</a></p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p><a href={`tel:+1{phoneNumber}`}>+1 {phoneNumber}</a></p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.5217608052562!2d-74.009554!3d40.7285433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f2a4334b93%3A0x4e08cf320e31c304!2s375%20Hudson%20St%2C%20New%20York%2C%20NY%2010014!5e0!3m2!1sen!2sus!4v1663736356780!5m2!1sen!2sus" frameBorder={0} style={{border:0, width: '100%', height: '290px' }} allowFullScreen></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows={10} required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
	)
}