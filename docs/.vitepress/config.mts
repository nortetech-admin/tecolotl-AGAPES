import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tecolotl AGAPES Docs',
  description: 'Documentation for the AGAPES drone and computer vision project',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Architecture', link: '/architecture' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'System',
        items: [
          { text: 'Architecture', link: '/architecture' },
          { text: 'Project Roadmap', link: '/project-roadmap' }
        ]
      },
      {
        text: 'Drone',
        items: [
          { text: 'Drone Integration', link: '/drone' },
          { text: 'Android App', link: '/android-app' }
        ]
      },
      {
        text: 'Vision',
        items: [
          { text: 'Dataset', link: '/dataset' },
          { text: 'Computer Vision', link: '/vision' }
        ]
      }
    ]
  }
})