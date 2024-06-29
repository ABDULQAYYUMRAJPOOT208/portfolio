import React from "react";
import SkillLine from "./SkillLine";
const Skills = () => {
  return (
    <div className="p-20 flex">
      <div className="flex-1">
        <div>
          <p>HTML</p>
          <SkillLine width={75} />
        </div>
        <div>
          <p>CSS</p>
          <SkillLine width={80} />
        </div>
      </div>

      <div className="flex-1">
        <div>
          <p>HTML</p>
          <SkillLine width={75} />
        </div>
        <div>
          <p>CSS</p>
          <SkillLine width={80} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
