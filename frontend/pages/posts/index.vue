<template>
  <div>
    <h2>Posts page</h2>
    <form>
      <input v-model="query" type="search" placeholder="Search something">
    </form>
    <ul>
      <li v-for="post in filteredPosts" :key="post.id" class="card-container">
        <img :src="post.Cover.url" :alt="post.Title" class="card__image">
        <h4 class="card-title">
          {{ post.Title }}
        </h4>
        <div v-html="post.Content" />
      </li>
    </ul>
  </div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/posts'
export default {
  name: 'Posts',
  data () {
    return {
      posts: [],
      query: ''
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
        return post.Title.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  }
}
</script>

<style lang="sass">
  .card
    &__image
      height: 300px
      width: 300px
</style>
