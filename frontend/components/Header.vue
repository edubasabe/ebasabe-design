<template>
  <client-only>
    <header id="header">
      <nav>
        <a href="#" class="logo">
          <Logo />
        </a>
        <ul class="nav-list">
          <li class="nav-list__item">
            <HomeIcon class="icon" />
            <router-link tag="a" to="/" exact>
              Inicio
            </router-link>
          </li>
          <li class="nav-list__item">
            <BriefcaseIcon class="icon" />
            Portafolio
          </li>
          <li class="nav-list__item">
            <Edit3Icon class="icon" />
            <router-link tag="a" to="/posts">
              Blog
            </router-link>
          </li>

          <li class="nav-list__item contact">
            <router-link tag="a" to="/posts">
              <MailIcon class="icon" />
              Contacto
            </router-link>
          </li>
          <!-- <li><router-link tag="a" class="navbar-brand" to="/restaurants" exact>Restaurants</router-link></li> -->
        </ul>
      </nav>
    </header>
  </client-only>
</template>

<script>
import { HomeIcon, BriefcaseIcon, Edit3Icon, MailIcon } from 'vue-feather-icons'
import Logo from '~/components/Logo.vue'
export default {
  name: 'Header',
  components: {
    Logo,
    HomeIcon,
    BriefcaseIcon,
    Edit3Icon,
    MailIcon
  }
}
</script>

<style lang="sass">
#header
  @apply shadow-sm
  background-color: transparent;

  nav
    @apply flex items-center justify-between flex-wrap max-w-6xl mx-auto relative py-4 px-4
    a.logo
      @apply border-gray-100 mr-auto
    ul.nav-list
      @apply flex items-center fixed bottom-0 left-0 w-full justify-around py-2 bg-gray-100 border-t

      li.nav-list__item
        @apply text-xs flex justify-center flex-col items-center font-semibold
        > a
          @apply flex flex-col items-center
        .icon
          @apply mb-1

@screen md
  #header
    nav
      @apply flex flex-no-wrap
      ul.nav-list
        @apply relative bg-transparent border-0 justify-end
        li.nav-list__item
          @apply text-base mr-6
          .icon
            @apply hidden
          &.contact
            @apply bg-blue text-white rounded px-4 py-2 font-semibold

</style>
