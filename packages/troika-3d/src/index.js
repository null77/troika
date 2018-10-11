// Troika 3D exports

// 3D facades
export {PerspectiveCamera3DFacade, OrthographicCamera3DFacade} from './facade/Camera3DFacade.js'
export {default as Group3DFacade} from './facade/Group3DFacade.js'
export {default as HtmlOverlay3DFacade} from './facade/HtmlOverlay3DFacade.js'
export {AmbientLight3DFacade, DirectionalLight3DFacade, PointLight3DFacade, SpotLight3DFacade} from './facade/Light3DFacade.js'
export {default as Object3DFacade} from './facade/Object3DFacade.js'
export {default as Scene3DFacade} from './facade/Scene3DFacade.js'
export {default as World3DFacade} from './facade/World3DFacade.js'
export {makeWorldTextureProvider} from './facade/WorldTextureProvider.js'
export {default as InstancingManager} from './facade/instancing/InstancingManager.js'
export {default as Instanceable3DFacade} from './facade/instancing/Instanceable3DFacade.js'

// React entry point
export {default as Canvas3D} from './react/Canvas3D.jsx'

// WebVR
export {makeVrAware} from './react/VrAware.jsx'

// Other
import * as shaderUtils from './shaderUtils.js'
export {shaderUtils}

// Convenience shortcuts for some common troika-core exports
export {Facade, ListFacade, ParentFacade} from 'troika-core'