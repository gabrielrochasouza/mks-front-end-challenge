import { createSlice } from "@reduxjs/toolkit";
import { IProductCart } from "../interfaces";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from ".";
import { setCookie } from "nookies";

export interface CartState{
    cartState: IProductCart[]; 
}


const initialState: {cartProducts: IProductCart[]} = {
    cartProducts: []
}

const setProductCookie = (array: IProductCart[])=>{
    setCookie(null, "@Products", JSON.stringify(array),{
        path:"/",
        maxAge: 30 * 24 * 60 * 60,
    })
}

export const cartSlice = createSlice({
    name:"cartStore",
    initialState,
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
            setProductCookie(state.cartProducts)
        },
        removeOneProduct(state, action:{payload:IProductCart}){
            const product =  state.cartProducts.find(p=>p.id===action.payload.id)
            if(product.qtd>1){
                product.qtd--
            }else{
                const index = state.cartProducts.findIndex(p=>p.id===action.payload.id)
                if(index!==-1) state.cartProducts.splice(index, 1)
            }
            setProductCookie(state.cartProducts)
        },
        removeProduct(state, action:{payload:IProductCart}){
            const index = state.cartProducts.findIndex(p=>p.id===action.payload.id)
            if(index!==-1) state.cartProducts.splice(index, 1)
            setProductCookie(state.cartProducts)
        },
        refresh(state, action:{payload:IProductCart[]}){
            state.cartProducts = [...action.payload]
        }

    }
})

export const {addProduct, removeOneProduct, removeProduct, refresh} = cartSlice.actions

export const selectCartState = (state: AppState)=> state.cartStore.cartProducts

export default cartSlice.reducer
