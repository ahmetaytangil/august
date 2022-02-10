// General
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Assets/fonts/stylesheet.css';
import './Assets/css/index.css';
import './Assets/css/style.css';
import './Assets/css/main.css';
import './Assets/css/responsive.css';

// Redux / Providers
import { Provider } from 'react-redux';
import configureStore from './Redux/Store/configureStore'
import GeneralProvider from './Providers/general/General';
import { CartProvider } from './Providers/cartprovider/CartContext';
import { AuthProvider } from './Providers/firebase/contexts/AuthContext';
import { CurrencyProvider } from './Providers/currencyparites/CurrencyParites';

// Redux Store
const store = configureStore();

// Render
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GeneralProvider>
          <CartProvider>
            <AuthProvider>
              <CurrencyProvider>
                <App />
              </CurrencyProvider>
            </AuthProvider>
          </CartProvider>
        </GeneralProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
