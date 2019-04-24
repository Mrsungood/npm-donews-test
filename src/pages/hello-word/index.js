import HelloWord from './src/index';

/* istanbul ignore next */
const install = function(Vue, opts = {}) {
  Vue.component(HelloWord.name, HelloWord);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default HelloWord;
