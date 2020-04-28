module.exports = {
  title: 'Basic Blog', // Title for the site. This will be displayed in the navbar.
  theme: 'local', //'@vuepress/theme-blog',
  // plugins: [
  //   [　'@vuepress/blog', {
  //       directories: [
  //       {
  //         // Unique ID of current classification
  //         id: 'post',
  //         // Target directory
  //         dirname: '_posts',
  //         // Path of the `entry page` (or `list page`)
  //         path: '/',
  //         itemPermalink: '/post/:year/:month/:day/:slug',
  //       },
  //       ],
  //     },
  //   ],
  // ],
  themeConfig: {
    // Please keep looking down to see the available options.
    sidebar: [
      ['/', 'Home'],
      ['/_posts/', 'Posts']
    ],
    navbar: true
  }
}