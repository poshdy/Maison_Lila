import React from "react";
import { slider } from "@/types";
import MoblieView from "./MoblieView";
import DesktopView from "./DesktopView";
import Wrapper from "../Shared/Wrapper";
type Props = {
  data: slider;
};

const Slider = ({ data }: Props) => {
  return (
    <Wrapper>
      <DesktopView data={data} />
      <MoblieView data={data} />
    </Wrapper>
  );
};

export default Slider;
