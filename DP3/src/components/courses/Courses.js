import React, { useState } from 'react';
import CourseItem from '../courses/CourseItem';
import Legend from '../courses/Legend';
import './Courses.css';
import DescriptionBox from '../courses/DescriptionBox';

const RELEVANCE_ORDER = {
  related: 0,
  core: 1,
  general: 2, // "breadth"
};

const Courses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);  

    const course = [
        {
            title: "CPSC 340",
            courseTitle: "Machine Learning and Data Mining",
            desc: "Models of algorithms for dimensionality reduction, nonlinear regression, classification, clustering and unsupervised learning; applications to computer graphics, computer games, bio-informatics, information retrieval, e-commerce, databases, computer vision and artificial intelligence.",
            relevance: "related",
        },
        {
            title: "CPSC 313",
            courseTitle: "Computer Hardware and Operating Systems",
            desc: "Instruction sets, pipelining, code optimization, caching, virtual memory management, dynamically linked libraries, exception processing, execution time of programs.",
            relevance: "related",
        },
        {
            title: "CPSC 310",
            courseTitle: "Introduction to Software Engineering",
            desc: "Specification, design, validation, evolution and construction of modern software systems, within the context of socially and professionally relevant domains such as ethics, intellectual property, and information security.",
            relevance: "related",
        },
        {
            title: "MATH 221",
            courseTitle: "Matrix Algebra",
            desc: "Systems of linear equations, operations on matrices, determinants, eigenvalues and eigenvectors, diagonalization of symmetric matrices.",
            relevance: "related",
        },
        {
            title: "MATH 220",
            courseTitle: "Mathematical Proof",
            desc: "Sets and functions; induction; cardinality; properties of the real numbers; sequences, series, and limits. Logic, structure, style, and clarity of proofs emphasized throughout.",
            relevance: "core",
        },
        {
            title: "MATH 200",
            courseTitle: "Calculus III",
            desc: "Analytic geometry in 2 and 3 dimensions, partial and directional derivatives, chain rule, maxima and minima, second derivative test, Lagrange multipliers, multiple integrals with applications.",
            relevance: "core",
        },
        {
            title: "MATH 215",
            courseTitle: "Elementary Differential Equations I",
            desc: "First-order equations; linear equations; linear systems; Laplace transforms; numerical methods; trajectory analysis of plane nonlinear systems. Applications of these topics will be emphasized. ",
            relevance: "core",
        },
        {
            title: "CPSC 221",
            courseTitle: "Basic Algorithms and Data Structures",
            desc: "Design and analysis of basic algorithms and data structures; algorithm analysis methods, searching and sorting algorithms, basic data structures, graphs and concurrency.",
            relevance: "related",
        },
        {
            title: "CPSC 213",
            courseTitle: "Introduction to Computer Systems",
            desc: "Software architecture, operating systems, and I/O architectures. Relationships between application software, operating systems, and computing hardware; critical sections, deadlock avoidance, and performance; principles and operation of disks and networks.",
            relevance: "core",
        },
        {
            title: "DSCI 100",
            courseTitle: "Introduction to Data Science",
            desc: "Use of data science tools to summarize, visualize, and analyze data. Sensible workflows and clear interpretations are emphasized",
            relevance: "core",
        },
        {
            title: "STAT 302",
            courseTitle: "Introduction to Probability",
            desc: "Basic notions of probability, random variables, expectation and conditional expectation, limit theorems.",
            relevance: "related",
        },
        {
            title: "COGS 200",
            courseTitle: "Introduction to Cognitive Systems",
            desc: "Interdisciplinary examination of human mental processes and how these are mediated by the brain. Will draw on cognitive psychology, linguistics, cognitive neuroscience, philosophy, artificial intelligence.",
            relevance: "related",
        },
        {
            title: "PHYS 118",
            courseTitle: "Electricity, Light and Radiation",
            desc: "Optics, electricity and magnetism, electric circuits, electromagnetic waves.",
            relevance: "general",
        },
        {
            title: "PHYS 170",
            courseTitle: "Mechanics I",
            desc: "Statics of particles, equilibrium or rigid bodies, rigid body statics and internal forces, trusses; kinematics: rectilinear motion; dynamics: Newton's second law, friction, impulse, momentum, work and energy.",
            relevance: "general",
        },
        {
            title: "CHEM 123",
            courseTitle: "Thermodynamics, Kinetics and Organic Chemistry",
            desc: "Fundamentals of chemical reactivity: thermodynamics; kinetics; organic chemistry, including stereochemistry; applications relevant to modern society.",
            relevance: "general",
        },
        {
            title: "MATH 101",
            courseTitle: "Integral Calculus with Applications",
            desc: "The definite integral, integration techniques, applications, modelling, infinite series.",
            relevance: "general",
        },
        {
            title: "MATH 100",
            courseTitle: "Differential Calculus with Applications",
            desc: "Derivatives of elementary functions. Applications and modelling: graphing, optimization.",
            relevance: "general",
        },
        {
            title: "CPSC 110",
            courseTitle: "Computation, Programs, and Programming",
            desc: "Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world.",
            relevance: "core",
        },
        {
            title: "CPSC 121",
            courseTitle: "Models of Computation",
            desc: "Physical and mathematical structures of computation. Boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution.",
            relevance: "core",
        },
        {
            title: "CPSC 210",
            courseTitle: "Software Construction",
            desc: "Design, development, and analysis of robust software components. Topics such as software design, computational models, data structures, debugging, and testing.",
            relevance: "core",
        },
        {
            title: "PHYS 106",
            courseTitle: "Enriched Physics 1",
            desc: "Classical mechanics including conservation laws, angular momentum of rigid bodies and simple harmonic motion, wave phenomena, with an introduction to special relativity, quantum mechanics, nuclear physics, statistical mechanics and solid state physics.",
            relevance: "general",
        },
        {
            title: "PHYS 119",
            courseTitle: "Experimental Physics Lab",
            desc: "Introductory laboratory course, with emphasis on data collection, data analysis techniques, and scientific reasoning.",
            relevance: "general",
        },
        {
            title: "CHEM 121",
            courseTitle: "Structure and Bonding in Chemistry",
            desc: "Fundamentals of bonding theories and structural chemistry, with applications relevant to modern society. ",
            relevance: "general",
        },
        {
            title: "SCIE 113",
            courseTitle: "First-Year Seminar in Science",
            desc: "Small-group experience where students study science in society, scientific process, and how to communicate scientific concepts. Enrolment limited to students in the B. Sc. program in Science.",
            relevance: "general",
        },
        {
            title: "POLI 101",
            courseTitle: "Introduction to Canadian Politics",
            desc: "Canadian governments, politics, and public policy. How policies emerge from politics contested through the interaction of institutions (Constitution, Parliament, federalism, elections, and the courts) and actors (individuals, parties, interest groups, nations). Insights are applied to explain current events and controversies.",
            relevance: "general",
        },
        {
            title: "BIOL 111",
            courseTitle: "Introduction to Modern Biology",
            desc: "A course on the concepts fundamental to biological issues, such as the genetic basis of biological variation, evolution, infectious diseases, causes of cancer, population growth, and human effects on ecosystems. ",
            relevance: "general",
        },
        {
            title: "SOCI 102",
            courseTitle: "Inequality and Social Change",
            desc: "Inequality, institutions, social structure and social change.",
            relevance: "general",
        },
    ];

    const sortedCourses = [...course].sort(
    (a, b) => RELEVANCE_ORDER[a.relevance] - RELEVANCE_ORDER[b.relevance]
    );


  return (
    <>
      <Legend />
      <div className="course-container">
        {sortedCourses.map((c) => (
          <CourseItem
            key={c.title}
            title={c.title}
            courseTitle={c.courseTitle}
            desc={c.desc}
            relevance={c.relevance}
            onHover={setHoveredCourse}
          />
        ))}
      </div>
      <DescriptionBox course={hoveredCourse} />
    </>
  );
};

export default Courses;