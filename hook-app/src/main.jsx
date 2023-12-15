/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterwithCustomHooks } from './01-useState/CounterwithCustomHooks.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHooks } from './03-example/MultipleCustomHooks.jsx'
// import { FocusScreen } from './04-useRef/FocusScreen.jsx'
// import { Layout } from './05-useLayoutEffect/Layout.jsx'
// import { Memorize } from './06-memos/memorize.jsx'
// import { MemoHook } from './06-memos/MemoHook.jsx'
// import { CallbackHook } from './06-memos/CallbackHook.jsx'
// import { Padre } from './07-tarea-memo/Padre.jsx'
import { TodoApp } from './08-usereducer/TodoApp.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './08-usereducer/intro-reducer.js'
import { MainApp } from './09-useContext/MainApp.jsx';
import { getRoutes } from './09-useContext/Routes.jsx';
import './index.css'
const router = getRoutes();
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)

/* ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
) */
