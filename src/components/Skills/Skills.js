import React from 'react';
import SkillBar from 'react-skillbars';

const skillData = [
    {
        "type": "Javascript",
        "level": 85
    },
    {
        "type": "React",
        "level": 80
    },
    {
        "type": "HTML",
        "level": 90
    },
    {
        "type": "CSS",
        "level": 85
    },
    {
        "type": "Bootstrap",
        "level": 85
    },
    {
        "type": "Material UI",
        "level": 80
    },
    {
        "type": "Node.js",
        "level": 60
    },
    {
        "type": "Express.js",
        "level": 50
    },
    {
        "type": "MongoDB",
        "level": 50
    },
    {
        "type": "SEO",
        "level": 70
    }
]

const colors = {
    "bar": "#26de81",
    "title": {
      "text": "#fff",
      "background": "#8e44ad"
    }
}

const Skills = () => {
    return (
        <section className="skills-container">
            <div className="container-brand">
                <h2 className="text-center mb-5">Skills</h2>
                <SkillBar skills={skillData} animationDelay={500} colors={colors}/>
            </div>
        </section>
    );
};

export default Skills;