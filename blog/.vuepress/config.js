module.exports = {
  title: 'Basic Blog', // Title for the site. This will be displayed in the navbar.
  theme: 'local', // '@vuepress/theme-blog'
  base: '/basic_vue_blog/',
  themeConfig: {
    // Please keep looking down to see the available options.
    lastUpdated: 'Last Updated',
    search: false,
    sidebar: [
      // ['/', 'Home'],
      ['/_posts/', 'Posts']
    ],
    navbar: true,
    nav: [
      { text: 'Posts', link: '/posts/'},
      { text: 'About me!', link: 'http://www.theallenc.com' },
      { text: 'Github repo', link: 'https://clarkallen1556.github.io/basic_vue_blog/' }
    ]
  },
  plugins: [
    [ "@vuepress/blog", {
      directories: [
        {
          id: '_posts',
          dirname: '_posts',
          path: '/blog/',
          itemPermalink: '/blog/:year/:month/:day/:slug',
          // layout: 'Layout'
        },
      ],
      // frontmatters: [
      //   {
      //     id: 'tag',
      //     keys: ['tags'],
      //     path: '/tag/',
      //   },
      // ],
      // globalPagination: {
      //   lengthPerPage: 5,
      // }
    }]
  ]
}

