// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const openNav = () => {
    document.querySelector("mySideBar").style.width = "250px";
    document.querySelector("main").style.marginLeft = "250px";
  };
  const closeNav = () => {
    document.querySelector("mySideBar").style.width = "0";
    document.querySelector("main").style.marginLeft = "0";
  };
  return (
    <div className="mt-16" id="intro">
      {/* <Button variant="primary" onClick={openNav}>
        Open SideBar
      </Button> */}
      <div className="text-center ml-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:ml-96 md:ml-79 xl:ml-90 justify-center">
        <div className="grid grid-span-2 justify-between">
          <h2 className="mt-3 font-bold">Osaid Kamal,</h2>
          <h2 className="font-bold">Full Stack & DevOps Engineer</h2>
          <p className="mt-4">
            Hi , I am Osaid Kamal i build web applications using <br />
            Java and Python as backend.
          </p>
          {/* <Link class="resume" to="./OsaidCV-19" target="_blank" download>
            Download Resume
          </Link> */}
        </div>
        <div class="flex float-center w-60 ml-16">
          <img
            className="float-right"
            src={require("./logo.jpg")}
            alt={"logo"}
          />
        </div>
        <div className="lg:ml-8  mr-60 lg:mr-60 ml-44 mt-5">
          <Link className="cursor-pointer" to="project">
            <FontAwesomeIcon className="text-center" icon={faArrowDown} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
