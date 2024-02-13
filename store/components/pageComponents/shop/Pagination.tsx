import React from "react";
import Link from "next/link";
type Props = {
  page: string;
};

const Pagination = ({ page }: Props) => {
  return (
    <section className="w-full pt-4 pb-2 flex justify-between">
      <Link
        className="text-xl text-black font-extrabold hover:text-black/70"
        href={`/shop?page=${Number(page) > 1 ? Number(page) - 1 : "1"}`}
      >
        Previous
      </Link>
      <Link
        className="text-xl text-black font-extrabold hover:text-black/70"
        href={`/shop?page=${Number(page) + 1}`}
      >
        Next
      </Link>
    </section>
  );
};

export default Pagination;
