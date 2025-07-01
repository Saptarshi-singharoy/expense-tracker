import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { WalletState, WalletDispatch } from './store';

// Typed versions of useDispatch and useSelector
export const useWalletDispatch = () => useDispatch<WalletDispatch>();
export const useWalletSelector: TypedUseSelectorHook<WalletState> = useSelector;
