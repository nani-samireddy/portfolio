import MakeCenter from "../components/make-center";
import TechChip from "../components/tech-chip";
import { techData } from "../data/tech-data";

const Skills = () => {
  return (
    <MakeCenter>
      <h1 className="heading">I'm Confient in</h1>
      <div className="flex gap-5 flex-wrap">
        {techData.map((tech) => {
          return <TechChip key={tech.name} tech={tech} />;
        })}
      </div>
    </MakeCenter>
  );
};

export default Skills;
