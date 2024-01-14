import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Swal from "sweetalert2"
import generatePayload from "promptpay-qr"
import qrcode from "qrcode"

const Bill = () => {
    const mobileNumber = "061-429-4288";
    const IDCardNumber = "0-0000-00000-00-0"
    const [svg, setSvg] = useState();
    const carts = useSelector((state) => state.carts);
    const total = carts.reduce(
        (total, product) => total + product.quantity*product.price,
        0
      );
      const totalBill =(total)=>{
        if(total > 0) return total +35
      } ;

      useEffect(()=>{
        const totals = totalBill(total);
        generateQR(totals);
    }, {total});

    const generateQR = (amount) => {
        const payload = generatePayload(mobileNumber, { amount });
    // Convert to SVG QR Code
    const options = { type: "svg", color: { dark: "#000", light: "#fff" } };
    qrcode.toString(payload, options, async (err, svg) => {
      if (err) return console.log(err);
      await setSvg(svg);
    });
  };

    const handleCheckOut = () => {
        Swal.fire({
            title: "<strong>PromptPay Payment</strong>",
            icon: "warning",
            html: `
            <img src="data:image/svg+xml;utf8, ${encodeURIComponent(svg)}"/>
            Please use any Bank application scan this Qrcode to pay with Promptpay
            `,

            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "!Cheek_Out!"
         
          });         
        }

  return (

    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
        <div className="mb-2 flex justify-between">
            <p className="text-gray-400">Subtotal</p>
            <p className="text-gray-400">{total}฿</p>
        </div>
        <div className="mb-2 flex justify-between">
            <p className="text-gray-400">Shipping</p>
            <p className="text-gray-400">{total > 0 ? "35฿" :0}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
        <div>
        <p className="mb-1 text-lg font-bold">{total>0? totalBill(total) : 0 } ฿</p>
        <p className=" text-sm text-gray-400">including VAT</p>
        </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-600 py-1 font-medium text-blue-50 hover:bg-blue-700" onClick={handleCheckOut}>check out</button> 
    </div>
  )
};

export default Bill;