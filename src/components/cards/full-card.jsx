import { techData } from "../../data/tech-data";
import TechChip from "../tech-chip";

const FullCard = ({ project }) => {
  return (
    <div className="full-card w-60vw smooth-trasnsition">
      <div>
        <div className="   flex justify-between items-center">
          <h1 className="text-2xl font-medium p-4">{project.title}</h1>
          <a
            target="_blank"
            rel="noreferrer"
            className="smooth-trasnsition font-bold text-black hover:text-blue-700 text-2xl"
            href={project.link}
          >
            Visit
          </a>
        </div>
        <p className="p-4">{project.description}</p>
        <div className="p-4 flex flex-wrap gap-3">
          {project.techUsed.map((tech) => {
            return (
              <TechChip
                key={tech}
                tech={techData.filter((td) => td.name == tech)[0]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FullCard;
