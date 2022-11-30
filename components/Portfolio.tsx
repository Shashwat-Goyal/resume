import React from 'react';

export const Portfolio = ({ portfolio }: any) => {

	return (
		<section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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