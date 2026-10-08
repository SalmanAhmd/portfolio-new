import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { NOTE_TOPICS } from '../data/content'

export default function Notes() {
  return (
    <section id="notes" className="section border-t border-line" aria-labelledby="notes-title">
      <div className="container-page">
        <SectionHeading
          index="09"
          label="Notes"
          title={<span id="notes-title">Writing, when it’s worth writing.</span>}
          intro="Short pieces on the things I keep re-explaining to teams — architecture decisions, performance trade-offs and lessons from a codebase that got big."
        />

        <Reveal>
          <div className="grid gap-8 border-y border-line py-10 sm:grid-cols-12 sm:gap-10">
            <div className="sm:col-span-5">
              <div className="rounded-xl border border-dashed border-line-strong bg-paper-raised/60 p-6">
                <div className="flex items-center justify-between">
                  <span className="label">Status</span>
                  <span className="flex items-center gap-2">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                    <span className="font-mono text-[11px] uppercase tracking-label text-accent-deep">
                      Drafting
                    </span>
                  </span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
                  No published articles yet. Rather than fill this section with placeholder posts,
                  I’m leaving it honest: the first notes will appear here.
                </p>
                <p className="label mt-6">Coming soon</p>
              </div>
            </div>

            <div className="sm:col-span-7">
              <p className="label mb-4">Topics in progress</p>
              <ul className="flex flex-wrap gap-2">
                {NOTE_TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-md border border-line bg-paper-sunk px-3 py-1.5 font-mono text-[11.5px] text-ink-muted"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4 opacity-50">
                    <span className="h-px flex-1 bg-line" />
                    <span className="label">untitled</span>
                    <span className="h-8 w-24 rounded border border-dashed border-line-strong" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
