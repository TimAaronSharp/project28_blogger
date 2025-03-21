import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}
// NOTE routes is where we define our route paths that we can use to mount different Vue pages. path: is the URL path it will use in the URL to change pages, name: is the page/component the path points to **(this must match the :to="{ name: ''} attribute of the RouterLink for the page you wish to mount (see BlogCard.vue template section for example)**, and component: must match the component/page file name (normal syntax is you import that component/page file above and write component: "component/page name" (no ""), but BCW has a function set up for us to use (loadPage() )
const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/profile/:profileId',
    name: 'Profile',
    component: loadPage('ProfilePage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
