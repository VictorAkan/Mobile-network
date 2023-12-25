import { MdOutlineNetworkCell } from "react-icons/md"; // data topup
import { IoGitNetwork } from "react-icons/io5"; // airtime topup
import { FaCableCar } from "react-icons/fa6"; // cable sub
import { GiCheckeredDiamond } from "react-icons/gi"; // result checker
import { LuUtilityPole } from "react-icons/lu"; // utility
import { MdSms } from "react-icons/md"; // sms

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_ntp_work', label: 'How NTP Works?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'login', label: 'Login' },
    { href: '/', key: 'register', label: 'Register' },
];

// CAMP SECTION
export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
];

// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: 'Learn More',
        links: [
            'About Mandtech',
            'Login',
            'Register',
            'Our Services',
            'Testimonies',
        ],
    },
    {
        title: 'Our Vision',
        links: ['To create a world-class innovative business that keeps prices low and service consistent while meeting enormous needs'],
    },
    {
        title: 'Address',
        links: ['Jimoh Aliu street, Bojuri junction along Apata_nata Adebayo Ado-Ekiti']
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Contact', value: '123-456-7890' },
        { label: 'Email', value: 'vikurekong123@gmail.com' },
    ],
};

export const SOCIALS = {
    title: 'Social',
    links: [
        '/facebook.svg',
        '/instagram.svg',
        '/twitter.svg',
        '/youtube.svg',
        '/wordpress.svg',
    ],
};

// SERVICE SECTION
export const ServiceData = [
    {
        icon: IoGitNetwork,
        title: "Airtime Topup",
        content: "Give your loved ones an immediate phone boost to keep in touch with them while you're away from home",
    },
    {
        icon: MdOutlineNetworkCell,
        title: "Data Topup",
        content: "Start taking advantage of this extremely low-cost data plan for internet browsing that is Fast and Automated. Our portal is available 24 hours a day, seven days a week.",
    },
    {
        icon: FaCableCar,
        title: "Cable Subscriptions",
        content: "As long as you have easy access to our cable subscriptions, your opinions cannot be rejected.",
    },
    {
        icon: GiCheckeredDiamond,
        title: "Result Checker",
        content: "Get your pin here, to check your exam result.",
    },
    {
        icon: LuUtilityPole,
        title: "Utility Bills Payment",
        content: "Paying your utility bills online is convenient no matter where you are in the country",
    },
    {
        icon: MdSms,
        title: "Bulk SMS",
        content: "Send immediate messages to those that matter to you.",
    },
]