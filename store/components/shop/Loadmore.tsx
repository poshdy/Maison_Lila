"use client";
import Spinner from "@/components/Spinner";
import { Product } from "@/types";
import React from "react";
import { useState } from "react";
import Products from "./Products";
import { getData } from "@/fetchers";
import { Button } from "../ui/button";
type Props = {
  category: string;
};

const Loadmore = ({ category }: Props) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);

  const loadMoreProducts = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      let url: string;
      if (category) {
        url = `product?page=${nextPage}&category=${category}`;
      } else {
        url = `product?page=${nextPage}`;
      }
      const newProducts = (await getData(url)) ?? [];
      setProducts((prevProducts: Product[]) => [
        ...prevProducts,
        ...newProducts,
      ]);
      setPage(nextPage);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Products products={products} />
      <div className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3">
        <Button variant="main" onClick={loadMoreProducts}>
          {loading ? <Spinner /> : "Load more"}
        </Button>
      </div>
    </>
  );
};

export default Loadmore;
