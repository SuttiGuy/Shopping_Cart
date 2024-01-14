import React from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { addProduct } from "../redux/products/actions";

const AddProduct = () => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data))
    reset();
  };
  return (
    <div className="formContainer" >
      <h1 className="formTitle right-0">Add new product</h1>
      <div className="box-border h-50 w-100 p-6 border-2 border-blue-600 rounded-lg">
      <form
        className="space-y-4 text-[#000000]"
        onSubmit={handleSubmit(onSubmit)}
        class="container mx-auto"
      >     
        <div className="space-y-2 ">
          <label>Product Name</label>
          <input type="text" className="addProductInput rounded-2xl" 
           {...register("name", { required: true })}
           /> 
           {errors.name && <span>Name is required</span>}
        </div>
        <div className="space-y-2 ">
          <label>Category</label>

          <select className="addProductInput rounded-2xl"
           {...register("category ", { required: true })}
           >
            <option value="">Select a category</option>
            <option value="clothing">Clothing</option>
            <option value="gadgets">Gadgets </option>
            <option value="bags">Bags</option>
          </select>
          {errors.category && <span>Category is required</span>}
         
        </div>
        <div className="space-y-2">
          <label>Image URL</label>
          <input type="text" className="addProductInput rounded-2xl"
           {...register("imageURL", { required: true })}
            />
             {errors.imageURL && <span>image URL is required</span>}
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label>Price</label>
            <input type="number" className="addProductInput rounded-2xl"
             {...register("price", { required: true, min:0 })}
            />
             {errors.price && <span>Please enter a valid price</span>}
          </div>
          <div className="space-y-2">
            <label>Quantity</label>
            <input
              type="number"
              className="addProductInput rounded-2xl"
              id="lws-inputQuantity"
              {...register("quantity", { required: true, min:0 })}
            />
             {errors.quantity && <span>Please enter a valid quantity</span>}
          </div>
        </div>
        <button type="submit" className="submit bg-indigo-800 text-white rounded-2xl">
          Add Product
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;
