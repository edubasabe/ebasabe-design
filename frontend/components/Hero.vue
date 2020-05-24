<template>
  <div class="hero">
    <div class="container">
      <vue-typed-js
        class="hero__title"
        :strings="typedStrings"
        loop
      >
        <h2 class="typing" />
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      typedOptions: {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40
      },
      typedStrings: [
        'Web development',
        'UI/UX Design',
        'Web optimization',
        'many more...'
      ]
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass">
.hero
  @apply bg-blue flex justify-center py-5
  &__title
    @apply text-white text-4xl text-center

</style>
