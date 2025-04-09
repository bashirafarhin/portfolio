import React from "react";
import "./Featured.css";

function Featured() {
  const projects = [
    {
      name: "AI CAREER COACH",
      image: "./careercoach.png",
      desc: "AI Career Coach is an AI-powered web application that helps users prepare for technical interviews through personalized guidance, mock interview questions, and skill-building resources. Users can track their progress through a personalized dashboard, generate tailored cover letters, and stay updated with the latest industry trends refreshed weekly.c:\Users\HP\OneDrive\Pictures\Screenshots 1\Screenshot 2025-04-09 110843.png",
    },
    {
      name: "DOCTOR APPOINTMENT SYSTEM",
      image: "./das.png",
      desc: "Doctor Appointment System is a web-based application designed to simplify the process of booking and managing medical appointments. The platform allows users to register, search for doctors by specialty, book appointments, and receive confirmations. Admins can manage doctor profiles, view all appointments, and maintain records efficiently.",
    },
    {
      name: "CODE REVIEWER",
      image: "./codeReviewer.png",
      desc: "Code Reviewer is a platform designed to streamline the process of reviewing code by offering detailed, structured, and AI-assisted feedback. Users can submit code snippets and receive suggestions on improving readability, efficiency, and adherence to best practices. The system supports multiple languages, highlights potential bugs, and encourages clean coding standards—making it a valuable tool for learners and teams focused on code quality.",
    },
    {
      name: "INDIA TIMES",
      image: "./indiaTimes.png",
      desc: "India Times is a unified news platform that aggregates content from multiple major sources like NDTV, BBC, and Hindustan Times—all in one place. Users can access exclusive foreign news and extended features by subscribing through a secure Razorpay integration. The platform fetches real-time articles using web scraping, ensuring users stay up to date with the latest happenings across various domains, both national and international.",
    },
    {
      name: "KEEPER NOTEPAD",
      image: "./keeper.png",
      desc: "Keeper is a minimalist note-taking web application designed to help users create, update, and manage their personal notes with ease. It features a clean UI and the ability to change background colors.",
    },
    {
      name: "FLIPKART CLONE",
      image: "./flipkart.png",
      desc: "Flipkart Clone is a full-stack clone of the popular e-commerce platform, built to deliver a complete and seamless shopping experience. It features user authentication using local login, authorization via cookies, and a forgot password flow with email support. Users can search and filter products, browse paginated product listings, and add items to their cart or wishlist. The platform allows users to leave product reviews, and includes email notifications for key actions like order confirmations and password resets. It also supports secure payments via Razorpay and ensures a responsive, user-friendly interface across devices.",
    },
    {
      name: "Orabella",
      image: "./orabella.png",
      desc: "Jewellery Store is a visually captivating, responsive web application designed to showcase a diverse range of jewelry products with a strong emphasis on aesthetics and user experience. Built using HTML, CSS, and JavaScript, the site integrates advanced animations and smooth transitions powered by GSAP (GreenSock Animation Platform) and Locomotive Scroll, enhancing both interactivity and engagement. Users can seamlessly explore product collections in an elegant layout with parallax scrolling and high-performance animations that bring the interface to life. This project demonstrates a strong focus on front-end design, animation control, and delivering a premium look-and-feel.",
    },
    {
      name: "Airbnb Clone",
      image: "./airbnb.png",
      desc: "Airbnb Clone is a fully responsive frontend platform designed to closely replicate the layout, design, and user experience of the original Airbnb website. The homepage features search bar; clicking on the suggested types dynamically displays different property listings based on the selection. The project focuses on clean UI, interactive elements, and seamless performance across all screen sizes.",
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="w-full px-[4.5vw] border-b border-zinc-700 pb-10">
        <h1 className="text-[4vw] tracking-tighter">Featured Projects</h1>
      </div>

      <div className="flex flex-col gap-[6vw] px-[4.5vw] pt-[6vw]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 w-full items-center"
          >
            {/* Left - Project Image */}
            <div className="w-full md:w-1/2 h-[50vh]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right - Project Name and Description */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-[2vw] font-bold text-[#CDEA68]">
                {project.name}
              </h2>
              <p className="text-zinc-400 text-[1vw] mt-4">
                {/* Add your project description here */}
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
