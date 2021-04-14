import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Div } from "@vkontakte/vkui";
import marked from "marked";

import "./style.css";
import { getText } from "../../selectors";

const TextContent = () => {
  const text = useSelector(getText);

  if (!text) {
    return null;
  }

  const content = text.replace(/\\n/g, "\n");

  return (
    <Div className="TextContent">
      <span dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Div>
  );
};

export default memo(TextContent);
