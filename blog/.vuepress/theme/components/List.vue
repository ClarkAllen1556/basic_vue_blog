<template>
  <div>
    <div class="heading">
      <h1>{{ listTitle }}</h1>
    </div>
    <div v-for="post in posts" class="post-container">
      <div>
        <span class="date meta">{{ (new Date(post.frontmatter.date)).toLocaleDateString('en-US') }}</span>
        <span v-show="post.frontmatter.tags">
          <span v-for="tag in post.frontmatter.tags" class="keyword meta">{{ tag }}</span>
        </span>
      </div>
      <div>
        <a v-bind:href="post.path">
            <h2 class="title">{{ post.title }}</h2>
        </a>
        <p class="desc"> {{ post.frontmatter.description }} </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      "listTitle"
    ],
    computed: {
      posts() {
        let posts = this.$site.pages.filter(p => {
          return p.frontmatter.type === "article";
        });

        return posts.sort((postA, postB) => {
          return -(new Date(postA.frontmatter.date) - new Date(postB.frontmatter.date));
        });
      }
    }
  };
</script>
<style scoped lang="stylus">
  .meta {
    font-size: 12px
    margin-top: 1.5em;
    margin-right: .3em;
    padding: .3em;
    border-radius: 2em;
  }

  .date {
    background: $dateBackgroundColor;
    color: white;
  }

  .keyword {
    background: $metaBackgroundColor;
    color: white;
    font-weight: 500;
  }

  .title {
    margin-bottom: 20px;
    border-left: solid .4em $accentColor;
    padding: 20px;
  }

  .desc {
    font-size: 15px
    text-indent: 2em
  }
</style>
