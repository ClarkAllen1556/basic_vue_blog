<template>
  <div>
    <div>
      <div class="post-box">
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

<style scoped>
 .post-box {
   padding: 50px;
   margin: 25px;
   box-shadow: 0 0 10px black;
 }
</style>