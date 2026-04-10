
//1.  slice create 2.name  3. initialvalue 4. reducers

import {createSlice} from '@reduxjs/toolkit'

const grocerySlice = createSlice(
    {
  name: "grocery",
  initialState: {
    items: []
  },
  reducers: 
  {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        name: action.payload
      });
    },
    // {[id:1234567890,name:'Apples1 kg']}

    deleteItem: (state, action) => 
        {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    editItem: (state, action) => {
      const { id, newName } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) 
        {
        item.name = newName;
      }
    }
  }
}
);


export const{addItem,editItem,deleteItem}= grocerySlice.actions

export default grocerySlice.reducer;