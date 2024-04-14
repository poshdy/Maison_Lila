"use client";
import Spinner from "@/components/Spinner";
import { Product } from "@/types";
import React from "react";
import { useState, useEffect } from "react";
import Products from "./Products";
import { useInView } from "react-intersection-observer";
import { fetchProducts, getData } from "@/fetchers";
import { useSearchParams } from "next/navigation";
type Props = {
  category: string;
};

const Loadmore = ({ category }: Props) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const { ref, inView } = useInView();

  const loadMoreProducts = async () => {
    const bestSeller = searchParams.get("bestSeller");
    const category = searchParams.get("category");
    const newArrival = searchParams.get("newArrival");
    const qurey = { category, bestSeller, newArrival };
    const nextPage = page + 1;
    const newProducts = (await fetchProducts(String(nextPage), qurey)) ?? [];
    setProducts((prevProducts: Product[]) => [...prevProducts, ...newProducts]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);
  return (
    <>
      <Products products={products} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
};

export default Loadmore;
