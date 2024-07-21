import { createSlice } from "@reduxjs/toolkit";
const initialState={
    list:[]
}
const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        removeAll:(state)=>{
            state.list=[]
        },
        addItem:(state,action)=>{
            let add=false
            state.list=state.list?.map((e)=>{
                if(e.id== action.payload.id){
                    e.quantity=e.quantity+1
                    add=true
                    return e
                }
                return e
            })
            if(!add){
                state.list.push({...action.payload,quantity:1})
            }

        },
        removeItem:(state,action)=>{
            state.list=state.list.filter(e=>{
                if(e.id==action.payload){
                    if(e.quantity>1){
                        e.quantity=e.quantity-1
                        return e
                    }
                    return false
                }
                return e
            })
        }
    }
})
export default cartSlice.reducer
export const {removeAll,addItem,removeItem}=cartSlice.actions