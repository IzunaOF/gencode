import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';
import { getTheme } from '@/app/userSlice';
//import { codeSettings } from '@/release/generator/generatorSlice';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const userTheme = (() => useAppSelector(getTheme))