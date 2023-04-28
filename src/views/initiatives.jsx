import MakeCenter from "../components/make-center";
import FullCard from "../components/cards/full-card";
import { initiativesData } from "../data/initiatives";
const Initives = () => {
  return (
    <div id="initiatives">
      <MakeCenter>
        <h1 className="heading">My Initiatives</h1>
        <div className="flex flex-col gap-10">
          { initiativesData.map((project) => (
            <>
              <FullCard project={project} />{" "}
            </>
          ))}
        </div>
      </MakeCenter>
    </div>
  );
};

export default Initives;
