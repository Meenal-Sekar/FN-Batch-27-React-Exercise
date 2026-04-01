
import {createSlice} from '@reduxjs/toolkit'

const cs = createSlice({
  name: "counter",
  initialState: { value: 10 },

  reducers:
   {
    increment: (state) => 
    {
      state.value += 1;                     //state.value=state.value+1
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});


export const{increment,decrement,reset}= cs.actions

export default cs.reducer;



//  import {counterSlice} from '../features/counterSlice.js'

//state.counter.value

