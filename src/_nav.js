export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
      },
      {
        title: true,
        name: 'Admin Management',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        name: 'Promo',
        url: '/promo/create',
        icon: 'fa fa-user-o',
      },
      {
        name: 'Add Employee',
        url: '/employee',
        icon: 'fa fa-user-o',
      },
      {
        name: 'Add Role',
        url: '/theme/colors',
        icon: 'fa fa-navicon',
      },
      {
        name: 'Set Provillege',
        url: '/theme/colors',
        icon: 'fa fa-key',
      },
      {
        title: true,
        name: 'Product Management',
        wrapper: {            // optional wrapper object
          element: '',        // required valid HTML5 element tag
          attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
        },
        class: ''             // optional class names space delimited list for title item ex: "text-center"
      },
      {
        name: 'Add Product',
        url: '/product',
        icon: 'fa fa-shopping-basket',
      },
      {
        name: 'View Product',
        url: '/viewProducts',
        icon: 'fa fa-th',
      },
      {
        name: 'Add Category',
        url: '/theme/typography',
        icon: 'fa fa-object-group',
      },
      {
        title: true,
        name: 'Transaction',
        wrapper: {
          element: '',
          attributes: {},
        },
      },
      {
        name: 'Report',
        url: '/report',
        icon: 'fa fa-opencart',
      },
      {
        name: 'Collection',
        url: '/collection',
        icon: 'fa fa-opencart',
      },
      {
        name: 'Sales',
        url: '/transactionList',
        icon: 'fa fa-opencart',
      },
      {
        name: 'Operational Cost',
        url: '/costsList',
        icon: 'fa fa-list',
      }, 
      {
        name: 'Absent',
        url: '/absentList',
        icon: 'fa fa-file-pdf-o',
      },    
      {
        name: 'Shift',
        url: '/shiftList',
        icon: 'fa fa-file-pdf-o',
      },   
             
    ],
  };
  