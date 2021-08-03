import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import CartPage from './pages/cart/CartPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
