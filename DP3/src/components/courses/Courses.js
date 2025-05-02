import React from 'react';
import CourseItem from '../courses/CourseItem'; 
import './Courses.css';

const Courses = () => {
  const course = [
    {
        title: "MATH 101",
        courseTitle: "Integral Calculus with Applications", 
        desc: "The definite integral, integration techniques, applications, modelling, infinite series." ,
    },
    {
        title: "MATH 100",
        courseTitle: "Differential Calculus with Applications", 
        desc: "Derivatives of elementary functions. Applications and modelling: graphing, optimization." ,
    },
    {
        title: "CPSC 110",
        courseTitle: "Computation, Programs, and Programming", 
        desc: "Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world." ,
    },
    {
        title: "CPSC 121",
        courseTitle: "Models of Computation", 
        desc: "Physical and mathematical structures of computation. Boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution." ,
    },
    {
        title: "CPSC 210",
        courseTitle: "Software Construction", 
        desc: "Design, development, and analysis of robust software components. Topics such as software design, computational models, data structures, debugging, and testing." ,
    },
    {
        title: "PHYS 106",
        courseTitle: "Enriched Physics 1", 
        desc: "Classical mechanics including conservation laws, angular momentum of rigid bodies and simple harmonic motion, wave phenomena, with an introduction to special relativity, quantum mechanics, nuclear physics, statistical mechanics and solid state physics." ,
    },
    {
        title: "PHYS 119",
        courseTitle: "Experimental Physics Lab", 
        desc: "Introductory laboratory course, with emphasis on data collection, data analysis techniques, and scientific reasoning." ,
    },
    {
        title: "CHEM 121",
        courseTitle: "Structure and Bonding in Chemistry", 
        desc: "Fundamentals of bonding theories and structural chemistry, with applications relevant to modern society. " ,
    },
    {
        title: "SCIE 113",
        courseTitle: "First-Year Seminar in Science", 
        desc: "Small-group experience where students study science in society, scientific process, and how to communicate scientific concepts. Enrolment limited to students in the B. Sc. program in Science." ,
    },
    {
        title: "POLI 101",
        courseTitle: "Introduction to Canadian Politics", 
        desc: "Canadian governments, politics, and public policy. How policies emerge from politics contested through the interaction of institutions (Constitution, Parliament, federalism, elections, and the courts) and actors (individuals, parties, interest groups, nations). Insights are applied to explain current events and controversies." ,
    },
  ];

  return (
    <div className="course-container"> {}
      {course.map((c) => (
        <CourseItem
          key={c.title}
          title={c.title}
          courseTitle={c.courseTitle}
          desc={c.desc}
        />
      ))}
    </div>
  );
};

export default Courses;
