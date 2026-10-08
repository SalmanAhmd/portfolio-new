export const PROFILE = {
  name: 'Salman Ahmed Ansari',
  role: 'Senior Lead Frontend Developer',
  location: 'Mumbai, India',
  experience: '6+ years building production software',
  email: 'developer.salmanahmed@gmail.com',
  github: 'https://github.com/salmanahmd',
  linkedin: 'https://www.linkedin.com/in/ansari-salman/',
  company: 'Fyntune Solutions',
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
    value: 450,
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
      'Business workflows live here: enrollment, claims, benefits, admin tooling. Each module exposes a narrow surface and declares its own dependencies, which is what keeps a 450+ route application navigable for the team building it.',
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
    body: 'One application serving twelve organizations: tenant identity resolved at the shell, expressed through configuration and theming rather than forked codebases.',
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
    body: '450+ routes organized around feature ownership, with route-level code splitting and a loading strategy that keeps first paint small.',
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
    title: 'Build modernization: CRA → Vite',
    body: 'Migrated the application from Create React App to Vite — reworking configuration, environment handling and build scripts to cut developer feedback loops and modernize the toolchain.',
  },
  {
    title: 'Testing & engineering practice',
    body: 'Testing introduced where it protects critical workflows, paired with code review discipline and CI checks so refactors on a large codebase stay safe.',
  },
] as const

/* ------------------------------------------------------------------ */
/* Journey                                                             */
/* ------------------------------------------------------------------ */

export const JOURNEY = [
  { year: '2020', title: 'Joined Fyntune', note: 'React development on insurance products' },
  { year: '', title: 'Employee Benefit platform', note: 'From feature work to owning a product surface' },
  { year: '', title: 'Large-scale module development', note: '300+ modules, 450+ routes' },
  { year: '', title: 'Frontend architecture', note: 'Structure, boundaries, contracts' },
  { year: '', title: 'Team leadership', note: 'Reviews, mentoring, direction' },
  { year: '', title: 'CRA → Vite migration', note: 'Modernized the build toolchain' },
  { year: '', title: 'Performance optimization', note: 'Splitting, lazy loading, image and render cost' },
  { year: '', title: 'Testing & engineering practices', note: 'Safety nets for a large codebase' },
  { year: 'Now', title: 'Frontend architecture / system engineering', note: 'The direction the work keeps pulling toward' },
] as const

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const EXPERIENCE_POINTS = [
  'Built and scaled the frontend of a multi-tenant employee benefits platform serving large insurance organizations.',
  'Led frontend development — direction, structure and code review across a growing team.',
  'Architected reusable feature modules and shared component systems that new workflows are assembled from.',
  'Worked across React and React Native applications in production.',
  'Designed for complex business workflows where rules, permissions and conditional UI change frequently.',
  'Led modernization initiatives, including the CRA → Vite build migration.',
  'Improved performance through code splitting, lazy loading, image optimization and render-cost review.',
  'Introduced testing and engineering practices suited to a large, fast-moving codebase.',
  'Mentored developers and raised the standard of day-to-day code review.',
  'Collaborated closely with backend, product and design teams — frontend as a partner in product decisions, not an output stage.',
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
      'A single multi-tenant React application: tenant resolved at the shell, permissions read from the backend, business rules consumed as data, and 300+ feature modules composed into 450+ routes.',
    stack: ['React', 'JavaScript', 'Modular architecture', 'Vite', 'Testing'],
    challenge:
      'Keeping the system understandable as it grew — defining module boundaries, preventing tenant-specific conditionals from leaking everywhere, and holding performance steady across a route graph too large to load eagerly.',
    outcome:
      'Twelve organizations served from one codebase, with a structure that lets new products and workflows be assembled from existing modules instead of rebuilt.',
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
      'Shipped mobile applications in production with a shared mental model across web and mobile, keeping the team able to move between surfaces.',
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
