import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UserForm from './components/UserForm'
import DigitalClock from './components/DigitalClock'
import ProductFilter from "./components/ProductFilter"
import TodoApp from './components/TodoApp/TodoApp'
import Stopwatch from './components/Stopwatch'
import FetchUsers from './components/FetchUsers'
import { ThemeProvider } from "./components/ThemeSwitcher/ThemeContext";
import Layout from "./components/ThemeSwitcher/Layout";

function App() {
  return (
    // baif 1
    // <UserForm />

    // bài 2
    // <DigitalClock />

    // bài 3
    // <ProductFilter />

    // bài 4
    // <TodoApp/>

    // bài 5
    // <Stopwatch />

    // bài 6
      // <FetchUsers/>

      // bài 7
      <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App
