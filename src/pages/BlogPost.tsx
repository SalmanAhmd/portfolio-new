import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { POSTS, PROFILE } from '../data/content'
import { useDocumentTitle } from '../hooks'
import { formatDate } from './Blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = POSTS.find((item) => item.slug === slug)

  useDocumentTitle(
    post ? `${post.title} — ${PROFILE.name}` : `Note not found — ${PROFILE.name}`,
  )

  if (!post) {
    return (
      <div className="section pt-[calc(var(--nav-h)+56px)]">
        <div className="container-page">
          <Reveal className="section-index">
            <span className="tabular text-accent-deep">404</span>
            <span>Notes</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="headline-lg max-w-3xl">This note doesn’t exist.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mt-6 max-w-2xl">
              The article you’re looking for may have been moved or was never published.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              to="/blog"
              className="link-underline mt-10 inline-flex min-h-8 items-center gap-1.5 py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
            >
              <span aria-hidden>←</span> All notes
            </Link>
          </Reveal>
        </div>
      </div>
    )
  }

  return (
    <article className="section pt-[calc(var(--nav-h)+56px)]">
      <div className="container-page">
        <Reveal>
          <Link
            to="/blog"
            className="link-underline inline-flex min-h-8 items-center gap-1.5 py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
          >
            <span aria-hidden>←</span> All notes
          </Link>
        </Reveal>

        <header className="mt-10 max-w-3xl">
          <Reveal>
            <p className="label">
              {formatDate(post.date)} · {post.readingTime}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="headline-lg mt-5">{post.title}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mt-6">{post.summary}</p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="mt-7 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li key={tag} className="code-chip">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </header>

        <div className="mt-12 border-t border-line pt-10">
          <div className="max-w-2xl space-y-6">
            {post.body.map((paragraph, i) => (
              <Reveal key={i} delay={Math.min(i * 60, 240)}>
                <p className="text-[17px] leading-relaxed text-ink-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-8">
          <Link
            to="/blog"
            className="link-underline inline-flex min-h-8 items-center gap-1.5 py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
          >
            <span aria-hidden>←</span> All notes
          </Link>
          <span aria-hidden className="hidden h-3 w-px bg-line-strong sm:block" />
          <Link
            to="/#contact"
            className="link-underline inline-flex min-h-8 items-center gap-1.5 py-1.5 font-mono text-[11.5px] uppercase tracking-label text-ink-muted hover:text-ink"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
