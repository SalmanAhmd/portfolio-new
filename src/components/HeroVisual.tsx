import { useState } from 'react'
import { HERO_LAYERS } from '../data/content'
import { usePointer, usePrefersReducedMotion } from '../hooks'

const W = 400
const H = 470
const RECT_X = 28
const RECT_W = 344
const LAYER_H = 58
const GAP = 44
const SPINE_X = 56

export default function HeroVisual() {
  const [ref, rawPos] = usePointer<HTMLDivElement>()
  const [hovering, setHovering] = useState(false)
  const reduced = usePrefersReducedMotion()
  const pos = reduced ? { x: 0, y: 0 } : rawPos

  const activeIndex = Math.min(
    HERO_LAYERS.length - 1,
    Math.max(0, Math.floor(((pos.y + 1) / 2) * HERO_LAYERS.length)),
  )

  const yOf = (i: number) => i * (LAYER_H + GAP)

  return (
    <div
      ref={ref}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className="group relative overflow-hidden rounded-2xl border border-line-dark bg-panel p-5 sm:p-7"
      style={{ boxShadow: '0 30px 60px -40px rgba(11,11,13,0.55)' }}
    >
      {/* technical grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* cursor light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(340px circle at ${((pos.x + 1) / 2) * 100}% ${
            ((pos.y + 1) / 2) * 100
          }%, rgba(212,84,30,0.16), transparent 65%)`,
        }}
      />

      <div className="relative mb-5 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-label text-white/55">
          fig. 01 — application topology
        </span>
        <span className="flex items-center gap-1.5" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-label text-white/55">live</span>
        </span>
      </div>

      <div
        className="relative transition-transform duration-500 ease-out-expo will-change-transform"
        style={{
          transform: `perspective(1100px) rotateX(${pos.y * -4.5}deg) rotateY(${
            pos.x * 6
          }deg) translate3d(${pos.x * 6}px, ${pos.y * 5}px, 0)`,
        }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Architecture stack: React, application architecture, modules, state, API and permissions, then users."
          className="w-full"
        >
          <defs>
            <marker id="arrow" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M1 1 L6 4 L1 7" fill="none" stroke="#4A4A55" strokeWidth="1.4" strokeLinecap="round" />
            </marker>
          </defs>

          {HERO_LAYERS.slice(0, -1).map((layer, i) => {
            const y1 = yOf(i) + LAYER_H
            const y2 = yOf(i + 1)
            return (
              <g key={`link-${layer.id}`}>
                <line
                  x1={SPINE_X}
                  y1={y1}
                  x2={SPINE_X}
                  y2={y2 - 6}
                  stroke="#2C2C33"
                  strokeWidth="1.5"
                  markerEnd="url(#arrow)"
                />
                <line
                  x1={SPINE_X}
                  y1={y1}
                  x2={SPINE_X}
                  y2={y2 - 6}
                  stroke="#D4541E"
                  strokeWidth="1.5"
                  strokeDasharray="5 11"
                  className="animate-line-flow"
                  style={{ animationDelay: `${i * 0.35}s`, opacity: hovering ? 0.9 : 0.45 }}
                />
              </g>
            )
          })}

          {HERO_LAYERS.map((layer, i) => {
            const y = yOf(i)
            const active = hovering && activeIndex === i
            return (
              <g
                key={layer.id}
                style={{
                  transition: 'opacity 400ms ease',
                  opacity: hovering && !active ? 0.62 : 1,
                }}
              >
                <rect
                  x={RECT_X}
                  y={y}
                  width={RECT_W}
                  height={LAYER_H}
                  rx="9"
                  fill={active ? '#17171B' : '#121215'}
                  stroke={active ? 'rgba(212,84,30,0.65)' : '#26262B'}
                  strokeWidth="1"
                  style={{ transition: 'all 350ms cubic-bezier(0.16,1,0.3,1)' }}
                />
                <rect
                  x={RECT_X}
                  y={y}
                  width={active ? 3 : 0}
                  height={LAYER_H}
                  fill="#D4541E"
                  style={{ transition: 'all 350ms cubic-bezier(0.16,1,0.3,1)' }}
                />
                <circle
                  cx={SPINE_X}
                  cy={y + LAYER_H / 2}
                  r={active ? 4 : 3}
                  fill={active ? '#D4541E' : '#4A4A55'}
                  style={{ transition: 'all 350ms cubic-bezier(0.16,1,0.3,1)' }}
                />
                <text
                  x={SPINE_X + 24}
                  y={y + LAYER_H / 2 - 3}
                  fill={active ? '#FFFFFF' : '#E4E4DE'}
                  fontSize="14.5"
                  fontWeight="500"
                  style={{ fontFamily: 'Inter, sans-serif', transition: 'fill 350ms ease' }}
                >
                  {layer.label}
                </text>
                <text
                  x={SPINE_X + 24}
                  y={y + LAYER_H / 2 + 15}
                  fill={active ? 'rgba(212,84,30,0.9)' : '#6C6C78'}
                  fontSize="10"
                  style={{ fontFamily: '"JetBrains Mono", monospace', transition: 'fill 350ms ease' }}
                >
                  {layer.meta}
                </text>
                <text
                  x={RECT_X + RECT_W - 16}
                  y={y + LAYER_H / 2 + 4}
                  fill="#3E3E48"
                  fontSize="10"
                  textAnchor="end"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                >
                  {`0${i + 1}`}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <p className="relative mt-5 font-mono text-[10px] uppercase tracking-label text-white/55">
        hover to inspect layers
      </p>
    </div>
  )
}
