import template from './sidenav.tmpl.html';
import controller from './sidenav.controller';
import './sidenav.scss';

let sidenavComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default sidenavComponent;
