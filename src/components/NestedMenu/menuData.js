const menu = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
      submenu: [
        {
          label: 'Our Team',
          url: '/about/team',
          submenu: [
            {
              label: 'Leadership',
              url: '/about/team/leadership',
              submenu: [
                {
                  label: 'CEO',
                  url: '/about/team/leadership/ceo',
                },
                {
                  label: 'CTO',
                  url: '/about/team/leadership/cto',
                },
              ],
            },
            {
              label: 'Staff',
              url: '/about/team/staff',
              submenu: [
                {
                  label: 'Developer',
                  url: '/about/team/staff/developer',
                },
                {
                  label: 'Designer',
                  url: '/about/team/staff/designer',
                },
              ],
            },
          ],
        },
        {
          label: 'History',
          url: '/about/history',
        },
        {
          label: 'Mission',
          url: '/about/mission',
          submenu: [
            {
              label: 'Vision',
              url: '/about/mission/vision',
              submenu: [
                {
                  label: 'Long-term Vision',
                  url: '/about/mission/vision/long-term',
                },
                {
                  label: 'Short-term Vision',
                  url: '/about/mission/vision/short-term',
                },
              ],
            },
            {
              label: 'Values',
              url: '/about/mission/values',
            },
          ],
        },
      ],
    },
    {
      label: 'Services',
      url: '/services',
      submenu: [
        {
          label: 'Web Development',
          url: '/services/web',
          submenu: [
            {
              label: 'Frontend',
              url: '/services/web/frontend',
              submenu: [
                {
                  label: 'React',
                  url: '/services/web/frontend/react',
                },
                {
                  label: 'Vue',
                  url: '/services/web/frontend/vue',
                },
              ],
            },
            {
              label: 'Backend',
              url: '/services/web/backend',
              submenu: [
                {
                  label: 'Node.js',
                  url: '/services/web/backend/nodejs',
                },
                {
                  label: 'Django',
                  url: '/services/web/backend/django',
                },
              ],
            },
          ],
        },
        {
          label: 'Mobile Development',
          url: '/services/mobile',
        },
        {
          label: 'SEO',
          url: '/services/seo',
        },
      ],
    },
    {
      label: 'Contact',
      url: '/contact',
      submenu: [
        {
          label: 'Email Us',
          url: '/contact/email',
        },
        {
          label: 'Call Us',
          url: '/contact/call',
        },
        {
          label: 'Office Locations',
          url: '/contact/locations',
        },
      ],
    },
  ];
  
export default menu