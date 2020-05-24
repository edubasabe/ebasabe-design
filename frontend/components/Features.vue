<template>
  <section id="feature" class="feature">
    <div class="feature__inner">
      <ul class="feature-items flex">
        <li v-for="feature in features" :key="feature.id" class="item">
          <img :src="baseUrl + feature.image.url" :alt="feature.title" class="item__image">
          <h4 class="item__title">
            {{ feature.title }}
          </h4>
          <p class="item__description">
            {{ feature.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import ROUTES from '~/constants/routes'
import FeatureQuery from '~/apollo/queries/feature/features'

export default {
  name: 'Feature',
  data () {
    return {
      features: [],
      baseUrl: ROUTES.strapi
    }
  },
  apollo: {
    features: {
      prefetch: true,
      query: FeatureQuery
    }
  }
}
</script>

<style lang="sass">
#feature
  @apply w-full py-5 h-auto

  .feature-items
    .item
      @apply px-6 flex flex-col items-center justify-end
      &__image
        @apply w-1/2
      &__title
        @apply text-2xl font-semibold text-gray-900
      &__description
        @apply text-center w-2/3 text-gray-600
</style>
