import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import CourseCard from "./Components/CourseCard";
import CourseContent, { CPP } from "./Components/CourseContent";

function App() {
  const courses = [
    {
      title: "Programming Languages",
      id: "programming",
      description: "All programming language courses",
      modules: [
        { name: "C Programming", pathlink: "/cprogramming" },
        { name: "C++ Programming", pathlink: "/cpp" },
        { name: "Python Programming", pathlink: "/python" },
        { name: "Java Programming", pathlink: "/java" },
        { name: "JavaScript Programming", pathlink: "/javascript" },
      ],
    },
    {
      title: "Domain Specific",
      id: "domainspecific",
      description: "All domain specific course",
      modules: [
        { name: "Web Development", pathlink: "/webdevelopment" },
        { name: "App Development", pathlink: "/appdevelopment" },
        { name: "Game Development", pathlink: "/gamedevelopment" },
        { name: "Robotics & IoT", pathlink: "/roboticsiot" },
        { name: "Database Management", pathlink: "/cpp" },
      ],
    },
    {
      title: "Foreign Languages",
      id: "foreign",
      description: "All domain specific course",
      modules: [
        { name: "Spanish" },
        { name: "Chinese" },
        { name: "French" },
        { name: "Italian" },
        { name: "Japanese" },
      ],
    },
    {
      title: "General Skills",
      id: "generalskill",
      description: "All domain specific course",
      modules: [
        { name: "MS-Word" },
        { name: "MS-Excel" },
        { name: "MS-Powerpoint" },
        { name: "Canva" },
        { name: "Photoshop" },
      ],
    },
    {
      title: "21st Century Skills",
      id: "lifeskill",
      description: "All domain specific course",
      modules: [
        { name: "Personality Development" },
        { name: "Communication Skills" },
        { name: "Abacus" },
        { name: "Vedic Maths" },
        { name: "Critical Thinking" },
      ],
    },
  ];
  const contents=[
    "Basic",
    "Loops & Conditional statements",
    "Functions & Pointers",
    "Object Oriented Programming",
    "Advance Concepts",
    "Final Projects",
  ];

  const programmingCatalog = [courses[0]];
  const domainCatalog = [courses[1]];
  const foreignCatalog = [courses[2]];
  const generalCatalog = [courses[3]];
  const lifeCatalog = [courses[4]];
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>

          <Route  exact  path="/courses"  element={<CourseCard courses={courses} />}></Route>
          <Route  exact  path="/courses/programming"  element={<CourseCard courses={programmingCatalog} />}></Route>
          <Route  exact  path="/courses/domainspecific"  element={<CourseCard courses={domainCatalog} />}></Route>
          <Route  exact  path="/courses/foreignlanguages"  element={<CourseCard courses={foreignCatalog} />}></Route>
          <Route  exact  path="/courses/lifeskill"  element={<CourseCard courses={lifeCatalog} />}></Route>
          <Route  exact  path="/courses/generalskill"  element={<CourseCard courses={generalCatalog} />}></Route>
          <Route  exact  path="/cpp"  element={
              <CourseContent  title="C++ Programming"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/cprogramming"  element={
              <CourseContent  title="C  Programming"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/python"  element={
              <CourseContent  title="Python Programming"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/java"  element={
              <CourseContent  title="Java Programming"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/javascript"  element={
              <CourseContent  title="JavaScript Programming"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/webdevelopment"  element={
              <CourseContent  title="Web Developement"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/appdevelopment"  element={
              <CourseContent  title="App Development"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/gamedevelopment"  element={
              <CourseContent  title="Game Development"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>

          <Route  exact  path="/roboticsiot"  element={
              <CourseContent  title="Robotics and IoT"  description="Description"  imgLink={require("./assets/Logo.jpg")}  lectureCount="15"  contents={contents}/>}>
          </Route>


        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
