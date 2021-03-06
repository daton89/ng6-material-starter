
function layoutProvider() {
    "ngInject";
    var layoutDefaults = {
        toolbarSize: 'default',
        toolbarShrink: true,
        toolbarClass: '',
        contentClass: '',
        innerContentClass: '',
        sideMenuSize: 'full',
        showToolbar: true,
        footer: true,
        contentTemplateUrl: 'app/triangular/layouts/default/default-content.tmpl.html',
        sidebarLeftTemplateUrl: 'app/layouts/leftsidenav/leftsidenav.tmpl.html',
        sidebarLeftController: 'MenuController',
        sidebarRightTemplateUrl: 'app/triangular/components/notifications-panel/notifications-panel.tmpl.html',
        sidebarRightController: 'NotificationsPanelController',
        toolbarTemplateUrl: 'app/triangular/components/toolbars/toolbar.tmpl.html',
        toolbarController: 'DefaultToolbarController',
        footerTemplateUrl: 'app/triangular/components/footer/footer.tmpl.html'
    };
    var resetableOptions = ['toolbarSize', 'toolbarShrink', 'toolbarClass', 'contentClass', 'innerContentClass', 'sideMenuSize', 'showToolbar', 'footer', 'contentTemplateUrl', 'sidebarLeftTemplateUrl', 'sidebarLeftController', 'sidebarRightTemplateUrl', 'sidebarRightController', 'toolbarTemplateUrl', 'toolbarController', 'footerTemplateUrl', 'loaderTemplateUrl', 'loaderController'];
    var layout = {};

    this.getDefaultOption = getDefaultOption;
    this.setDefaultOption = setDefaultOption;

    function getDefaultOption(name) {
        return layoutDefaults[name];
    }

    function setDefaultOption(name, value) {
        layoutDefaults[name] = value;
    }

    // init

    angular.extend(layout, layoutDefaults);

    // Service
    this.$get = function () {
        function setOption(name, value) {
            layout[name] = value;
        }

        function updateLayoutFromState(event, toState) {
            // reset classes
            angular.forEach(resetableOptions, function (option) {
                layout[option] = layoutDefaults[option];
            });
            var layoutOverrides = angular.isDefined(toState.data) && angular.isDefined(toState.data.layout) ? toState.data.layout : {};
            angular.extend(layout, layout, layoutOverrides);
        }

        return {
            layout: layout,
            setOption: setOption,
            updateLayoutFromState: updateLayoutFromState
        };
    };
}

function layoutRunner($rootScope, layout) {
    "ngInject";
    // check for $stateChangeStart and update the layouts if we have data.layout set
    // if nothing set reset to defaults for every state
    var destroyOn = $rootScope.$on('$stateChangeStart', layout.updateLayoutFromState);
    $rootScope.$on('$destroy', removeWatch);
    //prova scrivo
    /////////////

    function removeWatch() {
        destroyOn();
    }
}

export {

    layoutProvider,
    layoutRunner

}