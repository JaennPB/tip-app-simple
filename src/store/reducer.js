import { createReducer, createAction } from '@reduxjs/toolkit';

export const setBillData = createAction('tip/setBillData');
export const setTipData = createAction('tip/setTipData');
export const setDividedByData = createAction('tip/setDividedByData');
export const calculateBill = createAction('tip/calculate');

const initalState = {
  billAmount: 0,
  tipPercent: 15,
  dividedBy: 1,
  tip: 0,
  tipPerPerson: 0,
  totalWithTip: 0,
};

const reducer = createReducer(initalState, (builder) => {
  builder.addCase(setBillData, (state, action) => {
    state.billAmount = Number(action.payload);
  });
  builder.addCase(setTipData, (state, action) => {
    state.tipPercent = Number(action.payload);
  });
  builder.addCase(setDividedByData, (state, action) => {
    state.dividedBy = Number(action.payload);
  });
  builder.addCase(calculateBill, (state, action) => {});
});

export default reducer;
