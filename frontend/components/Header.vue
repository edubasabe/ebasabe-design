<template>
  <client-only>
    <header id="header">
      <nav>
        <a href="#" class="logo">
          <Logo />
        </a>
        <ul class="nav-list">
          <li class="nav-list__item">
            <router-link tag="a" to="/" exact>
              Inicio
            </router-link>
          </li>
          <li class="nav-list__item">
            Porfolio
          </li>
          <li class="nav-list__item">
            <router-link tag="a" to="/posts">
              Blog
            </router-link>
          </li>

          <li class="nav-list__item contact">
            Contacto
          </li>
          <!-- <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Restaurants</router-link></li> -->
        </ul>
      </nav>
    </header>
  </client-only>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  name: 'Header',
  components: {
    Logo
  }
}
</script>

<style lang="sass">
#header
  @apply shadow-sm
  background-color: transparent;

  nav
    @apply flex items-center justify-between flex-wrap max-w-6xl mx-auto relative py-4
    a.logo
      @apply border-gray-100 mr-auto
    ul.nav-list
      @apply flex items-center

      li.nav-list__item
        @apply mr-6 font-semibold
        &.contact
          @apply bg-blue text-white rounded px-4 py-2 font-semibold
</style>
