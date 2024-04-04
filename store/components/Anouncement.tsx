import Link from "next/link";
import React from "react";

const Anouncement = (anoun: any) => {
  return (
    <div className="relative bg-main isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 ">
        <p className="leading-6 text-md text-white">
          <strong className="font-semibold text-lg">What is new!</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {anoun?.anoun?.text}
        </p>
        <Link
          href="shop"
          className="flex-none rounded-full border-white border-2 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Shop Now! <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end"></div>
    </div>
  );
};

export default Anouncement;
