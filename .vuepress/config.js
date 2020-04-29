module.exports = {
  title: 'Basic Blog', // Title for the site. This will be displayed in the navbar.
  theme: 'local', //'@vuepress/theme-blog',
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
      { text: 'Posts', link: '/_posts/'},
      { text: 'About me!', link: 'http://www.theallenc.com' },
      { text: 'Github repo', link: 'https://clarkallen1556.github.io/basic_vue_blog/' }
    ]
  }
}