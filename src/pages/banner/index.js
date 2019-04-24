import Banner from './src/index';

/* istanbul ignore next */
const install = function(Vue, opts = {}) {
  Vue.component(Banner.name, Banner);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default Banner;
