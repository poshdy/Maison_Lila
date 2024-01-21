import ProductControl from "@/components/pageComponents/shop/ProductControl";
import { getDataById } from "@/fetchers";
import { formattedPrice } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import YouMayAlsoLike from "@/components/pageComponents/shop/YouMayAlsoLike";
import Reviews from "@/components/pageComponents/shop/Reviews";
import WriteReview from "@/components/pageComponents/shop/WriteReview";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product: Product | null = await getDataById(
    "product",
    params.productId
  );

  return (
    <section className="my-2 min-h-screen space-y-4">
      {product && (
        <>
          <div className="flex flex-col md:flex-row w-[90%] mx-auto">
            <div className="md:w-[50%] w-full h-[60vh] md:h-[80vh] relative ">
              <Image
                alt=""
                fill
                className="object-cover"
                sizes="100vh,100vw"
                src={product?.image?.at(0)?.url as string}
              />
            </div>
            <div className="flex flex-col items-start md:items-center gap-2 md:gap-5 w-full md:w-[50%]">
              <h2 className="text-4xl font-bold tracking-tighter leading-tight">
                {product?.name}
              </h2>

              <h3 className="text-gray-600">{product?.category?.name}</h3>
              <p className="text-gray-500 md:text-center">
                {product?.description}
              </p>
              <h2 className="hidden md:flex font-semibold text-2xl">
                {formattedPrice(product?.price)}
              </h2>
              <ProductControl product={product} />
            </div>
          </div>
          {<YouMayAlsoLike id={product?.category?.id} />}

          <div className="space-y-8">
            {<Reviews productId={product?.id} />}

            {<WriteReview productId={product.id} />}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductPage;
