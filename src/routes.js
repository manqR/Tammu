import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs/Breadcrumbs'));
const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Products = React.lazy(() => import('./views/Pages/Product/Products'));
const Employee = React.lazy(() => import('./views/Pages/Employee/employee'));
const viewProducts = React.lazy(() => import('./views/Pages/Product/viewProducts'));

const costsList = React.lazy(() => import('./views/Pages/Costs/costsList'));
const absentList = React.lazy(() => import('./views/Pages/Absent/absentList'));
const shiftList = React.lazy(() => import('./views/Pages/Shift/shiftList'));
const transactionList = React.lazy(() => import('./views/Pages/Transaction/transactionList'));
const CreatePromo = React.lazy(() => import('./views/Pages/Promo/index'));
const ReportList = React.lazy(() => import('./views/Pages/Report/index'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/employee', name: 'Employee', component: Employee },
  { path: '/product', name: 'Product', component: Products },
  { path: '/viewProducts', name: 'List Product', component: viewProducts },
  { path: '/costsList', name: 'Operational Cost', component: costsList },
  { path: '/absentList', name: 'Absent', component: absentList },
  { path: '/shiftList', name: 'Shift', component: shiftList },
  { path: '/report', name: 'Report', component: ReportList },
  { path: '/transactionList', name: 'Sales', component: transactionList },
  { path: '/promo/create', name: 'Promo', component: CreatePromo },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
];

export default routes;
