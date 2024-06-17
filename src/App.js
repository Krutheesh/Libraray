import React from "react";
import Home from "./pages/Home/Home";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import BookShelf from "./pages/BookShelf/BookShelf";
import { store } from "./app/store";
import {Provider} from 'react-redux'
import './App.css'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/shelf',
    element:<BookShelf/>
  }

])
const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
      <RouterProvider router ={appRouter}/>
      </Provider>
    </div>
  );
};

export default App;
