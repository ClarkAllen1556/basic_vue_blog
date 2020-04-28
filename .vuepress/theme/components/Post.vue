<template>
  <div>
    <div>
      <div class="post-box">
        <h1> {{ postTitle }} </h1>
        <Content v-if="$page.frontmatter.type === 'Article'" class="theme-default-content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "postTitle"
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