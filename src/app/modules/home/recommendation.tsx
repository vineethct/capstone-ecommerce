"use client";
import { IProducts, getProducts } from "@/data/shopify/queries/products";
import { IRecommendedProducts } from "@/data/shopify/queries/recommended-products";
import useNavbarHeight from "@/store/navbar-store";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import dummyProducts from "@/data/dummy-data/recommended.json";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const fetchProducts = async () => {
  return getProducts();
};

const Recommendations = () => {
  const { height: navBarHeight } = useNavbarHeight();
  const [products, setProducts] = useState<IRecommendedProducts>();

  useEffect(() => {
    // fetchProducts().then((data) => {
    //   setProducts(data);
    // });

    setProducts(dummyProducts);
    // console.log(dummyProducts);
  }, []);

  return (
    <motion.div
      className="_section"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        paddingTop: `${navBarHeight}px`,
      }}
    >
      <div id="ourRecommendations" className="p-5">
        <h3 className="text-3xl font-bold md:text-5xl">Our Recommendations</h3>
        <div className="flex items-center justify-center">
          <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-2">
            {dummyProducts?.data.collection.products.nodes.map((product) => (
              <motion.div
                key={product.id}
                className="overflow-hidden rounded-lg  shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.images.nodes[0].url}
                  alt={product.title}
                  className="h-48 w-full object-contain sm:h-36"
                  width={500}
                  height={48}
                />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-semibold">
                    {product.title}
                  </h2>
                  <p className="mb-4 text-gray-500">$25.00</p>
                  <p className="mb-4 text-gray-500">{product.description}</p>
                  <Button className="w-full rounded py-2">Buy Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Recommendations;
