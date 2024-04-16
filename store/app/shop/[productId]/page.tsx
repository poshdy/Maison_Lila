import { getDataById } from "@/fetchers";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import YouMayAlsoLike from "@/components/shop/YouMayAlsoLike";
import Wrapper from "@/components/Shared/Wrapper";
import Heading from "@/components/Shared/Heading";
import ProductController from "@/components/shop/ProductController";
import Link from "next/link";
import { BreadCrumbs } from "@/components/Shared/bread-crumbs";
import { Metadata } from "next";
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
        <div className="flex flex-col items-start lg:justify-between space-y-8 md:w-[50%] w-full">
          <div className="space-y-3">
            <div className="flex flex-col items-start justify-start">
              <BreadCrumbs
                data={[
                  { href: "home", name: "Home" },
                  { href: "shop", name: "Products" },
                  {
                    href: `shop?category=${product?.category?.name}`,
                    name: String(product?.category?.name),
                  },
                  { href: `shop/${product?.id}`, name: product.name },
                ]}
              />
              <Heading
                size="md:text-4xl font-bold text-2xl"
                title={product?.name}
              />
            </div>
            <Link
              className="text-base font-gray-500"
              href={`shop?category=${product?.category?.name}`}
            >
              {product?.category?.name}
            </Link>
            <div className="flex flex-col items-start">
              <h4 className="text-sm font-semibold text-gray-600">
                Description:
              </h4>
              <p className="text-base text-gray-500">{product?.description}</p>
            </div>
          </div>
          <div className="w-full">
            <ProductController product={product} />
          </div>
        </div>
      </section>
      <YouMayAlsoLike id={product?.category?.id} />
    </Wrapper>
  );
};

export default ProductPage;

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product: Product | null = await getDataById(
    "product",
    params.productId
  );
  const title = product.name
  const description = product.description
  return {
    title,
    description
  };
}
