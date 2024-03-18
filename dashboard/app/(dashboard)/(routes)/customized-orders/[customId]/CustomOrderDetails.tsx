import { CustomizedOrderColumn } from "@/types";
import Image from "next/image";

type Props = {
  data: CustomizedOrderColumn | null;
};

const CustomOrderDetails = ({ data }: Props) => {
  const header = "flex flex-col items-center gap-1";
  const span = "text-sm text-gray-400";
  const head = "text-xl text-black";
  return (
    <section className="flex flex-col space-y-3 min-h-screen items-center">
      <div className={header}>
        <span className={span}>Name </span>
        <h4 className={head}>{data?.name} </h4>
      </div>
      <div className={header}>
        <span className={span}>Email </span>
        <h4 className={head}>{data?.email} </h4>
      </div>
      <div className={header}>
        <span className={span}>Phone </span>
        <h4 className={head}>{data?.phone} </h4>
      </div>
      <div className={header}>
        <span className={span}>Message </span>
        <h4 className={head}>{data?.message} </h4>
      </div>
      <div className="w-80 aspect-square relative">
        <Image
          alt="IMg"
          fill
          src={data?.image as string}
          sizes="100vw,100vh"
          className={"object-cover rounded-2xl"}
        />
      </div>
    </section>
  );
};

export default CustomOrderDetails;
