// config.js
module.exports = {
    github: {
        username: 'astrarudra', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 2, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'rudraroy1507',
        twitter: 'arif_swozon',
        facebook: 'astrarudra',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'http://royin.in',
        email: 'rudraroy1507@gmail.com'
    },
    skills: [
        'JavaScript',
        'React.js',
        'Node.js',
        'Jquery',
        'MySQL',
        'Git',
        'CSS',
        'Antd',
        'Tailwind',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Ipsos MMA',
            position: 'Senior Software Engineer',
            from: 'September 2018',
            to: 'Present'
        },
        { 
            company: 'Amazon, IN',
            position: 'QA Engineer',
            from: 'May 2018',
            to: 'September 2017'
        },
    ],
    education: [
        { 
            institution: 'SRM University, KTR Chennai',
            degree: 'B.Tech - Bachelor of Technilogy',
            from: '2018',
            to: '2014'
        },
        { 
            institution: 'Delhi Public School, Ruby Park, Kolkata',
            degree: 'Higher Secondary Certificate (CSBC)',
            from: '2012',
            to: '2014',
        },
        { 
            institution: 'Don Bosco, Park Circus, Kolkata',
            degree: 'Secondary School Certificate (ICSE)',
            from: '2000',
            to: '2012'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        // source: 'dev.to', // medium | dev.to
        // username: 'arifszn',
        // limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id
        id: '' // UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    themeConfig: {
        default: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}