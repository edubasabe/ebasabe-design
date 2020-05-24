<template>
  <div>
    <Hero />
    <Features />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Features from '~/components/Features.vue'

export default {
  name: 'Index',
  components: {
    Hero,
    Features
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
