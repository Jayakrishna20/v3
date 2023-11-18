import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow">Jayakrishnan</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          As a freshly minted software engineer, I am excited to embark on a journey of continuous
          learning and innovative project development. Armed with state-of-the-art skills acquired
          through rigorous education and hands-on experiences, I am eager to contribute to the
          dynamic field of software engineering. My passion lies in pushing the boundaries of
          technology and creating solutions that address real-world challenges. I am enthusiastic
          about immersing myself in a collaborative environment where I can absorb knowledge from
          seasoned professionals while actively contributing my ideas and skills. My goal is not
          only to apply what I've learned but to evolve and grow by embracing new challenges,
          technologies, and methodologies. I am ready to bring a fresh perspective to the team and
          contribute to the creation of cutting-edge projects that make a meaningful impact.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
