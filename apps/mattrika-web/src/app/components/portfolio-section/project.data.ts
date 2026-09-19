import type { Project } from './project.model'

export const projects: Project[] = [
    {
        title: 'ChainLink Logistics',
        category: 'SaaS Platform',
        thumbnail: '/portfolio/project-1.svg',
        images: [
            '/portfolio/project-1.svg',
            '/portfolio/detail-1.svg',
            '/portfolio/detail-2.svg',
        ],
        summary:
            'A dispatch and tracking platform that cut delivery exceptions by 38% for a freight company.',
        description:
            'ChainLink centralizes order intake, route planning, and live driver tracking. We rebuilt their legacy dispatch board as a real-time web app with geofenced status updates, automated customer notifications, and a reporting module the operations team actually trusts.',
        client: 'ChainLink Freight Inc.',
        year: '2025',
        role: 'Full product build — research, UX, FE/BE, DevOps',
        stack: ['Angular', 'NestJS', 'PostgreSQL', 'Leaflet'],
    },
    {
        title: 'MedEase Health',
        category: 'Health Platform',
        thumbnail: '/portfolio/project-2.svg',
        images: [
            '/portfolio/project-2.svg',
            '/portfolio/detail-2.svg',
            '/portfolio/detail-1.svg',
        ],
        summary:
            'Telehealth booking and records system rolled out across 40+ clinics.',
        description:
            'MedEase connects patients, doctors, and clinics in one workflow. It handles appointment scheduling, video consultations, prescription delivery, and secure storage of medical history — built to comply with regional health-data regulations from day one.',
        client: 'MedEase Network',
        year: '2024',
        role: 'Product design lead + frontend engineering',
        stack: ['Angular', 'Firebase', 'WebRTC', 'Tailwind'],
    },
    {
        title: 'ShopGrid Commerce',
        category: 'E-commerce',
        thumbnail: '/portfolio/project-3.svg',
        images: [
            '/portfolio/project-3.svg',
            '/portfolio/detail-1.svg',
            '/portfolio/detail-2.svg',
        ],
        summary:
            'Headless storefront that lifted checkout conversion by 22% within two months.',
        description:
            'ShopGrid is a headless commerce engine with a blazing-fast storefront, composed product pages, and a CMS-driven marketing toolkit. A refined cart and one-page checkout flow turned a struggling shop into a consistent revenue machine.',
        client: 'ShopGrid Retail',
        year: '2025',
        role: 'Full product build — storefront, checkout, CMS',
        stack: ['Next.js', 'Medusa', 'Stripe', 'GraphQL'],
    },
    {
        title: 'EduFlow Learning',
        category: 'EdTech',
        thumbnail: '/portfolio/project-4.svg',
        images: [
            '/portfolio/project-4.svg',
            '/portfolio/detail-1.svg',
            '/portfolio/detail-2.svg',
        ],
        summary:
            'An online academy platform serving 20k+ students with live and recorded classes.',
        description:
            'EduFlow provides course authoring, live classrooms, quizzes, and skill certificates. We focused on accessibility and performance so students on low-bandwidth connections still get a smooth experience.',
        client: 'EduFlow Academy',
        year: '2024',
        role: 'Frontend engineering + platform architecture',
        stack: ['Angular', 'Node.js', 'MongoDB', 'HLS'],
    },
    {
        title: 'KiloFit Fitness',
        category: 'Mobile App',
        thumbnail: '/portfolio/project-5.svg',
        images: [
            '/portfolio/project-5.svg',
            '/portfolio/detail-2.svg',
            '/portfolio/detail-1.svg',
        ],
        summary:
            'A coaching app with personalized workout plans that grew to 35k monthly actives.',
        description:
            'KiloFit pairs trainers with clients through adaptive workout plans, nutrition logging, and progress photo tracking. A native-feeling mobile experience keeps users coming back — retention doubled after the redesign.',
        client: 'KiloFit Studios',
        year: '2023',
        role: 'UI/UX design + cross-platform app build',
        stack: ['Flutter', 'Firebase', 'Dart', 'SQLite'],
    },
    {
        title: 'FinBoard SaaS',
        category: 'Fintech',
        thumbnail: '/portfolio/project-6.svg',
        images: [
            '/portfolio/project-6.svg',
            '/portfolio/detail-1.svg',
            '/portfolio/detail-2.svg',
        ],
        summary:
            'A finance dashboard that replaced weekly spreadsheets for 120+ accounting teams.',
        description:
            'FinBoard aggregates ledgers, invoices, and banking feeds into real-time cash-flow views. Custom drill-downs and alerting make it the single source of truth finance teams open first every morning.',
        client: 'FinBoard Inc.',
        year: '2025',
        role: 'Product strategy + full-stack delivery',
        stack: ['Angular', 'NestJS', 'PostgreSQL', 'Redis'],
    },
]
