import FullCard from "../components/cards/full-card";
import MakeCenter from "../components/make-center";
import { projectData } from "../data/project-data";

const Work = () => {
  return (
    <div id="work">
      <MakeCenter>
        <h1 className="heading">Recent Works</h1>
        <div className="flex flex-col gap-10">
          {projectData.map((project) => (
            <>
              <FullCard project={project} />{" "}
            </>
          ))}
        </div>
      </MakeCenter>
    </div>
  );
};

export default Work;
