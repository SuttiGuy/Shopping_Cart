import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Bill from "../components/Bill";

const MyCart = () => {
  // const product = {
  //   id: 1,
  //   productId: 1,
  //   name: "เสื้อ",
  //   imageURL:"https://down-th.img.susercontent.com/file/th-50009109-20ab5146b63650ffddc12c78ca8a3403",
  //   quantity: 1,
  //   category: "clothing",
  //   price: 139,
  // };
  const carts = useSelector((state) => state.carts);
  return (
    <main className="py 12 max-w7xl container mx-auto px-4">
      <div className="container mx-auto">
        <h2 className="mb-5 text-xl font-bold">Shopping Cart</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-x-6 md:w-2/3">
            { carts.length ? (
              carts.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))
                ) : (
                  <div> ไม่มีสินค้า_ในตะกร้า </div>
                )
            }
          </div>
          <div className="space-x-6 md:w-1/3">
          < Bill />   
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
