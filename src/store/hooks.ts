import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { RootState, AppDispatch } from './store';

export const useSetGlobalState = () => useDispatch<AppDispatch>();
export const useGlobalState: TypedUseSelectorHook<RootState> = useSelector;
