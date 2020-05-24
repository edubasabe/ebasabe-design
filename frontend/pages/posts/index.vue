<template>
  <div class="container mx-auto w-full">
    <h2>Posts page</h2>
    <form>
      <input v-model="query" type="search" placeholder="Search something">
    </form>
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase">
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Marketing
        </div>
        <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
    <ul>
      <li v-for="post in filteredPosts" :key="post.id" class="card">
        <img :src="strapiUrl + post.image.url" :alt="post.title" class="card__image">
        <h4 class="card__title">
          {{ post.title }}
        </h4>
        <p class="card__content">
          {{ post.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import ROUTE from '~/constants/routes'
import postsQuery from '~/apollo/queries/post/posts'
export default {
  name: 'Posts',
  data () {
    return {
      posts: [],
      query: '',
      strapiUrl: ROUTE.strapi
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery
    }
  },
  computed: {
    filteredPosts () {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  }
}
</script>

<style lang="sass">
  .card
    &__image
      @apply rounded w-56 h-56 flex-shrink-0
    &__title
      @apply text-gray-900 font-semibold
    &__content
      @apply text-gray-600

</style>
