<template>
  <div>
    <div class="heading"> <h1> {{ listTitle }} </h1> </div>
    <div class="post-container" v-for="post in posts">
      <div>
        <a v-bind:href="post.path"> <h2> {{ post.title }} </h2> </a>
      </div>
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
<style lang="stylus">
  .date
    border-radius: 7px
    background: #4adace
    color: white
    padding: 5px

  .meta
    font-size: medium
    padding: 5px
    margin-left: 5px

  .article
    font-size: x-large
    margin-bottom: 20px
    border-left: solid 5px #3eaf7c
    padding: 20px

  .keywords
    margin-top: 10px

  .keyword
    padding: 5px
    border-radius: 7px
    font-size: small
    background: #3eaf7c
    margin-right: 5px
    color: white
    font-weight: 500

</style>
