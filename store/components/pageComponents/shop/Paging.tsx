import Link from "next/link";
import React from "react";

type Props = {
  page: string;
};

const Paging = ({ page }: Props) => {
  return (
    <div className="flex justify-between items-center pb-20">
      <Link
        className="font-bold bg-lila h-10 text-center w-20 rounded-full p-2 text-white"
        href={`shop?page=${Number(page) > 1 ? Number(page) - 1 : "1"}`}
      >
        Previous
      </Link>
      <Link
        className="font-bold bg-lila text-center  h-10 w-20 rounded-full p-2 text-white"
        href={`shop?page=${Number(page)  + 1}`}
      >
        Next
      </Link>
    </div>
  );
};

export default Paging;
