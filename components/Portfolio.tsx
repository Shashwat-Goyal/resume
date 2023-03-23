import React from 'react';

export const Portfolio = ({ portfolio }: any) => {

	return (
		<section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Portfolio showcasing diverse and successful web projects demonstrating my skills and expertise in the field of responsive design, user experience, and cutting-edge front-end technologies.</p>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          {
            portfolio.map(((portfolioItem: any, index: number) => {
              return (
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={index}>
                  <div className="portfolio-wrap" onClick={() => window.open(portfolioItem.fields.url)}>
                    <img src={`https:${portfolioItem.fields.image.fields.file.url}`} className="img-fluid portfolio-image" alt="" />
                  </div>
                </div>
              )
            }))
          }
        </div>
      </div>
    </section>
	)
}