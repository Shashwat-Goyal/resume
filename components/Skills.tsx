import React from 'react';

export const Skills = ({ skills }: any) => {
	return (
		<section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>An overview of my technical competencies, including programming languages, software tools, and industry-specific platforms or technologies.</p>
        </div>

        <div className="row skills-content">
          {
            skills.map((skill: any, index: number) => {
              const { name, proficiency } = skill.fields;
              return (
                <div className="col-lg-6" data-aos="fade-up" key={index}>
                  <div className="progress">
                    <span className="skill">{name} <i className="val">{proficiency}%</i></span>
                    <div className="progress-bar-wrap">
                      <div className="progress-bar" role="progressbar" aria-valuenow={proficiency} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
	)
}