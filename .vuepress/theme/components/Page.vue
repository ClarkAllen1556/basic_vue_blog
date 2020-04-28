<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <slot v-if="$page.frontmatter.list" name="list">
      <List v-bind:listTitle="$page.frontmatter.title" />
    </slot>

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

import List from '@theme/components/List.vue'

export default {
  components: {
    PageEdit,
    PageNav,
    List
  },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
