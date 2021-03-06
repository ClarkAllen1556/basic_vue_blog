module.exports = {
  title: 'Only Basics', // Title for the site. This will be displayed in the navbar.
  theme: 'local', // '@vuepress/theme-blog'
  // base: '/basic_vue_blog/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    search: true,
    navbar: true,
    nav: [
      { text: 'Posts', link: '/_posts/'},
      { text: 'About me!', link: 'http://www.theallenc.com' },
      { text: 'Github repo', link: 'https://github.com/ClarkAllen1556/basic_vue_blog' }
    ]
  },
  plugins: [
    [
      "@vuepress/blog", {
      directories: [
        {
          id: '_posts',
          dirname: '_posts',
          path: '/blog/',
          itemPermalink: '/blog/:year/:month/:day/:slug',
          // layout: 'Layout'
        },
      ]
    }]
  ]
}

