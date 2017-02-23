import { layoutProvider, layoutRunner } from './layouts.provider'

let layoutsModule = angular.module('material.layouts', [])

    .provider('layout', layoutProvider)
    .run(layoutRunner)

    .name

export default layoutsModule;