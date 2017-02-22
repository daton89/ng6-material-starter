class SidenavController {

    /**
     * Constructor class SidenavController
     *
     * @param {object} $scope
     */
    constructor($scope) {
        'ngInject';
        this.toggleIconMenu = toggleIconMenu;

        function toggleIconMenu() {
            // var menu = vm.layout.sideMenuSize === 'icon' ? 'full' : 'icon';
            // triLayout.setOption('sideMenuSize', menu);
        }
    }
}

export default SidenavController;