import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  const courses = props.courses;
  const res = courses.map((course) => (
    <div key={course.title} id={course.id}>
      <h5>{course.title}</h5>
      <p>{course.description}</p>
      <div className="d-flex flex-wrap ">
        {course.modules.map((module, index) => (
          <Link key={module.name} to={module.pathlink} className="links">
            <div  className="card m-2" style={{ width: "15rem" }}>
              <img
                src={require("../assets/mission.jpeg")}
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{module.name}</h5>
                <p className="card-text">Description </p>
              </div>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  ));
  return (
    <section className="container">
      <h2>What we Offer</h2>
      <div>{res}</div>
    </section>
  );
}
