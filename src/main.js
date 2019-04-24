import HelloWord from './pages/hello-word/index.js';
import Banner from './pages/banner/index.js';
const components = [
  HelloWord,
  Banner
];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  HelloWord,
  Banner
}
