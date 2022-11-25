import { configureStore } from '@reduxjs/toolkit';
import {
    traditionalPaintingsReducer,
    sculpturesAndInstallationsReducer,
    performanceAndKineticArtReducer,
    otherArtReducer
} from '../features/portfolioSlice';

export const store = configureStore({
    reducer: {
        traditionalPaintings: traditionalPaintingsReducer,
        sculpturesAndInstallations: sculpturesAndInstallationsReducer,
        performanceAndKineticArt: performanceAndKineticArtReducer,
        otherArt: otherArtReducer
    }
})