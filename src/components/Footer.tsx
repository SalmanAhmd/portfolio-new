import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[15px] font-medium tracking-tight">{PROFILE.name}</p>
          <p className="label mt-1.5">
            {PROFILE.role} · {PROFILE.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex min-h-8 items-center py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex min-h-8 items-center py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-underline inline-flex min-h-8 items-center py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
          >
            Email
          </a>
          <a
            href="#top"
            className="link-underline inline-flex min-h-8 items-center py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
          >
            Back to top ↑
          </a>
        </div>

        <p className="label normal-case tracking-normal text-ink-faint">
          © {new Date().getFullYear()} · Built with React &amp; Vite
        </p>
      </div>
    </footer>
  )
}
