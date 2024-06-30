import React from "react";
import ProjectCard from "./ProjectCard";
import weather from "../resources/img/weather.png";
import ecomerce from "../resources/img/ecomerce.png";
import lms from "../resources/img/student.png";
import bank from "../resources/img/bank.png";
import coal from "../resources/video/coal.mp4";
import dos from "../resources/video/dos.mp4";
import excel from "../resources/video/excel.mp4";
import dld from "../resources/video/dld.mp4";
import firstYear from "../resources/video/firstYear.mp4";
import ProjectCardVideo from "./ProjectCardVideo";
const Projects = () => {
  return (
    <div className="all-projects p-10">
      <div>
        <h3 className="text-center text-4xl  py-20">Projects</h3>
      </div>
      <div className="flex justify-evenly flex-wrap project-card-container">
        <ProjectCard
          title={"Weather Analysis"}
          description={
            "This app analyse the past weather data and shows the graph of all data present in specific interval of time. This use SQL DBMS"
          }
          img={weather}
        />
        <ProjectCard
          title={"Ecomerce App"}
          description={
            "This is Mern a Project with authentication and ecryption with api integration. It has all functionalities required for  admin and user"
          }
          img={ecomerce}
        />
        <ProjectCard
          title={"Bank App"}
          description={
            "This is html, css and javascript app with flask app which include complete Crud and all bank functionalities. But do not have realtime applications"
          }
          img={bank}
        />
        <ProjectCard
          title={"LMS App"}
          description={
            "This is .Net app which include all functionalities of an LMS of university departement. It include subject registration and attendence and much more..."
          }
          img={lms}
        />
        <ProjectCardVideo
          title={"Coal Text Display"}
          description={
            "This is Assembly Language project which use arduino uno, esp32 and more components to show content on button click from mobile to screen using wifi."
          }
          vid={coal}
        />
        <ProjectCardVideo
          title={"Dos Shell"}
          description={
            "This is Dos Shell ( first OS ). This is written in c++ using all types of Data Structures like array, lists, vectors, stacks, all types of trees."
          }
          vid={dos}
        />
        <ProjectCardVideo
          title={"Excel Cli"}
          description={
            "This project uses all concepts and all types of DSA in c++."
          }
          vid={excel}
        />
        <ProjectCardVideo
          title={"Dice Electric"}
          description={
            "This project uses IC, lights and more components to make electric dice, in which different lights indicate different numbers."
          }
          vid={dld}
        />
        <ProjectCardVideo
          title={"Four Projects"}
          description={
            "This video includes four projects written in c++ and C#, cli and gui offline."
          }
          vid={firstYear}
        />
      </div>
    </div>
  );
};

export default Projects;
