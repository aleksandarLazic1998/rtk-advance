import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'typescript/types/AppDispatch';

import { RootState } from '../typescript/types/RootState';

export const useSetGlobalState = () => useDispatch<AppDispatch>();
export const useGlobalState: TypedUseSelectorHook<RootState> = useSelector;
