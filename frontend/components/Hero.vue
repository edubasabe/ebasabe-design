<template>
  <div class="hero">
    <vue-typed-js
      class="text-4xl"
      :strings="typedStrings"
    >
      <h2 class="typing" />
    </vue-typed-js>
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

<style>

</style>
