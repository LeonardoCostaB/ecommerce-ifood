import { createSlice } from "@reduxjs/toolkit";

export interface ProductMinicartState {
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
      },

      removeProduct(state, actions)  {
         const { payload } = actions
         return state.filter(el => el.name != payload.name)
      }
   }
});

export const { setProduct, removeProduct } = productMinicartReduce.actions;
export default productMinicartReduce.reducer;
