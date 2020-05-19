<template>
  <div>
    <h2>Posts page</h2>
    <form>
      <input v-model="query" type="search" placeholder="Search something">
    </form>
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
        return post.title.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
