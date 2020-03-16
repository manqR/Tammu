import React, { Component } from 'react';
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';
import PublicRoute from './Auth/PublicRoute';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));


// Pages 
const Login = React.lazy(() => import('./views/Pages/Login/Login'));
const Product = React.lazy(() => import('./views/Pages/Product/Products'));
const viewProducts = React.lazy(() => import('./views/Pages/Product/viewProducts'));
const Register = React.lazy(() => import('./views/Pages/Register/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500/Page500'));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <div>
            <div className="content">
            <Switch>              
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="/dashboard" component={DefaultLayout} />
                <PrivateRoute path="" component={DefaultLayout} />
                <PrivateRoute path="/product" component={Product} />
                <PrivateRoute path="/viewProducts" component={viewProducts} />
            </Switch>

            </div>
          </div>
          </React.Suspense>
      </BrowserRouter>
    </div>
  );
}
 
export default App;

