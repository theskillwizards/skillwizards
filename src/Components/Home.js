import { Link } from "react-router-dom";
import SkillCatalog from "./SkillCatalog";
import React from 'react';
// Import Swiper React components



function Reasons(){
return(
    <section className="my-5 container">
        <h2 className="titles">Why SkillWizards</h2>
      <div className="container mentorsContainer">
        <div>
          <img  src={require('../assets/physical.png')} className="mentorsImg" alt="Physical" />
          <p>Physical Learning</p>
        </div>
        <div>
          <img src={require('../assets/quality.png')} className="mentorsImg" alt="Quality" />
          <p>Quality Learning</p>
        </div>
        <div>
          <img src={require('../assets/pocket.png')} className="mentorsImg" alt="Evaluation" />
          <p>Pocket Friendly</p>
        </div>
      </div>
    </section>
);
}
export default function Home() {
  return (
    <>
      <section className="nicheSection">
        <div className="container">
          <h1 className="heading">Find Your<br/>Niche</h1>
          <Link to="/courses" className="links"><button className="btn-5"><span>Explore Courses</span></button></Link>
        </div>
      </section>
      <SkillCatalog></SkillCatalog>
      <Reasons></Reasons>
    </>
  );
}

