export const PROFILE = {
  name: 'Salman Ahmed Ansari',
  role: 'Sr. Lead Engineer, Frontend',
  location: 'Mumbai, India',
  experience: '6+ years building production software',
  email: 'developer.salmanahmed@gmail.com',
  github: 'https://github.com/salmanahmd',
  linkedin: 'https://www.linkedin.com/in/ansari-salman/',
  company: 'FynTune Solutions',
  since: 'June 2020',
} as const

export const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'notes', label: 'Notes' },
  { id: 'about', label: 'About' },
] as const

/* ------------------------------------------------------------------ */
/* Hero architecture visual                                            */
/* ------------------------------------------------------------------ */

export const HERO_LAYERS = [
  { id: 'react', label: 'React', meta: 'runtime', depth: 0.9 },
  { id: 'arch', label: 'Application Architecture', meta: 'structure', depth: 0.65 },
  { id: 'modules', label: 'Modules', meta: '300+ feature units', depth: 0.42 },
  { id: 'state', label: 'State / API / Permissions', meta: 'contract layer', depth: 0.22 },
  { id: 'users', label: 'Users', meta: '9M+ users', depth: 0.08 },
] as const

/* ------------------------------------------------------------------ */
/* Case study                                                          */
/* ------------------------------------------------------------------ */

export const CASE_METRICS = [
  {
    value: 9,
    suffix: 'M+',
    label: 'users',
    meaning:
      'Users across the platforms we ship to — a number that makes bundle size, render cost and route weight product concerns, not cosmetic ones.',
  },
  {
    value: 12,
    suffix: '',
    label: 'insurance organizations',
    meaning:
      'Tenants with different branding, products, permissions and rules — all served by one codebase instead of twelve forks.',
  },
  {
    value: 300,
    suffix: '+',
    label: 'modules',
    meaning:
      'Feature units with defined entry points and dependencies, so a screen composes modules instead of owning them.',
  },
  {
    value: 500,
    suffix: '+',
    label: 'routes',
    meaning:
      'A route graph large enough that naive eager loading stops being viable — routing, splitting and loading strategy become architecture.',
  },
] as const

export const CASE_LAYERS = [
  {
    id: 'tenant',
    title: 'Tenant',
    meta: 'entry',
    detail:
      'The request arrives with a tenant identity. Everything downstream — theme, product catalogue, feature flags, navigation — resolves from it, so the shell never hard-codes which organization it is serving.',
  },
  {
    id: 'shell',
    title: 'Application Shell',
    meta: 'composition root',
    detail:
      'The persistent frame: routing, layout, navigation, tenant theme. It owns what is shared across every screen and stays deliberately thin so tenant-specific behaviour enters through configuration, not conditionals scattered through components.',
  },
  {
    id: 'permissions',
    title: 'Permission Engine',
    meta: 'backend-driven',
    detail:
      'Permissions are read from the backend rather than guessed in the client. The engine translates them into capabilities the UI can ask about — "can this user see this block?" — so access control has a single source of truth.',
  },
  {
    id: 'features',
    title: 'Feature Modules',
    meta: '300+ units',
    detail:
      'Business workflows live here: enrollment, claims, benefits, admin tooling. Each module exposes a narrow surface and declares its own dependencies, which is what keeps a 500+ route application navigable for the team building it.',
  },
  {
    id: 'shared',
    title: 'Shared Components',
    meta: 'design system',
    detail:
      'Forms, tables, filters, empty states, domain widgets. The reuse layer that stops twelve tenants and hundreds of modules from drifting into twelve different visual and interaction languages.',
  },
  {
    id: 'api',
    title: 'API Layer',
    meta: 'contracts',
    detail:
      'Typed requests, normalization, caching boundaries and error handling in one place. Business rules that change frequently stay on the server; the frontend consumes the resolved rule instead of reimplementing it.',
  },
] as const

