import { createSlice } from "@reduxjs/toolkit";

interface ProductMinicartState {
   image: string;
   name: string;
   size: string;
   price: number;
};

const productMinicartReduce = createSlice({
   name: "product-minicart",

   initialState: {
      image: "",
      name: "",
      size: "",
      price: 0
   } as ProductMinicartState,

   reducers: {
      setProduct(state, action) {
         Object.assign(state, {
            image: action.payload.image,
            name: action.payload.name,
            size: action.payload.size,
            price: action.payload.price,
         });
      },

      removeProduct(state, action) {
         Object.assign(state, {
            image: "",
            name: "",
            size: "",
            price: 0
         });
      }
   }
});

export const { setProduct, removeProduct } = productMinicartReduce.actions;
export default productMinicartReduce.reducer;
