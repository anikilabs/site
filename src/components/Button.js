import React from "react";

const Button = ({ title, href }) => {
  return (
    <a href={href}>
      <button className="btn btn-gradient-border btn-glow elevated flex-left text-glow">
        {title}
      </button>
    </a>
  );
};

export default Button;
