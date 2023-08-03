import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyDT09TEyDsS47z0g13xkZvHRTU5IxXGyOE",
  authDomain: "pandlambulance.firebaseapp.com",
  projectId: "pandlambulance",
  storageBucket: "pandlambulance.appspot.com",
  messagingSenderId: "827008515099",
  appId: "1:827008515099:web:1408187633c1d2d49e0cbe",
  measurementId: "G-MFN53J5WR9"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ( /* { store, ssrContext } */) {
  const createHistory = process.env.SERVER ?
    createMemoryHistory :
    (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  return Router
})