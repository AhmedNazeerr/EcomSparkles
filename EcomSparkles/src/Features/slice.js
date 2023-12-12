import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProduct: [],
  itemInCart: 0,
  totalPrice: 0,
};

const sparklesSlice = createSlice({
  name: "ShopFusionStateManagement",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const payload = action.payload;
      const Arr = [...state.cartProduct];
      Arr.push(payload);
      state.cartProduct = [...Arr];
      state.itemInCart = Arr.length;
      const newArr = state.cartProduct.map((item) => item.price.sale);
      const price = newArr.reduce((acc, curr) => acc + curr, 0);
      state.totalPrice = price;
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
