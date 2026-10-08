import Reveal from './Reveal'

type Props = {
  index: string
  label: string
  title: React.ReactNode
  intro?: string
  align?: 'left'
}

export default function SectionHeading({ index, label, title, intro }: Props) {
  return (
    <header className="section-head">
      <Reveal className="section-index">
        <span className="tabular text-accent-deep">{index}</span>
        <span>{label}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="headline-lg max-w-3xl">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={160}>
          <p className="body-lg mt-6 max-w-2xl">{intro}</p>
        </Reveal>
      ) : null}
    </header>
  )
}
