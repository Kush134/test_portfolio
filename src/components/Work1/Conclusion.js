import React from "react";

import {
  QDivCon,
  QCard,
  Qmask,
  QuesDiv,
  Quest
} from "../../layouts/Work-Styles";

const Conclusion = props => (
  <QDivCon>
    <QCard>
      <Qmask image={props.back} />
    </QCard>
    <QuesDiv>
      <Quest>{props.question}</Quest>
    </QuesDiv>
  </QDivCon>
);
export default Conclusion;
