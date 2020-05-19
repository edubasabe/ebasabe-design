<template>
  <client-only>
    <header id="header">
      <nav>
        <a href="#" class="logo">
          <Logo />
        </a>
        <ul class="nav-list">
          <li class>
            <router-link tag="a" class="navbar-brand" to="/" exact>
              Inicio
            </router-link>
          </li>
          <li>Porfolio</li>

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
  background-color: transparent;

  nav
    @apply max-w-6xl mx-auto relative flex py-4

    .logo
      @apply border-gray-100 mr-auto
    .nav-list
      @apply flex items-center

</style>
