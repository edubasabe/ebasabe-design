<template>
  <client-only>
    <nav class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div class="lg:w-0 lg:flex-1">
            <a href="#" class="flex">
              <Logo />
            </a>
          </div>

          <ul class="">
            <li class>
              <router-link tag="a" class="navbar-brand" to="/" exact>
                Inicio
              </router-link>
            </li>
            <!-- <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Restaurants</router-link></li> -->
          </ul>
        </div>
      </div>
    </nav>
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

<style></style>
