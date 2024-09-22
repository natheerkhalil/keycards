import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

import { useResponseStore } from "@/stores/response";
import { uauth } from "@/stores/auth";

var HomeRoute = {
  path: "/",
  name: 'home',
  component: null,
  alias: "/home"
};

// set home page depending on authenticated status
var isAuthenticated;

if (!localStorage.getItem('auth_token')) isAuthenticated = false;
else isAuthenticated = true;

if (isAuthenticated) {
  HomeRoute["component"] = Home;
} else {
  HomeRoute["component"] = function () {
    return import("@/views/Landing.vue");
  };
}

// configure maintenance mode route
import { MAINTENANCE_MODE } from '../../config';

var routes;

if (MAINTENANCE_MODE !== "true" && MAINTENANCE_MODE !== "1") {
  // set routes for authenticated users

  routes = [

    HomeRoute,

    // ACCOUNT //
    {
      path: '/account',
      name: 'account',
      component: function () {
        return import("@/views/Account.vue");
      },
      meta: { requiresAuth: true }
    },

    // FOLDERS //
    {
      path: "/folder/:id",
      name: 'view-folder',
      component: function () {
        return import("@/views/Folder/Read.vue");
      },
      meta: { requiresAuth: true }
    },
    {
      path: "/folder/create",
      name: 'create-folder',
      component: function () {
        return import("@/views/Folder/Create.vue");
      },
      meta: { requiresAuth: true }
    },
    {
      path: "/folder/:id/edit",
      name: 'edit-folder',
      component: function () {
        return import("@/views/Folder/Edit.vue");
      },
      meta: { requiresAuth: true }
    },

    // CARDS
    {
      path: "/card/:id",
      name: 'view-card',
      component: function () {
        return import("@/views/Card/Read.vue");
      },
      meta: { requiresAuth: true }
    },
    {
      path: "/card/create",
      name: 'create-card',
      component: function () {
        return import("@/views/Card/Create.vue");
      },
      meta: { requiresAuth: true }
    },

    {
      path: '/login',
      name: 'login',
      component: function () {
        return import("@/views/Login.vue");
      },
      meta: { requiresGuest: true, bg: "img" }
    },
    {
      path: '/register',
      name: 'register',
      component: function () {
        return import("@/views/Register.vue");
      },
      meta: { requiresGuest: true, bg: "img" }
    },
    
    {
      path: '/maintenance',
      name: 'maintenance',
      component: function () {
        return import("@/views/Maintenance.vue");
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: function () {
        return import("@/views/404.vue");
      },
    }
  ];
} else {
  routes = [
    {
      path: '/',
      name: 'maintenance',
      component: function () {
        return import("@/views/Maintenance.vue");
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'maintenance',
      component: function () {
        return import("@/views/Maintenance.vue");
      },
    },
    {
      path: "/terms",
      name: "terms",
      component: function () {
        return import("@/views/Terms.vue");
      },
    },
    {
      path: "/privacy",
      name: "privacy",
      component: function () {
        return import("@/views/Privacy.vue");
      },
    },
  ];
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})


// Add the router guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresGuest) && isAuthenticated) {
    useResponseStore().updateResponse("You're already logged in", "warn", false);
    next({ name: 'home' });
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    useResponseStore().updateResponse("You need to be logged in", "warn", false);
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router