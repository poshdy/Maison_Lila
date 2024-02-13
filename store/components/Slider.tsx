import React from "react";
import { slider } from "@/types";
import MoblieView from "./Slider/MoblieView";
import DesktopView from "./Slider/DesktopView";
type Props = {
  data: slider;
};

const Slider = ({ data }: Props) => {
  return (
    <>
      <DesktopView data={data} />
      <MoblieView data={data} />
    </>
  );
};

export default Slider;
