import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import Title from "./Title";

interface SkillProps {
  skillName: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skillLevel: string;
  color: string;
  skillYears: string;
}

const SkillSet: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <Title ptext="Skills" h2text="My Tech Stack" />
      <p>Here are some of the technologies I have worked with:</p>
      <div className="flex gap-5">
        <Skill
          skillName="HTML"
          Icon={FaHtml5}
          skillLevel="Expert"
          color="#e34c26"
          skillYears="15 years"
        />
        <Skill
          skillName="CSS"
          Icon={FaCss3Alt}
          skillLevel="Expert"
          color="#264de4"
          skillYears="15 years"
        />
        <Skill
          skillName="JavaScript"
          Icon={FaJs}
          skillLevel="Intermediate"
          color="#EDBA36"
          skillYears="10 years"
        />
        <Skill
          skillName="React"
          Icon={FaReact}
          skillLevel="Intermediate"
          color="#6D8DCB"
          skillYears="5 years"
        />
      </div>
      <div className="flex gap-5">
        <Skill
          skillName="Node"
          Icon={FaNodeJs}
          skillLevel="Intermediate"
          color="#68A063"
          skillYears="5 years"
        />
        <Skill
          skillName="Express"
          Icon={FaServer}
          skillLevel="Beginner"
          color="#444343"
          skillYears="4 years"
        />
        <Skill
          skillName="MongoDB"
          Icon={FaDatabase}
          skillLevel="Beginner"
          color="#00674A"
          skillYears="3 years"
        />
        <Skill
          skillName="Git"
          Icon={FaGitAlt}
          skillLevel="Expert"
          color="#F1502F"
          skillYears="15 years"
        />
      </div>
    </div>
  );
};

const Skill: React.FC<SkillProps> = ({
  skillName,
  Icon,
  skillLevel,
  skillYears,
  color,
}) => {
  return (
    <div className="flex-1">
      <div className="flex gap-2 items-center">
        <Icon className="text-4xl md:text-3xl" style={{ color: color }} />
        <div className="flex flex-col">
          <h4 style={{ lineHeight: "1.5rem", color: color }}>{skillName}</h4>
          <span style={{ lineHeight: "1.5rem", color: color }}>
            {skillLevel} <br></br>
            {skillYears}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
