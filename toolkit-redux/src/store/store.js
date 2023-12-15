import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter/counterSlice'
import pokemonSlice from './slices/pokemon/pokemonSlice'
import { todoApi } from './apis/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice, 
    pokemon: pokemonSlice,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
})

