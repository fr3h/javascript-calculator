import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../components/Calculator/calculatorReducer';

export default function configureAppStore(preloadedState) {
    return configureStore({
        reducer: {
            calculator: calculatorReducer,
        },
        preloadedState,
    });
}