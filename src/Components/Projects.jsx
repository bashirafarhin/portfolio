import React from "react";
import "./Projects.css";



function Projects() {

  const projects = [
    {
      name: "AI CAREER COACH",
      image: "./careercoach.png",
      desc: "AI Career Coach is an AI-powered web application that helps users prepare for technical interviews through personalized guidance, mock interview questions, and skill-building resources. Users can track their progress through a personalized dashboard, generate tailored cover letters, and stay updated with the latest industry trends refreshed weekly.",
      link: "https://career-coach-kodm.onrender.com",
    },
    {
      name: "DOCTOR APPOINTMENT SYSTEM",
      image: "./das.png",
      desc: "Doctor Appointment System is a web-based application designed to simplify the process of booking and managing medical appointments. The platform allows users to register, search for doctors by specialty, book appointments, and receive confirmations. Admins can manage doctor profiles, view all appointments, and maintain records efficiently.",
      link: "https://bookdoctorappointment-jv18.onrender.com/",
    },
    {
      name: "CODE REVIEWER",
      image: "./codeReviewer.png",
      desc: "Code Reviewer is a platform designed to streamline the process of reviewing code by offering detailed, structured, and AI-assisted feedback. Users can submit code snippets and receive suggestions on improving readability, efficiency, and adherence to best practices. The system supports multiple languages, highlights potential bugs, and encourages clean coding standards—making it a valuable tool for learners and teams focused on code quality.",
      link: "https://codereviewer-t1kn.onrender.com/",
    },
    {
      name: "KEEPER NOTEPAD",
      image: "./keeper.png",
      desc: "Keeper is a minimalist note-taking web application designed to help users create, update, and manage their personal notes with ease. It features a clean UI and the ability to change background colors.",
      link: "https://keeperweb-zfic.onrender.com",
    },
    {
      name: "FLIPKART CLONE",
      image: "./flipkart.png",
      desc: "Flipkart Clone is a full-stack clone of the popular e-commerce platform, built to deliver a complete and seamless shopping experience. It features user authentication using local login, authorization via cookies, and a forgot password flow with email support. Users can search and filter products, browse paginated product listings, and add items to their cart or wishlist. The platform allows users to leave product reviews, and includes email notifications for key actions like order confirmations and password resets. It also supports secure payments via Razorpay and ensures a responsive, user-friendly interface across devices.",
      link: "https://flipkart-89b7.onrender.com/",
    },
    {
      name: "Orabella",
      image: "./orabella.png",
      desc: "Jewellery Store is a visually captivating, responsive web application designed to showcase a diverse range of jewelry products with a strong emphasis on aesthetics and user experience. Built using HTML, CSS, and JavaScript, the site integrates advanced animations and smooth transitions powered by GSAP (GreenSock Animation Platform) and Locomotive Scroll, enhancing both interactivity and engagement. Users can seamlessly explore product collections in an elegant layout with parallax scrolling and high-performance animations that bring the interface to life. This project demonstrates a strong focus on front-end design, animation control, and delivering a premium look-and-feel.",
      link: "https://bashirafarhin.github.io/jewelleryStore/",
    },
    {
      name: "Airbnb Clone",
      image: "./airbnb.png",
      desc: "Airbnb Clone is a fully responsive frontend platform designed to closely replicate the layout, design, and user experience of the original Airbnb website. The homepage features search bar; clicking on the suggested types dynamically displays different property listings based on the selection. The project focuses on clean UI, interactive elements, and seamless performance across all screen sizes.",
      link: "https://airbnb-frontend-clone-5i2l.onrender.com/",
    },
    {
      name: "INDIA TIMES",
      image: "./indiaTimes.png",
      desc: "India Times is a unified news platform that aggregates content from multiple major sources like NDTV, BBC, and Hindustan Times—all in one place. Users can access exclusive foreign news and extended features by subscribing through a secure Razorpay integration. The platform fetches real-time articles using web scraping, ensuring users stay up to date with the latest happenings across various domains, both national and international.",
      link: "#",
    },
  ];

  return (
    <div className="featured-container">
      <div className="section-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <a className="project-hover-area" href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.name} />
              </a>
            </div>
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
