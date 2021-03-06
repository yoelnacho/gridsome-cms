// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jobs',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Jobs',
        path: './content/jobs/**/*.md',
        remark: {
          // remark options
        }
      }
    }
  ],
  templates: {
    Jobs: '/jobs/:slug'
  },
  transformers: {
    remark: {
      // global remark options
    }
  }
}
