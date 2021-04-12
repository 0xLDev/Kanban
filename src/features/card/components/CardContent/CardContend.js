import { Div } from "@vkontakte/vkui";
import React from "react";
import { useSelector } from "react-redux";
import { getText } from "../../selectors";
import marked from "marked";

import "./CardContent.css";

const CardContent = () => {
  const text = useSelector(getText);

  if (!text) {
    return null;
  }

  const content = text.replace(/\\n/g, "\n");

  return (
    <Div className="CardContent">
      <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Div>
  );
};

export default CardContent;
