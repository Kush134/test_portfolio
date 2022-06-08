import React from "react";

import {
  QDiv,
  QCard,
  Qmask,
  QuesDiv,
  Quest
} from "../../../layouts/Work-Styles";

const Story = props => (
  <div>
    <QDiv>
      <QCard>
        <Qmask image={props.back} />
      </QCard>
      <QuesDiv>
        <Quest>{props.question}</Quest>
      </QuesDiv>
    </QDiv>
  </div>
);
export default Story;
