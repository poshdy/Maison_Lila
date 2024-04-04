import { getDataById } from "@/fetchers";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import YouMayAlsoLike from "@/components/pageComponents/shop/YouMayAlsoLike";
import Wrapper from "@/components/Shared/Wrapper";
import Heading from "@/components/Shared/Heading";
import Text from "@/components/Shared/Text";
import ProductController from "@/components/pageComponents/shop/ProductController";
const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product: Product | null = await getDataById(
    "product",
    params.productId
  );

  return (
    <Wrapper>
      <section className="flex flex-col lg:flex-row gap-3">
        <div className="md:w-[50%] w-full h-[50vh] md:h-[80vh] relative ">
          <Image
            alt={product?.name}
            fill
            className="object-cover rounded-lg shadow-md"
            sizes="100vh,100vw"
            src={product?.image?.at(0)?.url as string}
          />
        </div>
        <div className="flex flex-col items-start lg:justify-between space-y-8">
          <div className="py-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>
          <ProductController product={product} />
        </div>
      </section>
      <YouMayAlsoLike id={product?.category?.id} />
    </Wrapper>
  );
};

export default ProductPage;
