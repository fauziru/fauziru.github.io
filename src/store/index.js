import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import project from './project'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    project
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
