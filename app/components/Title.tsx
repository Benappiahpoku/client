import React from "react";

interface TitleProps {
  ptext?: string;
  h2text?: string;
  classes?: string;
}

const Title: React.FC<TitleProps> = ({
  ptext = "Title Component",
  h2text = "SubTitle Component",
  classes,
}) => {
  return (
    <div className={`title ${classes}`}>
      <p>{ptext}</p>
      <h2>{h2text}</h2>
    </div>
  );
};

export default Title;
