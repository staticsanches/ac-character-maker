import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { autoMergeDeep } from '@/utils/autoMergeDeep'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { avatarReducer } from './avatar'
import { piecesReducer } from './pieces'

const rootReducer = combineReducers({
  pieces: piecesReducer,
  avatar: avatarReducer,
})

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'avatar-maker',
  storage,
  stateReconciler: autoMergeDeep,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
