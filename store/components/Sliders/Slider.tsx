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
    <section className="w-full">
      <DesktopView data={data} />
      <MoblieView data={data} />
    </section>
  );
};

export default Slider;
