import Link from "next/link";
import React from "react";

const Anouncement = (anoun: any) => {
  return (
    <div className="relative bg-main isolate flex items-center justify-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5">
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
          className="text-white text-base font-bold tracking-tighter leading-tight border-white px-4 rounded-full py-2 border flex items-center justify-center"
        >
          Shop Now <span className="ml-2" aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Anouncement;
