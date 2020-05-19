<template>
  <client-only>
    <nav>
      <ul class="bg-gray-600">
        <li class>
          <router-link tag="a" class="navbar-brand" to="/" exact>
            Inicio
          </router-link>
        </li>
        <!-- <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Restaurants</router-link></li> -->
      </ul>
    </nav>
  </client-only>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style></style>
