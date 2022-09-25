import { createSlice } from "@reduxjs/toolkit";

export interface ProductMinicartState {
   id: string;
   image: string;
   name: string;
   price: number;
   quantity: number;
};

const productMinicartReduce = createSlice({
   name: "product-minicart",

   initialState: [{
      id: "",
      image: "",
      name: "",
      price: 0,
      quantity: 1
   } as ProductMinicartState],

   reducers: {
      setProduct(state, actions) {
         const verify = state.some(el => el.id == actions.payload.id);

         if(verify) {
            return state.map(value =>{
               return value.id == actions.payload.id ?
                  {
                     id: value.id,
                     image: value.image,
                     name: value.name,
                     price: value.price,
                     quantity: value.quantity + 1
                  } : value
            });
         }

         state.push({
            id: actions.payload.id,
            image: actions.payload.image,
            name: actions.payload.name,
            price: actions.payload.price,
            quantity: 1
         })
      },

      removeProduct(state, actions)  {
         const { payload } = actions

         return state.filter(el => el.id !== payload.id);
      },

      incrementQuantity(state, actions) {
         return state.map(value => {
            return value.id === actions.payload.id ?
               {
                  id: value.id,
                  image: value.image,
                  name: value.name,
                  price: value.price,
                  quantity: value.quantity + 1
               } : value
         });
      },

      decrementQuantity(state, actions) {
         return state.map(value => {
            return value.id === actions.payload.id ?
            {
               id: value.id,
               image: value.image,
               name: value.name,
               price: value.price,
               quantity: value.quantity <= 1 ? 1 : value.quantity - 1
            } : value
         });
      }
   }
});

export const { setProduct, removeProduct, incrementQuantity, decrementQuantity } = productMinicartReduce.actions;
export default productMinicartReduce.reducer;
