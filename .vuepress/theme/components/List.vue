<template>
  <div>
    <div class="heading"> {{ listTitle }} </div>
    <div class="article" v-for="post in posts">
      <a v-bind:href="post.path"> {{ post.title }} </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listTitle"],
  computed: {
    posts() {
      return this.$site.pages
        .filter(p => {
          return p.path.indexOf('/_posts/') >= 0;
        });
    },
  }
}
</script>
<style scoped>
  /* .date {
    border-radius: 7px;
    background: #4adace;
    color: white;
    padding: 5px;
  }
  .meta {
    font-size: medium;
    padding: 5px;
    margin-left: 5px;
  }
  .heading {
    font-size: xx-large;
  }
  .article {
    font-size: x-large;
    margin-bottom: 20px;
    border-left: solid 5px #3eaf7c;
    padding: 20px;
  }
  .keywords {
    margin-top: 10px;
  }
  .keyword {
    padding: 5px;
    border-radius: 7px;
    font-size: small;
    background: #3eaf7c;
    margin-right: 5px;
    color: white;
    font-weight: 500;
  } */
</style>
