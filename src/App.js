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
const Employee = React.lazy(() => import('./views/Pages/Product/Products'));
const viewProducts = React.lazy(() => import('./views/Pages/Product/viewProducts'));
const absentList = React.lazy(() => import('./views/Pages/Absent/absentList'));
const shiftList = React.lazy(() => import('./views/Pages/Shift/shiftList'));
const costsList = React.lazy(() => import('./views/Pages/Costs/costsList'));
const transactionList = React.lazy(() => import('./views/Pages/Transaction/transactionList'));
const Promo = React.lazy(() => import('./views/Pages/Promo/index'));
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
                <PrivateRoute path="/employee" component={Employee} />
                <PrivateRoute path="/product" component={Product} />
                <PrivateRoute path="/viewProducts" component={viewProducts} />
                <PrivateRoute path="/absentList" component={absentList} />
                <PrivateRoute path="/shiftList" component={shiftList} />
                <PrivateRoute path="/costsList" component={costsList} />
                <PrivateRoute path="/transactionList" component={transactionList} />                
                <PrivateRoute path="/promo/create" component={Promo} />                
            </Switch>

            </div>
          </div>
          </React.Suspense>
      </BrowserRouter>
    </div>
  );
}
 
export default App;

