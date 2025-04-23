
export default defineNuxtRouteMiddleware((to) => {
  const user = useCookie('user') 

  if ((to.path === '/signup' || to.path === '/') && user.value) {
    return navigateTo('/dashboard')
  }

  if ((to.path !== '/signup' && to.path !== '/') && !user.value) {
    return navigateTo('/')
  }
})