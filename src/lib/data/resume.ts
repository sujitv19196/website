import { CodeIcon, Github, Globe, HomeIcon, Forward, NotebookIcon, Paperclip, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

import AtomicImg from '$lib/imgs/atomic.png';
import ShopifyImg from '$lib/imgs/shopify.svg';
import NvidiaImg from '$lib/imgs/nvidia.png';
import SplunkImg from '$lib/imgs/splunk.svg';
import LimeImg from '$lib/imgs/lime.svg';
import MitreMediaImg from '$lib/imgs/mitremedia.png';
import BuildSpaceImg from '$lib/imgs/buildspace.jpg';
import WaterLooImg from '$lib/imgs/waterloo.png';
import LaurierImg from '$lib/imgs/laurier.png';
import IBImg from '$lib/imgs/ib.png';

import SujitHeadshot from '$lib/imgs/sujit-headshot.png';
import InstalilyLogo from '$lib/imgs/instalily.jpeg';
import ClassTranscribeLogo from '$lib/imgs/ctlogo.ico';
import PandoraLogo from '$lib/imgs/pandora.png';
import UOFILOGO from '$lib/imgs/uofilogo.png';
import StrideFig from '$lib/imgs/stridefig2.png';
import CaptionBeeDemo from '$lib/imgs/cbdemo.png';
import CTDEMO from '$lib/imgs/ctdemo2.svg';
import CBSDemo from '$lib/imgs/cbs.svg';
import UWB from '$lib/imgs/uwb.png';

// Your resume data
export let DATA = {
    name: 'Sujit Varadhan',
    initials: 'SV',
    url: 'https://github.com/sujitv19196',
    img: SujitHeadshot,
    location: 'New York, NY',
    locationLink: 'https://www.google.com/maps/place/new+york+ny',
    description:
        'Software Engineer with a passion for AI full-stack apps, accessibility and assistive technology, and P2P distributed systems',
    summary:
        `With experience in backend, frontend, full-stack development, and distributed systems, I specialize in building scalable, AI-driven applications. 
        At Instalily.ai, I launched a full-stack AI advertisement analysis tool used daily by over 25 marketing teams and led the design of a graph-based 
        AI Agent Python library for deploying autonomous agentic workflows fast. My previous experience includes enhancing accessibility features for a lecture video 
        platform used by 10,000 users and productionalizing new features for the core song recommendation service powering Pandora and serving over 40 million listeners. Proficient in Python, Java, Go, JS, React, 
        and various frameworks, I'm passionate about leveraging AI and distributed systems to solve complex problems and improve accessibility for people of all abilities.`,
    avatarUrl: 'https://media.licdn.com/dms/image/v2/C5603AQGQSfvU7J4_OQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653598484052?e=1735171200&v=beta&t=rK4Rpj6N8BzqP4_3kXI8HzxZQ-BUg2UFO95RxXEMRWw',
    skills: [
        'Python',
        'Java',
        'Go',
        'JavaScript',
        'Typescript',
        'React',
        'Svelte',
        'Sveltekit',
        'Node.js',
        'GCP',
        'Spring/Spring Boot',
        'Flask',
        'FastAPI',
        'REST',
        'Docker',
        'SQL',
        'NoSQL',
        'Neo4j',
        'Redis',
    ],
    navbar: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
        // { href: '/Projects', icon: CodeIcon, label: 'Projects' }
    ],
    contact: {
        email: 'sujitvaradhan4@gmail.com',
        social: {
            GitHub: {
                name: 'GitHub',
                url: 'https://github.com/sujitv19196',
                // // icon: Icons.github,
                icon: GithubSvg,
                navbar: true,
                dark_icon: GithubDarkSvg
            },
            LinkedIn: {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/sujit-varadhan/',
                // // icon: Icons.linkedin,
                icon: LinkedinSvg,
                navbar: true,
                dark_icon: LinkedinDarkSvg
            },
            // X: {
            //     name: 'X',
            //     url: 'https://twitter.com/Sikandar_Bhide',
            //     // // icon: Icons.x,
            //     icon: TwitterSvg,
            //     navbar: true,
            //     dark_icon: TwitterDarkSvg
            // },
            // PeerList: {
            //     name: 'PeerList',
            //     url: 'https://peerlist.io/bhide',
            //     // // icon: Icons.x,
            //     icon: PeerListSvg,
            //     navbar: true,
            //     dark_icon: PeerListDarkSvg
            // },
            // Youtube: {
            // 	name: 'Youtube',
            // 	url: 'https://github.com/SikandarJODD',
            // 	// // icon: Icons.youtube,
            // 	icon: Youtube,
            // 	navbar: true
            // },
            email: {
                name: 'Send Email',
                url: 'mailto:sujitvaradhan4@gmail.com',
                // // icon: Icons.email,
                icon: GmailSvg,
                navbar: true,
                dark_icon: GmailDarkSvg
            }
        }
    },
    work: [
        {
            company: 'Instalily',
            href: 'https://instalily.ai',
            badges: [],
            location: 'New York, NY',
            title: 'AI/Software Engineer',
            logoUrl: InstalilyLogo,
            start: 'May 2024',
            end: 'Current',
            description:
                'Building AI Agents and full-stack solutions to automate and optimzie workflows for $1B+ companies.'
        },
        {
            company: 'ClassTranscribe',
            badges: [],
            href: 'https://classtranscribe.illinois.edu/',
            location: 'Urbana, IL',
            title: 'Software Engineer and Product Manager',
            logoUrl: ClassTranscribeLogo,
            start: 'September 2021',
            end: 'May 2024',
            description:
                'Shipped 100+ features to 10,000 users within a production lecture video platform by taking leadership role indeveloping new assistive technologies to improve user experience for persons of all abilities, using React and JS.'
        },
        {
            company: 'UDL and Accessibility Research Group',
            href: 'https://publish.illinois.edu/udl-accessibility-group/',
            location: 'Urbana, IL',
            title: 'Research Assistant',
            logoUrl: UOFILOGO,
            start: 'September 2021',
            end: 'May 2024',
            description:
                'Co-authored seven papers on the impact of Universal Design for Learning (UDL) on student learning outcomes and accessibility in higher education with a goal of improving education for students of all abilities.'
        },
        {
            company: 'Pandora',
            href: 'https://pandora.com',
            badges: [],
            location: 'Oakland, CA',
            title: 'Software Engineer Intern',
            logoUrl: PandoraLogo,
            start: 'June 2022',
            end: 'August 2022',
            description:
                'Shipped 8 new features to 40 million Pandora listeners within main song recommendation backend service, using Java, Spring Boot, JUnit, and Mockito.'
        },
        {
            company: 'Pandora',
            href: 'https://pandora.com',
            badges: [],
            location: 'Oakland, CA',
            title: 'Software Engineer Intern',
            logoUrl: PandoraLogo,
            start: 'June 2021',
            end: 'August 2021',
            description:
                'Enabled debugging of production issues for all dev and QA teams by creating internal website and Java service to display, filter, and search a users song recommendation history across all prod and dev environments using React, JS, and Java/Spring.'
        },
    ],
    education: [
        {
            school: 'University of Illinois Urbana Champaign',
            degree: 'M.S. in Computer Science',
            logoUrl: UOFILOGO,
            start: '2022',
            end: '2023'
        },
        {
            school: 'University of Illinois Urbana Champaign',
            degree: 'B.S. in Computer Science with Honors',
            logoUrl: UOFILOGO,
            start: '2019',
            end: '2022'
        },
        

    ],
    projects: [
        {
            title: 'CaptionBee',
            href: '/projects/caption-bee',
            dates: 'June 2023 - Present',
            active: true,
            description: 'Free AI web app that allows users to auto-generate and easily edit subtitles for videos.',
            technologies: [
                'Python',
                'Svelte',
                'Typescript',
                'HTML',
                'CSS',
                'SQLite',
            ],
            links: [
                {
                    type: 'Website Demo',
                    href: 'https://anandramaka.github.io/CS-465-WebApp/',
                    icon: Globe
                },
                {
                    type: 'Source',
                    href: 'https://github.com/sujitv19196/caption-bee-ui',
                    icon: Github
                },
                // {
                //     'type': 'Learn More',
                //     'href': '/projects/caption-bee',
                //     'icon': Forward
                // }
            ],
            image: CaptionBeeDemo,
        },
        {
            title: 'Stride',
            href: '/projects/stride',
            dates: 'Jan 2024 - Feb 2024',
            active: true,
            description:
                'A PoC for an open ride-sharing system that computes optimal matches between riders and drivers w/o a central server, eliminating the need for a middleman taking profit away from drivers.',
            technologies: [
                'Go',
                'P2P',
                'Distriuted Systems',
                'Python',
            ],
            links: [
                {
                    type: 'Paper',
                    href: 'https://chatcollect.com',
                    // icon: <Icons.globe className="size-3" />,
                    icon: Paperclip
                },
                {
                    type: 'Source',
                    href: 'https://github.com/sujitv19196/ridehost',
                    icon: Github

                },
                // {
                //     type: 'Learn More',
                //     href: '/projects/stride',
                //     icon: Forward
                // }
            ],
            image: StrideFig,
        },
        // {
        //     title: 'Enlarge My Music (WIP)',
        //     href: 'https://llm.report',
        //     dates: 'April 2023 - September 2023',
        //     active: true,
        //     description:
        //         'Concpet for an IOS app that empowers visually imparied musicians to read and enlarge jazz sheet music',
        //     technologies: [
        //         'Swift',
        //         'CoreML',
        //         'Vision',
        //     ],
        //     links: [
        //         {
        //             type: 'Website',
        //             href: 'https://llm.report',
        //             icon: Globe
        //             // icon: <Icons.globe className="size-3" />,
        //         },
        //         {
        //             type: 'Source',
        //             href: 'https://github.com/dillionverma/llm.report',
        //             icon: Github
        //             // icon: <Icons.github className="size-3" />,
        //         }
        //     ],
        //     image: '',
        //     video: 'https://cdn.llm.report/openai-demo.mp4'
        // },
        {
            title: 'ClassTranscribe',
            href: '/projects/classtranscribe',
            dates: 'April 2023 - March 2024',
            technologies: [
                'React',
                'Javascript',
                'Redux',
                'Node.js',
            ],
            active: true,
            description:
                'Launched new features for an accessibility focused lecture video platform used at UIUC, including a new video player, video to textbook conversions using AI, and improved audio descriptions for blind users.',
            links: [
                {
                    type: 'Website',
                    href: 'https://classtranscribe.illinois.edu',
                    icon: Globe
                },
                {
                    type: 'Source',
                    href: 'https://github.com/classtranscribe/FrontEnd',
                    icon: Github
                },
                // {
                //     type: 'Learn More',
                //     href: '/projects/classtranscribe',
                //     icon: Forward
                // }
            ],
            image: CTDEMO,
        },
        {
            title: 'Competitor Social Media Analysis Dashboard (Instalily)',
            href: '/projects/social-media-analysis',
            dates: 'April 2023 - March 2024',
            active: true,
            description:
                'Launched full-stack AI ad analysis tool used daily by 25+ marketing teams. Managed full project lifecycle from concept to delivery and provided troubleshooting/support.',
            technologies: [
                'Python',
                'Selenium',
                'React',
                'Javascript',
                'TailwindCSS',
                'Shadcn',
                'FastAPI',
                'Docker',
                'GCP Cloud Run',
                'GCP Firestore',
                'GCP App Engine',
                'GCP Cloud Functions'
            ],
            links: [
                // {
                //     type: 'Learn More',
                //     href: '/projects/social-media-analysis',
                //     icon: Forward
                // }
            ],
            image: CBSDemo,
        },
        {
            title: 'Ultra-Wideband Localization System for Real-Time Position Tracking',
            href: '/projects/uwb',
            technologies: [
                'C',
                'Ultra-Wideband',
                'Python',
                'MatPlotLib',
            ],
            active: true,
            dates: 'April 2023 - March 2024',
            description:
                'Built a UWB sensor array to triangulate the position of an object with 0.5-meter accuracy in real time by utilizing a two-way ranging time of arrival approach.',
            links: [
                {
                    type: 'Video',
                    href: 'https://www.youtube.com/watch?v=Qu59CW5JuwM',
                    icon: Youtube
                },
                {
                    type: 'Source',
                    href: 'https://github.com/sujitv19196/cs439-uwb-proj',
                    icon: Github
                },
                // {
                //     type: 'Learn More',
                //     href: '/projects/uwb',
                //     icon: Forward
                // }
            ],
            image: UWB,
        }
    ],
    research: [
        {
            title: 'UDL and Accessibility Resarch Group',
            href: 'https://publish.illinois.edu/udl-accessibility-group/',
        },
    ]
  
};
