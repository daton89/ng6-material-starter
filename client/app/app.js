import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import 'font-awesome/css/font-awesome.css';
import 'material-design-icons';
import 'angular-material/angular-material.css';
import 'normalize.css';

//////////////////////////////////////////////////

import Material from './material/material'
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';




angular.module('app', [
  ngMaterial,
  uiRouter,
  Material,
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
