import { createSlice } from "@reduxjs/toolkit";
import { IProductCart } from "../interfaces";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";


export interface CartState{
    cartState: IProductCart[]; 
}

const initialState: CartState = {
    cartState: []
}

export const cartSlice = createSlice({
    name:"cartStore",
    initialState:{
        cartProducts:[]
    },
    reducers:{
        addProduct(state,action:{payload:IProductCart}){
            if(state.cartProducts.some(p=>p.id===action.payload.id)){
                const product =  state.cartProducts.find(p=>p.id===action.payload.id)
                product.qtd++
            }else{
                const productAdded = {...action.payload}
                productAdded.qtd=1
                state.cartProducts.push(productAdded)
            }
        },
        removeOneProduct(state, action:{payload:IProductCart}){
            const product =  state.cartProducts.find(p=>p.id===action.payload.id)
            if(product.qtd>1){
                product.qtd--
            }else{
                const index = state.cartProducts.findIndex(p=>p.id===action.payload.id)
                if(index!==-1) state.cartProducts.splice(index, 1)
            }
        },
        removeProduct(state, action:{payload:IProductCart}){
            const index = state.cartProducts.findIndex(p=>p.id===action.payload.id)
            if(index!==-1) state.cartProducts.splice(index, 1)
        },
        // extraReducers: {
        //     [HYDRATE]: (state, action:{payload:IProductCart}) => {
        //       return {
        //         ...state,
        //         ...action.payload.cartStore,
        //       };
        //     }
        // }
    }
})

export const {addProduct, removeOneProduct, removeProduct} = cartSlice.actions

export const selectCartState = (state: AppState)=> state.cartStore.cartProducts

export default cartSlice.reducer
