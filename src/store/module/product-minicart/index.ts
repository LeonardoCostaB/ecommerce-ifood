import { createSlice } from "@reduxjs/toolkit";

interface ProductMinicartState {
   image: string;
   name: string;
   price: number;
};

const productMinicartReduce = createSlice({
   name: "product-minicart",

   initialState: [{
      image: "",
      name: "",
      price: 0
   } as ProductMinicartState],

   reducers: {
      setProduct(state, actions) {
         state.push({
            image: actions.payload.image,
            name: actions.payload.name,
            price: actions.payload.price
         })
      }
   }
});

export const { setProduct } = productMinicartReduce.actions;
export default productMinicartReduce.reducer;
