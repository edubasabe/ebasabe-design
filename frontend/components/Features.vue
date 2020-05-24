<template>
  <section id="feature" class="feature">
    <div class="feature__inner">
      <ul>
        <li v-for="feature in features" :key="feature.id">
          {{ feature.title }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import FeatureQuery from '~/apollo/queries/feature/features'

export default {
  name: 'Feature',
  data () {
    return {
      features: []
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: FeatureQuery
    }
  }
}
</script>

<style lang="sass">
#feature
  @apply bg-teal-300 w-full h-64

</style>
