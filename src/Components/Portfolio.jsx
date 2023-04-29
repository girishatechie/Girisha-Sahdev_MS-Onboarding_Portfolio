/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Crop Recommendation System using Machine Learning",
    description:
      "A crop recommendation system that can be successfully used to derive and predict the crop yield by taking in available parameters such as rainfall, average temperature and amount of pesticides used during the crop period. Our project was shortlisted as one of the Top 20 Teams (Semi-Finalist) out of 1000+ Applicants, in HackOverflow 2.0.",
    url: "https://github.com/girishatechie/Crop-Yield-er_Hackoverflow-2.0",
  },
  {
    title: "Ask Your Seniors: Web Application",
    description:
      "This Web App built using MERN Stack, creates a seamless link between you and your College seniors so that they can enlighten you with their invaluable experience and clarify your doubts.",
    url: "https://github.com/girishatechie/Ask-Your-Seniors",
  },
  {
    title: "Prediction of Strength of Concrete using Machine Learning",
    description:
      "Built this ML Model using Python. Libraries like Numpy, Matplotlib, Pandas, Scikit-Learn, etc were used and the model was properly trained using most accurate ML Algorithms, for better accuracy.",
    url: "",
  },
  {
    title: "Airline Booking System",
    description:
      "Created using Database connectivity through Python and SQL. This project also involved the use of Tkinter Library.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
