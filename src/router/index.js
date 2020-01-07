import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../views/HelloWorld"),
      meta: {
        keepAlive: true,
        title: "首页"
      }
    },
    {
      path: "/vue",
      component: () => import("../views/HelloVue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
