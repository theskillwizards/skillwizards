import React from "react";

export default function CourseContent(props) {
  const result = props.contents.map((content, index) => (
    <li key={index}>{content}</li>
  ));
  return (
    <div className="container">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.imgLink} alt="Img" width={50} />
      <h4>About Course</h4>
      <p>{props.description}</p>
      <h5>Course Structure</h5>
      <span>{props.lectureCount} Lectures</span>
      <span>60 min per class</span>
      <ul>{result}</ul>
    </div>
  );
}
