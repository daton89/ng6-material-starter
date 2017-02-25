class AppController {

    constructor($scope, $log, $mdSidenav, $mdUtil, $timeout) {
        "ngInject";

        let vm = this;

        this.toggleSidenav = toggleSidenav;

        this.toggleLeft = buildToggler('left');
        this.toggleRight = buildToggler('right');
        this.lockLeft = true;
        this.lockRight = false;

        $scope.layout = {
            toolbarSize: 'default',
            toolbarBackground: '',
            contentBackground: '',
            leftSideMenuSize: 'full', // full, icons, hidden, off
            rightSideMenuSize: 'full', // full, icons, hidden, off
            showFooter: true
        }

        function buildToggler(navID) {
            var debounceFn = $mdUtil.debounce(function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function() {
                        $log.debug("toggle " + navID + " is done");
                    });
            }, 300);

            return debounceFn;
        }

        function toggleSidenav(componentId) {

            $scope.layout[componentId + 'SideMenuSize'] = !$mdSidenav(componentId).isOpen() ? 'full' : 'hidden';

            var debounceFn = $mdUtil.debounce(function() {
                $mdSidenav(componentId)
                    .toggle()
                    .then(function() {
                        $log.debug(`${componentId} is ${$mdSidenav(componentId).isOpen()}`);
                    });
            }, 300);

            return debounceFn();

            $mdSidenav(componentId).toggle();
            // $log.debug('isOpen?', $mdSidenav(componentId).isOpen());
            // $log.debug('isLockedOpen?', $mdSidenav(componentId).isLockedOpen());
        }

    }
}

export default AppController