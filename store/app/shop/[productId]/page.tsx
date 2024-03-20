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
  console.log(product);
  return (
    <Wrapper>
      <section className="mb-12 space-y-10">
        <section className="space-y-2">
          <div className="md:w-[50%] w-full h-[50vh] md:h-[80vh] relative ">
            <Image
              alt={product?.name}
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="100vh,100vw"
              src={product?.image?.at(0)?.url as string}
            />
          </div>
          <div className="flex flex-col items-start">
            <Heading
              size="text-3xl font-semibold leading-thight tracking-tighter"
              title={product?.name}
            />
            <Text size="text-sm" text={product?.category?.name} />
          </div>
          <div className="flex flex-col items-start">
            <Heading size="text-lg" title="Description" />
            <Text size="text-sm" text={product?.description} />
          </div>
        </section>
        <YouMayAlsoLike id={product?.category?.id} />
        <ProductController product={product} />
      </section>
    </Wrapper>
  );
};

export default ProductPage;
