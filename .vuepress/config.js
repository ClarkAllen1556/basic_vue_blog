module.exports = {
  title: 'Basic Blog', // Title for the site. This will be displayed in the navbar.
  theme: 'local', //'@vuepress/theme-blog',
  base: '/basic_vue_blog/',
  themeConfig: {
    // Please keep looking down to see the available options.
    sidebar: [
      // ['/', 'Home'],
      ['/_posts/', 'Posts']
    ],
    navbar: true,
    nav: [
      { text: 'About me!', link: 'http://www.theallenc.com' }
    ]
  }
}