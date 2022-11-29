import React from 'react';

export const Hero = ({ cover }: any) => {
	
	return (
		<section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{background: `url("https://${cover.fields.file.url}") top center`, backgroundSize: 'cover'}}>
			<div className="hero-container" data-aos="fade-in">
				<h1>Shashwat Goyal</h1>
				<p>I&apos;m a <span className="typed" data-typed-items="Software Developer, Freelancer, Sports Enthusiast"></span></p>
			</div>
		</section>
	)
}