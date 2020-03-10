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
        name: 'Add User',
        url: '/theme/colors',
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
        url: '/theme/colors',
        icon: 'fa fa-shopping-basket',
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
        name: 'Add Transaction',
        url: '/theme/colors',
        icon: 'fa fa-opencart',
      },
      {
        name: 'Reports',
        url: '/theme/typography',
        icon: 'fa fa-file-pdf-o',
      },           
    ],
  };
  