export const CASE_CHALLENGES = [
  {
    title: 'Multi-tenant frontend architecture',
    body: 'One platform serving twelve organizations and 9M+ users: tenant identity resolved at the shell, expressed through configuration and theming rather than forked codebases.',
  },
  {
    title: 'Separating broker and insurer applications',
    body: 'Defining the architectural boundaries that let broker and insurer applications live in independent repositories — cleaner ownership, independent releases and a path to onboard new insurer partners.',
  },
  {
    title: 'Configuration-driven onboarding',
    body: 'New brokers and insurers onboard with minimal custom development: products, branding, permissions and rules are configuration the platform reads, not code each client forks.',
  },
  {
    title: 'Dynamic business rules',
    body: 'Insurance products change constantly. Rules are resolved by the backend and consumed as data, so a pricing or eligibility change ships without a client release.',
  },
  {
    title: 'Backend-driven permissions & conditional UI',
    body: 'The client renders from capabilities it is given, not roles it assumes. Blocks, actions and routes appear only where the permission engine allows them.',
  },
  {
    title: 'Large route structure',
    body: '500+ routes organized around feature ownership, with route-level code splitting, lazy loading and React Suspense keeping first paint small.',
  },
  {
    title: 'Reusable modules & design system',
    body: '300+ modules built from shared primitives so new workflows are assembled, not rebuilt — and visual consistency survives team growth.',
  },
  {
    title: 'Performance engineering',
    body: 'Code splitting, lazy loading, image optimization and render-cost review applied continuously, because a platform this size makes every kilobyte and re-render visible to users.',
  },
  {
    title: 'Framework modernization: React 16 → 18',
    body: 'Led a staged React 16 to React 18 migration with dependency upgrades and React Router modernization — modernizing a large surface without stalling delivery.',
  },
  {
    title: 'Build modernization: CRA → Vite',
    body: 'Migrated the application from Create React App to Vite — reworking configuration, environment handling and build scripts to cut developer feedback loops and modernize the toolchain.',
  },
  {
    title: 'Leading a frontend team of nine',
    body: 'Owning architecture, technical design, sprint planning, code quality, release management and engineering standards while mentoring a growing team of React engineers.',
  },
  {
    title: 'Testing & engineering practice',
    body: 'Automated testing introduced where it protects critical workflows, paired with code review discipline and CI checks so refactors on a large codebase stay safe.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Journey                                                             */
/* ------------------------------------------------------------------ */

export const JOURNEY = [
  {
    year: '2020',
    title: 'Joined FynTune as a founding frontend engineer',
    note: 'One of three engineers building a digital insurance and employee benefits platform from the ground up.',
  },
  {
    year: '',
    title: 'Built the platform foundation',
    note: 'Delivered 80+ business modules — claims, policy administration, enrollment, wellness and hospital discovery.',
  },
  {
    year: '2021',
    title: 'First enterprise onboarding',
    note: 'Shipped the first client onto the platform and proved the multi-tenant model.',
  },
  {
    year: '',
    title: 'Configuration over customization',
    note: 'Designed the config-driven approach that let new clients onboard without forking the codebase.',
  },
  {
    year: '',
    title: 'Mobile launch',
    note: 'Led React Native employee apps to the Apple App Store and Google Play.',
  },
  {
    year: '2022',
    title: 'Travel Insurance in three months',
    note: 'Led a team of three to launch a new insurance line end to end — alongside Cyber and Travel offerings.',
  },
  {
    year: '2023',
    title: 'Promoted to Senior ReactJS Developer',
    note: 'Took ownership of frontend delivery, technical mentorship and product expansion for enterprise clients.',
  },
  {
    year: '',
    title: 'Scaled the team and the surface',
    note: 'Grew the team from 4 to 6; delivered 180+ modules across RFQ, plan management, E-Cashless claims, TPA and enrollment.',
  },
  {
    year: '2024',
    title: 'Modernized the stack',
    note: 'React 16 → React 18, dependency upgrades and React Router modernization.',
  },
  {
    year: '2026',
    title: 'Promoted to Sr. Lead Engineer — Frontend',
    note: 'Leading 9 React engineers across architecture, engineering standards and delivery execution.',
  },
  {
    year: '',
    title: 'Broker and insurer, separated',
    note: 'Split the two applications into independent repositories along clear architectural boundaries.',
  },
  {
    year: 'Now',
    title: 'Frontend architecture / system engineering',
    note: 'The direction the work keeps pulling toward — structure, boundaries and contracts at platform scale.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const EXPERIENCE_POINTS = [
  'Lead frontend engineering for a multi-tenant InsurTech platform serving 9M+ users across brokers, insurers, employers and employees.',
  'Own frontend architecture, technical strategy, engineering standards and delivery for 300+ business modules and 500+ routes spanning 12 insurance organizations.',
  'Manage and mentor a team of 9 React engineers — sprint planning, technical design, code quality, release management and engineering practices.',
  'Spearheaded insurer onboarding by separating broker and insurer applications into independent repositories along defined architectural boundaries.',
  'Led modernization initiatives: CRA → Vite migration, bundle optimization with lazy loading and React Suspense, image optimization, and automated testing adoption.',
  'Evolved the configuration-driven multi-tenant architecture so new brokers and insurers onboard with minimal custom development.',
  'Drove a React 16 → React 18 migration, dependency upgrades and React Router modernization across a large surface.',
  'Delivered 180+ business modules across RFQ and plan management, E-Cashless claim journeys, TPA portals, aviation insurance and flexible enrollment.',
  'As a founding engineer, delivered the first 80+ modules that became the foundation of the platform, plus the first enterprise client onboarding.',
  'Launched employee-facing React Native apps on the App Store and Google Play, and led a team of three to ship the Travel Insurance platform in three months.',
  'Integrated third-party services — payment gateways, wellness platforms and TPAs — to extend platform capabilities.',
  'Partner closely with product leaders, business stakeholders and enterprise clients (CEOs, CTOs and department heads) to translate complex insurance workflows into configurable solutions.',
  'Own delivery and stakeholder management for enterprise accounts — requirement analysis, production support and incident resolution.',
  'Contribute to organizational growth through technical interviewing, hiring, mentoring and career development of frontend engineers.',
] as const

/* ------------------------------------------------------------------ */
/* Tech ecosystem                                                      */
/* ------------------------------------------------------------------ */

export type StackItem = { name: string; note?: string; state?: 'core' | 'learning' }

export const STACK: { group: string; caption: string; items: StackItem[] }[] = [
  {
    group: 'Core',
    caption: 'The daily instruments',
    items: [
      { name: 'React', note: 'Primary environment since 2020' },
      { name: 'React Native', note: 'Production mobile applications' },
      { name: 'JavaScript', note: 'Deep, everyday fluency' },
      { name: 'TypeScript', note: 'Actively strengthening — used in earnest, not claimed as mastery', state: 'learning' },
      { name: 'Vite', note: 'Adopted through the CRA → Vite migration' },
    ],
  },
  {
    group: 'Architecture',
    caption: 'Where most decisions are made',
    items: [
      { name: 'Frontend Architecture' },
      { name: 'Design Systems' },
      { name: 'Modular Architecture' },
      { name: 'Multi-Tenant Applications' },
      { name: 'State Management' },
      { name: 'Routing' },
      { name: 'Permissions' },
    ],
  },
  {
    group: 'Performance',
    caption: 'Measured, then optimized',
    items: [
      { name: 'Code Splitting' },
      { name: 'Lazy Loading' },
      { name: 'React Suspense' },
      { name: 'Bundle Optimization' },
      { name: 'Image Optimization' },
      { name: 'Rendering Performance' },
    ],
  },
  {
    group: 'UI',
    caption: 'What users actually touch',
    items: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind' },
      { name: 'MUI' },
      { name: 'Bootstrap' },
      { name: 'Responsive Design' },
      { name: 'Accessibility' },
    ],
  },
  {
    group: 'Engineering',
    caption: 'How the work stays safe',
    items: [
      { name: 'Git' },
      { name: 'Testing' },
      { name: 'Code Review' },
      { name: 'CI/CD' },
      { name: 'API Integration' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Selected work                                                       */
/* ------------------------------------------------------------------ */

export type Project = {
  id: string
  index: string
  title: string
  subtitle: string
  kind: string
  problem: string
  solution: string
  stack: string[]
  challenge: string
  outcome: string
  href?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'ebp',
    index: '01',
    title: 'Employee Benefit Platform',
    subtitle: 'Large-scale InsurTech platform',
    kind: 'Product · Ongoing',
    problem:
      'Insurance organizations each need their own products, branding, permissions and rules — but maintaining separate frontends for every tenant does not scale in cost, quality or speed.',
    solution:
      'A multi-tenant React platform: tenant resolved at the shell, permissions read from the backend, business rules consumed as data, and 300+ feature modules composed into 500+ routes — with broker and insurer applications separated into independent repositories as it grew.',
    stack: ['React', 'JavaScript', 'Modular architecture', 'React Router', 'Vite', 'Testing'],
    challenge:
      'Keeping the system understandable as it grew — defining module boundaries, separating broker and insurer concerns, preventing tenant-specific conditionals from leaking everywhere, and holding performance steady across a route graph too large to load eagerly.',
    outcome:
      'Twelve organizations and 9M+ users served from one platform, now led by a team of nine engineers, with a structure that lets new products and workflows be assembled from existing modules instead of rebuilt.',
  },
  {
    id: 'rn',
    index: '02',
    title: 'React Native Applications',
    subtitle: 'Production mobile applications',
    kind: 'Mobile · Production',
    problem:
      'Product workflows needed to reach mobile without splitting the team or duplicating business logic across platforms.',
    solution:
      'React Native applications sharing React conventions, component thinking and API contracts with the web platform — so the same engineering habits apply on both surfaces.',
    stack: ['React Native', 'React', 'JavaScript', 'API integration'],
    challenge:
      'Platform differences: navigation, performance characteristics, release cadence and device behaviour all diverge from the web, while the product language must stay consistent.',
    outcome:
      'Employee-facing apps shipped to production on the Apple App Store and Google Play, with a shared mental model across web and mobile that kept the team able to move between surfaces.',
  },
  {
    id: 'salah',
    index: '03',
    title: 'Salah Mumbai',
    subtitle: 'Personal Android application',
    kind: 'Personal · Shipped',
    problem:
      'A personal need: reliable prayer times for Mumbai, with reminders, goal tracking and a history of one’s own observance — in a calm, focused interface.',
    solution:
      'An Android application covering prayer times, reminders, goals and prayer history, built and published as a personal product.',
    stack: ['Android', 'Mobile UI', 'Local data', 'Notifications'],
    challenge:
      'Designing for daily use: correct timing, dependable reminders and an interface that stays out of the way every single day.',
    outcome:
      'A shipped, usable personal application — live on the web.',
    href: 'https://salmanahmd.github.io/Salah-Mumbai/',
  },
]

/* ------------------------------------------------------------------ */
/* How I think                                                         */
/* ------------------------------------------------------------------ */

export const METHOD = [
  { step: 'Problem', body: 'Start from the actual constraint, not the requested feature.' },
  { step: 'Understand constraints', body: 'Data, team, time, existing system, what cannot move.' },
  { step: 'Model the system', body: 'Name the entities, boundaries and contracts before components.' },
  { step: 'Design architecture', body: 'Choose where complexity is allowed to live.' },
  { step: 'Build the smallest reliable solution', body: 'Enough to be real, simple enough to change.' },
  { step: 'Measure', body: 'Observe behaviour in production terms — not assumptions.' },
  { step: 'Optimize', body: 'Only where measurement says it matters.' },
  { step: 'Document', body: 'So the next person does not need me in the room.' },
] as const

/* ------------------------------------------------------------------ */
/* Focus / Notes                                                       */
/* ------------------------------------------------------------------ */

export const HORIZONS = [
  {
    horizon: 'Deepen',
    caption: 'Real depth in the tools I already rely on',
    items: [
      { area: 'TypeScript', note: 'From capable use to genuine depth across large codebases.' },
      { area: 'Testing', note: 'Coverage that protects workflows, not numbers that impress dashboards.' },
      { area: 'Accessibility', note: 'Built in as the interface is made, not audited for later.' },
      { area: 'Performance engineering', note: 'Treating Core Web Vitals as product requirements.' },
    ],
  },
  {
    horizon: 'Widen',
    caption: 'A wider frame around the component code',
    items: [
      { area: 'Next.js', note: 'Rendering strategies and the server/client boundary chosen deliberately.' },
      { area: 'Advanced frontend architecture', note: 'Boundaries, contracts and modularity at team scale.' },
      { area: 'Design systems', note: 'Systems that survive contact with multiple teams.' },
      { area: 'System design', note: 'Widening past the frontend when the problem asks for it.' },
    ],
  },
  {
    horizon: 'Amplify',
    caption: 'Levers that multiply the whole team',
    items: [
      { area: 'AI-assisted development', note: 'Using it seriously as an engineering multiplier, with judgement.' },
      { area: 'Developer tooling', note: 'Shortening feedback loops for everyone in the repo.' },
    ],
  },
] as const

export const NOTE_TOPICS = [
  'Frontend architecture',
  'React',
  'Performance',
  'JavaScript',
  'Engineering leadership',
  'AI-assisted development',
  'Lessons from large frontend systems',
] as const

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export type BlogPost = {
  slug: string
  title: string
  summary: string
  date: string
  readingTime: string
  tags: string[]
  body: string[]
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export const POSTS: BlogPost[] = [
  {
    slug: 'leading-a-team-of-nine',
    title: 'What leading nine frontend engineers actually changes',
    summary:
      'The jump from senior engineer to lead is not more code — it is fewer decisions made alone and more decisions made explicit so nine people can act on them.',
    date: '2026-10-01',
    readingTime: '4 min read',
    tags: ['Engineering leadership', 'Architecture'],
    body: [
      'For a long time the job was to be the person with the answer. As a lead, that instinct becomes a bottleneck. Nine engineers cannot wait on one head, and they should not have to.',
      'What replaces it is written-down intent: clear module boundaries, documented conventions, and a shared definition of what good looks like. The decisions do not get less numerous — they get less personal.',
      'The work shifts to unblocking: reviewing the design before the code, making sure the risky change has a reviewer who understands it, and protecting the delivery cadence from the thousand small things that would otherwise stall it.',
      'I still write code, and I think a lead should. But the highest-leverage thing I do now is remove ambiguity, because ambiguity is what makes a team slow and a codebase drift.',
    ],
  },
  {
    slug: 'where-complexity-lives',
    title: 'Frontend architecture is a decision about where complexity lives',
    summary:
      'You cannot remove complexity from a system — you can only choose where it is allowed to live. Most architecture debates are really arguments about that placement.',
    date: '2026-08-14',
    readingTime: '4 min read',
    tags: ['Frontend architecture', 'Systems'],
    body: [
      'Every frontend starts simple and every frontend that survives gets complicated. The question is never whether complexity appears — it is where you let it settle. Put it in the component tree and it spreads across every screen that touches the feature. Put it in a contract, a module boundary or a permission engine and it stays in one place long enough to reason about.',
      'I stopped judging architecture by how clever the abstractions are and started judging it by how far a change has to travel. When a pricing rule changes and the fix belongs to the backend, that is a good boundary. When the same change leaks into a dozen components because each one re-derived the rule, the placement was wrong.',
      'This is why I care about thin shells, narrow module surfaces and backend-driven configuration. None of them are exciting. All of them are about deciding, deliberately, which layer is allowed to be complicated — so the rest of the system can stay boring.',
      'Boring is underrated. A codebase that 300 modules and many hands can keep changing is worth more than an elegant one nobody dares touch.',
    ],
  },
  {
    slug: 'separating-broker-and-insurer-surfaces',
    title: 'When one app becomes two: separating broker and insurer surfaces',
    summary:
      'Splitting a monolithic frontend into independent repositories is less about tooling and more about deciding which boundaries are real.',
    date: '2026-07-10',
    readingTime: '4 min read',
    tags: ['Architecture', 'Multi-tenant'],
    body: [
      'The platform had grown to serve two very different users — brokers selling and administering, and insurers underwriting — inside one application. It worked, but every change carried the weight of both.',
      'The split only made sense once the boundary was named: what is genuinely shared, and what only one side needs. Without that, moving code into a new repository simply relocates the coupling.',
      'Independent repositories bought us clearer ownership, independent release rhythms and a much easier path to onboarding a new insurer partner. They also cost us: the shared layer has to be versioned and treated as a real dependency, not a folder everyone edits.',
      'The lesson is that a repository split is an architectural decision that happens to use tooling. Get the boundary wrong and two repositories are worse than one.',
    ],
  },
  {
    slug: 'splitting-500-routes',
    title: 'Splitting a 500-route application without breaking navigation',
    summary:
      'Route-level code splitting sounds like a build setting. In a large app it is a navigation design problem — what loads eagerly, what waits, and what the user sees in between.',
    date: '2026-06-02',
    readingTime: '5 min read',
    tags: ['Performance', 'React', 'Routing'],
    body: [
      'A 500-route application cannot be loaded eagerly, and it cannot be split by gut feeling either. The goal is not the smallest possible bundle — it is the smallest bundle that still feels instant for the workflow the user is actually in.',
      'I split along ownership lines rather than file size. A feature module loads with its own routes, its own data and its own permissions so the boundary is meaningful. Shared primitives, the design system and the shell stay eager because almost every screen needs them and a waterfall there is a tax on everything.',
      'The part people underestimate is the loading experience. A lazy route that flashes a spinner for 40ms is worse than no spinner at all; a route that fetches before it renders is worse than one that renders a skeleton. Splitting is only an optimization if the seams are invisible.',
      'Measure first, split second. On a route graph this size, the wins come from understanding the navigation graph, not from applying a pattern everywhere because it is correct in principle.',
    ],
  },
  {
    slug: 'react-16-to-18-migration',
    title: 'Migrating React 16 to 18 on a codebase you cannot pause',
    summary:
      'A framework migration at scale is less about the new APIs and more about sequencing, observability and not freezing the product roadmap.',
    date: '2026-05-12',
    readingTime: '5 min read',
    tags: ['React', 'Performance'],
    body: [
      'Nobody stops shipping so you can upgrade React. The migration has to happen underneath a running product, which turns it into a sequencing problem before it is a technical one.',
      'We went in stages: dependencies first, then React, then the React Router modernization the new version made worth doing. Each stage had to be independently safe to ship.',
      'The hazards are rarely in the components you remember. They hide in dependencies that pin old versions, in code leaning on legacy behaviour, and in the parts of the app nobody has opened in years. Those are what the plan has to account for.',
      'A migration is done when the team stops thinking about it. That means doing the unglamorous cleanup too — otherwise you have simply carried the old assumptions forward.',
    ],
  },
  {
    slug: 'configuration-over-customization',
    title: 'Configuration over customization: onboarding clients without forking',
    summary:
      'The tempting answer to “one client needs a small change” is a conditional. The sustainable answer is usually configuration — and the difference compounds.',
    date: '2026-05-01',
    readingTime: '4 min read',
    tags: ['Multi-tenant', 'Architecture'],
    body: [
      'Every enterprise client asks for something the platform does not do yet. The fast answer is a branch for that client. The fast answer is also how a single codebase quietly becomes twelve.',
      'Configuration flips the default: instead of writing behaviour for one client, you model the axis of variation and let the client set a value. Products, branding, permissions, rules and workflows all became data the interface reads.',
      'This is harder up front. It forces you to name the abstraction and accept that not every request is truly unique. But it means onboarding the next client is a task, not a project.',
      'The question I ask now is simple: is this a new capability, or a new value for an existing one? If it is the latter, it belongs in configuration.',
    ],
  },
  {
    slug: 'one-frontend-twelve-tenants',
    title: 'One frontend, twelve tenants — what multi-tenancy actually costs',
    summary:
      'Twelve organizations on a single codebase sounds like a scaling win. It is also a permanent constraint on where tenant-specific behaviour is allowed to exist.',
    date: '2026-04-19',
    readingTime: '4 min read',
    tags: ['Multi-tenant', 'Architecture'],
    body: [
      'The pitch for multi-tenancy is simple: one codebase, less duplication, faster delivery. The cost is that every tenant-specific need is a temptation to add one more conditional, and a thousand small conditionals are indistinguishable from a fork.',
      'The discipline is to resolve tenant identity once, at the shell, and let everything downstream read from that resolved context. Branding, product catalogue, feature flags and permissions all become data the interface consumes — not branches scattered through components.',
      'When someone asks for "just a small difference for one client", the honest answer is usually that the difference belongs in configuration, not code. Configuration scales. Conditionals do not.',
      'Twelve tenants from one codebase is a real win, but only if the boundary is defended every week. Multi-tenancy is not a feature you ship; it is a constraint you keep.',
    ],
  },
  {
    slug: 'shipping-react-native-to-both-stores',
    title: 'Shipping React Native apps to both stores as a web team',
    summary:
      'Reaching mobile without a separate mobile team means leaning on the conventions you already have — and respecting the places where the platform will not let you.',
    date: '2026-03-08',
    readingTime: '4 min read',
    tags: ['React Native', 'Mobile'],
    body: [
      'We did not build a mobile team; we extended the one we had. React Native made that possible because the mental model — components, state, API contracts — carried over from the web.',
      'What does not carry over is everything below the component: navigation, performance characteristics, release cadence and device behaviour. A web team has to learn these rather than assume them.',
      'The payoff is real. The same engineers could move between surfaces, and product language stayed consistent because it came from the same people and the same contracts.',
      'Shipping to the App Store and Google Play also taught the team a discipline the web rarely enforces: a release is a moment you prepare for, not something that simply happens when you merge.',
    ],
  },
]
