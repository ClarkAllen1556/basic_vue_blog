<template>
  <main class="page">
    <slot name="top" />

    <div class="page-content">
      <slot v-if="$page.frontmatter.type === 'article'" name="post">
        <Post
          v-bind:postTitle="$page.frontmatter.title"
          v-bind:postAuthor="$page.frontmatter.author"
          v-bind:postDate="$page.frontmatter.published"/>
      </slot>
      <slot v-else-if="$page.frontmatter.type === 'Listings'" name="list">
        <List v-bind:listTitle="$page.frontmatter.title" />
      </slot>
    </div>

    <PageNav v-bind="{ sidebarItems }" />

    <PageEdit />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

import List from '@theme/components/List.vue'
import Post from '@theme/components/Post.vue'

export default {
  components: {
    PageEdit,
    PageNav,
    List,
    Post
  },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

// .list
//   position absolute
//   top 50%
//   right 50%
//   transform translate(50%, -50%)
</style>
