import { createSlice } from "@reduxjs/toolkit";

interface ProductMinicartState {
   image: string;
   name: string;
};

const productMinicartReduce = createSlice({
   name: "product-minicart",

   initialState: [{} as ProductMinicartState],

   reducers: {
      setProduct(state, actions) {
         state.push({
            image: actions.payload.image,
            name: actions.payload.name
         })
      }
   }
});

export const { setProduct } = productMinicartReduce.actions;
export default productMinicartReduce.reducer;
