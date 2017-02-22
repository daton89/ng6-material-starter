import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngMaterial from 'angular-material';
require('font-awesome/css/font-awesome.css');
require('material-design-icons');

// Material design css
import 'angular-material/angular-material.css';
import 'normalize.css';

angular.module('app', [
  ngMaterial,
  uiRouter,
  Common,
  Components
])
  .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
    "ngInject";

    $stateProvider.state('app', {
      url: '/:lang',
      params: { lang: 'it' },
      abstract: true,
      component: 'app'

    })

    $urlRouterProvider.otherwise('/');
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
