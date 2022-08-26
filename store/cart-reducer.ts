import { createSlice } from "@reduxjs/toolkit";
import { IProductCart } from "../interfaces";

const store = createSlice({
    name:"CartStore",
    initialState:{
        cartProducts:[]
    },
    reducers:{
        addProduct(state,product){
            state.cartProducts.push(product)
        },
        removeOneProduct(state, id:any){
            state.cartProducts.splice(id,1)
        },
        removeProduct(state, product){

        }

        
    }
})

export default store
export const {addProduct, removeOneProduct, removeProduct} = store.actions