import { createSlice } from "@reduxjs/toolkit";
const cart = [];
const productReducer = createSlice({
    name:'product',
    initialState:{value:cart},
    reducers:{
        addToCart:  (state,action) =>
        {
            const datas = action.payload;
          const length = state.value.length;

          if(length===0)
          {

            state.value = [...state.value,{...datas,qty:1}]

          }
          else
          {
            const exist = state.value.find((x)=>x.id===datas.id);

            if(exist)
            {
                state.value.map((x)=>{
                    if(x.id===datas.id)
                    {
                        x.qty = x.qty+1
                    }
                })
            }
            else
            {
                state.value = [...state.value,{...datas,qty:1}]

            }

          }
        }
        ,
        increaseItem:(state,action)=>
        {

            const item= state.value.find((item)=>item.id===action.payload);
            item.qty+=1;


        }
        ,
        decreaseItem:(state,action)=>
        {
            const item= state.value.find((item)=>item.id===action.payload);
            if (item.qty===1)
            {
                state.value = state.value.filter((item)=>item.id!==action.payload);
            }
            else
            {
             item.qty -= 1;
            }


        }
    }
});

export const {addToCart,increaseItem,decreaseItem} =productReducer.actions; 
export default productReducer.reducer;

