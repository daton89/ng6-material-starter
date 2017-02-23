import angular from 'angular';
import Navbar from './navbar/navbar';
import SideNav from './sidenav/sidenav.module';
import Hero from './hero/hero';
import User from './user/user';
import MenuItem from './menuItem/menuItem';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  SideNav,
  MenuItem
])

  .name;

export default commonModule;
