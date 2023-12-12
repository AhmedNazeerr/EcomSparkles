import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  cartProduct: [],
  itemInCart: 0,
  totalPrice: 0,
};

const sparklesSlice = createSlice({
  name: "ShopFusionStateManagement",
  initialState: initialState,
  reducers: {
    setCartItemCount: (state, action) => {
      const count = action.payload;
      state.itemInCart = count;
    },
    setUser: (state, action) => {
      const payload = action.payload;
      state.user = payload;
    },
    resetUser: (state, _action) => {
      state.user = {};
    },
    addItemToCart: (state, action) => {
        // state.cartProduct = action.payload
        state.itemInCart = action.payload.length;
      // state.totalPrice = action.payload.count;
      // const payload = action.payload;
      // const Arr = [...state.cartProduct];
      // Arr.push(payload);
      // state.cartProduct = [...Arr];
      // const newArr = state.cartProduct.map((item) => item.price.sale);
      // const price = newArr.reduce((acc, curr) => acc + curr, 0);
    },
    removeItemFromCart: (state, action) => {
      const code = action.payload;
      const Arr = [...state.cartProduct];
      const newArr = Arr.filter(
        (item) =>
          item.productCode.toLowerCase().trim() !== code.toLowerCase().trim()
      );
      state.cartProduct = [...newArr];
      state.itemInCart = newArr.length;
      const newPriceArr = state.cartProduct.map((item) => item.price.sale);
      const price = newPriceArr.reduce((acc, curr) => acc + curr, 0);
      state.totalPrice = price;
    },
  },
});

const storeActions = sparklesSlice.actions;
export { sparklesSlice, storeActions };
