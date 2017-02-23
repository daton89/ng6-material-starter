import themesProvider from './themes.provider'
import { skinsProvider, addSkinToScope } from './skins.provider'

let themesModule = angular.module('material.themes', [])

    .provider('themes', themesProvider)
    .provider('skins', skinsProvider)
    .run(addSkinToScope)
    .name


export default themesModule