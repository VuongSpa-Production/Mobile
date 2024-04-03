import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; 

const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  devTools: true
});


export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;