import { RootState } from '../../app/store';

export const selectSearch = (state: RootState) => state.controls.search;
export const selectSort = (state: RootState) => state.controls.sort;
export const selectControls = (state: RootState) => state.controls;
