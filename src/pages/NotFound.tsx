import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { PROFILE } from '../data/content'
import { useDocumentTitle } from '../hooks'

export default function NotFound() {
  useDocumentTitle(`Page not found — ${PROFILE.name}`)

  return (
    <div className="section pt-[calc(var(--nav-h)+56px)]">
      <div className="container-page">
        <Reveal className="section-index">
          <span className="tabular text-accent-deep">404</span>
          <span>Not found</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="headline-lg max-w-3xl">This page doesn’t exist.</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg mt-6 max-w-2xl">
            The link may be broken or the page may have moved.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <Link to="/" className="btn-solid group mt-10">
            Back to portfolio
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
