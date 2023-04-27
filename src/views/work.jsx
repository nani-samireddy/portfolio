import FullCard from "../components/cards/full-card";
import { projectData } from "../data/project-data";

const Work = () => {
  return (
    <div id="work" className="w-100vh flex justify-center">
      <div className="w-80vw 2xl:w-60vw min-h-90vh flex flex-col justify-center items-center">
        <h1 className="heading">Recent Works</h1>
        <div className="flex flex-col gap-10">
          {projectData.map((project) => (
            <>
              <FullCard project={project} />{" "}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
