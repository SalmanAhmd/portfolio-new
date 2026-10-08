import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { PROJECTS, type Project } from '../data/content'

function ProjectRow({ project, defaultOpen }: { project: Project; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const content = contentRef.current
    const inner = innerRef.current
    if (!content || !inner) return

    const height = open ? inner.scrollHeight : 0
    content.style.height = `${height}px`

    if (!open) {
      const onEnd = () => {
        if (!open) content.style.height = '0px'
      }
      content.addEventListener('transitionend', onEnd)
      return () => content.removeEventListener('transitionend', onEnd)
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      const content = contentRef.current
      const inner = innerRef.current
      if (content && inner && open) content.style.height = `${inner.scrollHeight}px`
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  const fields: { term: string; value: string }[] = [
    { term: 'Problem', value: project.problem },
    { term: 'Solution', value: project.solution },
    { term: 'Engineering challenge', value: project.challenge },
    { term: 'Outcome', value: project.outcome },
  ]

  return (
    <Reveal as="li" className="group border-t border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`project-${project.id}`}
          className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-7 text-left transition-colors duration-300 hover:bg-paper-raised sm:gap-6 sm:py-8"
        >
          <span className="label tabular pt-1.5 text-ink-faint transition-colors group-hover:text-accent-deep">
            {project.index}
          </span>

          <span className="min-w-0">
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-xl font-medium tracking-tightest sm:text-2xl">
                {project.title}
              </span>
              <span className="text-[15px] text-ink-muted">— {project.subtitle}</span>
            </span>
            <span className="label mt-2 block">{project.kind}</span>
            {!open ? (
              <span className="mt-3 block max-w-2xl text-[15px] leading-relaxed text-ink-muted sm:hidden">
                {project.problem}
              </span>
            ) : null}
          </span>

          <span
            aria-hidden
            className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong transition-all duration-300 ease-out-expo ${
              open ? 'rotate-45 border-ink bg-ink text-paper' : 'group-hover:border-ink'
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={`project-${project.id}`}
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-500 ease-out-expo"
        style={{ height: defaultOpen ? 'auto' : 0 }}
      >
        <div ref={innerRef} className="pb-9">
          <div className="grid gap-8 border-t border-line pt-7 md:grid-cols-12">
            <div className="md:col-span-7">
              <dl className="space-y-6">
                {fields.map((field) => (
                  <div key={field.term} className="grid gap-1.5 sm:grid-cols-[150px_1fr] sm:gap-6">
                    <dt className="label pt-1">{field.term}</dt>
                    <dd className="text-[15.5px] leading-relaxed text-ink-muted">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-xl border border-line bg-paper-raised p-6">
                <p className="label">Technology</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="code-chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-5">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex min-h-8 items-center gap-1.5 py-1.5 text-sm font-medium text-accent-deep"
                    >
                      View project
                      <span aria-hidden className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                        ↗
                      </span>
                    </a>
                  ) : project.id === 'ebp' ? (
                    <a href="#case-study" className="group/link inline-flex min-h-8 items-center gap-1.5 py-1.5 text-sm font-medium text-ink">
                      Read the full case study
                      <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                        ↑
                      </span>
                    </a>
                  ) : (
                    <p className="text-sm text-ink-faint">In production.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Work() {
  return (
    <section id="work" className="section border-t border-line" aria-labelledby="work-title">
      <div className="container-page">
        <SectionHeading
          index="03"
          label="Selected work"
          title={<span id="work-title">Things I have actually built and shipped.</span>}
          intro="Three pieces of work that represent how I operate — a platform at scale, production mobile applications, and a personal product I designed and shipped on my own."
        />

        <ul className="border-b border-line">
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.id} project={project} defaultOpen={i === 0} />
          ))}
        </ul>
      </div>
    </section>
  )
}
