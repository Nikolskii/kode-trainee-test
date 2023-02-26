import { RootState } from '../../app/store';

export const isModalOpen = (state: RootState) => state.modal.isOpen;
