<template>
  <div>
    <div>
      <div class="post-container">
        <span>
          <h1> {{ postTitle }} </h1>
          <h3> - {{ postAuthor ? postAuthor : "anon" }} : {{ (new Date(postDate).toLocaleDateString("en-US")) }} </h3>
        </span>
        <Content v-if="$page.frontmatter.type === 'article'" class="theme-default-content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "postTitle",
    "postAuthor",
    "postDate"
  ]
}
</script>