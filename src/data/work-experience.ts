import type { WorkExperience } from "~/models/work-experience.ts";

export const workExperiences: WorkExperience[] = [
    {
        company: "Tar Heel Dev Studio",
        position: "Freelance Web Developer",
        type: "remote",
        period: (new Date(2021, 11), new Date(2024, 3)),
        details: [
            "Manage a freelance web development, web design, and marketing business.",
            "Consult clients on important business activities including SEO Marketing, app development, finances, and much more.",
            "Develop content websites, web & mobile applications, and create scripts for automating business software.",
            "Create and maintain project repositories by using excellent communication skills, agile management, and proper source control tactics.",
            "Communicate project proposals, website designs, and marketing plans to potential and current clients."
        ],
        technologies: [
            "Astro",
            "Tailwind CSS",
            "Svelte",
            "JavaScript",
            "Typescript",
            "Rust",
            "Go Lang",
            "Python",
            "Netlify",
            "Deno",
            "Jamstack",
            "Strapi CMS",
            "PostgreSQL",
            "Mongo DB",
            "Kali Linux",
            "Ubuntu Linux",
            "Raspberry Pi",
            "React",
            "Eleventy",
            "Next JS"
        ]
    },
    {
        company: "Cyberopz now Iron Range Cyber",
        position: "SOC Analyst",
        type: "remote",
        period: (new Date(2021, 6), new Date(2021, 11)),
        details: [
            "Monitored endpoints, performed security event triage, and responded to incidents while coordinating with team members and management to document and report each critical incident.",
            "Assisted clients by implementing best security practices to make recommendations, create monthly reports, and respond to any needs by effectively communicating via phone or email within 24 hours of any request.",
            "Use Kali Linux to create a script that tracked critical security vulnerabilities in technologies used by our clients.",
            "Shared a daily report of new security vulnerabilities, latest cybersecurity news, and latest threats by researching blog posts by experts and organizations with my colleagues to keep company in the loop of latest cybersecurity developments.",
            "Presented Cyberopz solution packages to new clients and sold them on our offerings to increase our market position and grow our client base"
        ],
        technologies: [
            "microsoft",
            "kali linux"
        ]
    },
    {
        company: "SunTrust now Truist Bank",
        position: "Personal Banker IV",
        type: "onsite",
        period: (new Date(2019, 4), new Date(2020, 7)),
        details: [
            "Sold bank products like Home Equity Lines, Credit Cards, and Demand Deposit Accounts to current and new clients in respect to their daily financial needs.",
            "Managed the day to day operations of the bank when the Branch Manager position was not filled for 6 months.",
            "Prospected and contacted new small business clients in an effort to offer them one of the best business banking solutions on the market.",
            "Consulted clients on their current financial situation and assessed their needs to provide sound financial advice.",
            "Opened new accounts, created necessary paperwork, and assisted clients in applying for lending products in a professional manner."
        ],
        technologies: [
            "microsoft",
            "kali linux"
        ]
    },
    {
        company: "Birddog Distributing Inc",
        position: "Purchasing Manager",
        type: "onsite",
        period: (new Date(2017, 10), new Date(2019, 2)),
        details: [
            "Managed entire inventory tracking, purchasing, and ordering processes at an LED Lighting Company.",
            "Assisted in making key business strategic decisions for the organization by serving as a member of the Advisory and Management Team.",
            "Communicated project specifications, purchase orders, and product warranties with our manufacturers in China on a daily basis.",
            "Engineered a new inventory tracking, forecasting, and purchasing process with the assistance of an Industrial Engineering Student team from Montana State University.",
            "Helped increase profit margin by 10% through better inventory management and supply chain practices implemented during my time as Purchasing Manager."
        ],
        technologies: [
            "microsoft",
            "excel"
        ]
    }
];
