'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clipboard,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Terminal,
  X,
} from 'lucide-react'

const skills = {
  Languages: ['C', 'C++', 'C#', 'Python', 'TypeScript', 'JavaScript', 'Go', 'x86 Assembly', 'SQL', 'Rust'],
  Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Radix UI', 'shadcn/ui', 'HTML5/CSS3'],
  'Systems & Backend': ['REST APIs', 'Server-Sent Events', 'WebSockets', 'Multithreading', 'Concurrency', 'Linux/Bash'],
  'Developer Tools': ['Git', 'GitHub', 'Cursor', 'Vercel', 'Node.js', 'npm/pnpm', 'VS Code'],
}

const projects = [
  {
    number: '01', title: 'CollabRoom', category: 'FULL-STACK · REAL-TIME', icon: Globe2, description: 'A collaborative browser IDE built for teams that want to think, edit, and ship together.',
    bullets: ['Multi-client document editing and live cursor tracking with SSE and BroadcastChannel.', 'Asynchronous /api/run pipeline for Python, JavaScript, and C++ with execution timeouts.', 'Virtual workspace persistence, syntax auto-detection, and project downloads.'],
    tags: ['TypeScript', 'Next.js', 'SSE', 'REST APIs'], demo: 'https://collabroom-one.vercel.app', source: 'https://github.com/KIYIM/collabroom', accent: 'emerald',
  },
  {
    number: '02', title: 'TitanKV', category: 'SYSTEMS · STORAGE', icon: Database, description: 'An in-memory key-value engine designed to make storage mechanics measurable and understandable.',
    bullets: ['GET, SET, DEL, and SCAN queries with microsecond-level execution profiling.', 'Write-Ahead Logging for sequential mutation persistence and crash-recovery simulation.', 'Live dashboard for throughput, memory allocation, and p99 latency metrics.'],
    tags: ['C++', 'TypeScript', 'WAL', 'Data Structures'], source: 'https://github.com/KIYIM/titankv', accent: 'sky',
  },
  {
    number: '03', title: 'SentinelSec', category: 'SECURITY · STATIC ANALYSIS', icon: Cpu, description: 'A security analyzer that turns codebase risk into actionable, structured audit output.',
    bullets: ['Detects dependency vulnerabilities, misconfigurations, and OWASP Top 10 risks.', 'AST rule-matching engines generate JSON audit logs with remediation guidance.', 'CLI triggers automate pre-commit security audits inside CI/CD pipelines.'],
    tags: ['Go', 'Python', 'AST', 'OWASP Top 10'], source: 'https://github.com/KIYIM/SentinelSec-Security-Analyzer', accent: 'violet',
  },
]

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return <div className="mb-10 flex items-center gap-4"><span className="font-mono text-xs text-emerald-400">{index}</span><span className="h-px w-10 bg-emerald-400/40" /><h2 className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">{children}</h2></div>
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function SocialLinks() {
  return <div className="flex items-center gap-2"><a href="https://github.com/KIYIM" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link"><GitHubIcon /></a><a href="https://www.linkedin.com/in/onder-ay" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link"><LinkedInIcon /></a><a href="mailto:ayonder.m@gmail.com" aria-label="Email" className="icon-link"><Mail /></a></div>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"><a href="#top" className="font-mono text-sm font-bold tracking-tight text-zinc-100"><span className="text-emerald-400">~/</span>onder-ay</a><button className="text-zinc-400 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><nav className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-5 border-b border-zinc-800 bg-zinc-950 px-6 py-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#skills" onClick={() => setOpen(false)}>Skills</a><a href="#projects" onClick={() => setOpen(false)}>Projects</a><a href="#experience" onClick={() => setOpen(false)}>Experience</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={() => setOpen(false)}><Download /> Resume PDF</a></nav></div></header>
}

function Hero() {
  return <section id="about" className="hero-grid mx-auto max-w-6xl px-6 pb-28 pt-40"><div className="max-w-3xl"><div className="status-badge"><span className="status-dot" /> Available for Summer 2027 SWE &amp; Systems Internships</div><p className="mt-9 font-mono text-sm text-zinc-500">Hello, I&apos;m</p><h1 className="mt-2 text-6xl font-semibold tracking-[-0.06em] text-zinc-100 sm:text-8xl">Onder <span className="text-emerald-400">Ay</span><span className="text-zinc-700">.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">Computer Science student at Dakota State University building <span className="text-zinc-200">low-latency systems</span>, developer infrastructure, and real-time collaborative tools.</p><p className="mt-5 max-w-xl leading-7 text-zinc-500">Driven by understanding low-level computing mechanics, clean architecture, and practical engineering.</p><div className="mt-10 flex flex-wrap items-center gap-3"><a className="primary-btn" href="#projects">View Projects <ArrowUpRight /></a><a className="secondary-btn" href="#contact">Contact Me <ChevronRight /></a><SocialLinks /></div></div><div className="hero-terminal mt-20 max-w-sm justify-self-end lg:mt-14"><div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3"><span className="size-2 rounded-full bg-red-400/70" /><span className="size-2 rounded-full bg-yellow-400/70" /><span className="size-2 rounded-full bg-green-400/70" /><span className="ml-auto font-mono text-[10px] text-zinc-600">onder@portfolio ~</span></div><div className="p-5 font-mono text-xs leading-7 text-zinc-500"><p><span className="text-emerald-400">$</span> whoami</p><p className="pl-4 text-zinc-300">systems + full-stack engineer</p><p className="mt-2"><span className="text-emerald-400">$</span> cat ./focus.txt</p><p className="pl-4 text-zinc-300">performance, clarity, craft</p><p className="mt-2"><span className="text-emerald-400">$</span> <span className="cursor" /></p></div></div></section>
}

function Skills() { return <section id="skills" className="section-border mx-auto max-w-6xl px-6 py-24"><SectionLabel index="01">Technical toolkit</SectionLabel><div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2">{Object.entries(skills).map(([name, items]) => <div key={name} className="bg-zinc-950 p-6"><h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-emerald-400">{name}</h3><div className="flex flex-wrap gap-2">{items.map(item => <span key={item} className="skill-pill">{item}</span>)}</div></div>)}</div><div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-6"><h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-400">Spoken languages</h3><div className="flex flex-wrap gap-2"><span className="skill-pill">Turkish · Native</span><span className="skill-pill">English · Fluent / C2</span></div></div></section> }

function Projects() { return <section id="projects" className="section-border mx-auto max-w-6xl px-6 py-24"><SectionLabel index="02">Selected work</SectionLabel><div className="grid gap-5 lg:grid-cols-3">{projects.map(project => { const Icon = project.icon; return <article key={project.title} className={`project-card accent-${project.accent}`}><div className="flex items-start justify-between"><span className="font-mono text-xs text-zinc-600">{project.number}</span><Icon className="text-zinc-600" /></div><p className="mt-12 font-mono text-[10px] tracking-[0.18em] text-emerald-400">{project.category}</p><h3 className="mt-3 text-2xl font-medium text-zinc-100">{project.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-zinc-500">{project.description}</p><ul className="mt-7 flex flex-col gap-3 border-t border-zinc-800 pt-6">{project.bullets.map(bullet => <li key={bullet} className="flex gap-2 text-sm leading-6 text-zinc-400"><span className="mt-2 size-1 shrink-0 rounded-full bg-emerald-400" />{bullet}</li>)}</ul><div className="mt-7 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div><div className="mt-8 flex gap-5 border-t border-zinc-800 pt-5">{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo <ExternalLink /></a>}<a href={project.source} target="_blank" rel="noopener noreferrer" className="project-link">Source Code <Code2 /></a></div></article> })}</div></section> }

function Experience() { return <section id="experience" className="section-border mx-auto max-w-6xl px-6 py-24"><SectionLabel index="03">Experience &amp; education</SectionLabel><div className="max-w-3xl">{[['2025 — 2029', 'Dakota State University', 'B.S. Computer Science', 'Madison, SD'], ['2026 — Present', 'Madison Community Center', 'Front Desk Representative', 'Madison, SD'], ['2025 — 2026', 'Sodexo · DSU Dining', 'Food Service Associate', 'Madison, SD']].map(([date, company, role, place], index) => <div key={company} className="timeline-item"><div className="timeline-dot" /><p className="font-mono text-xs text-emerald-400">{date}</p><div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 className="text-xl text-zinc-100">{company}</h3><span className="text-sm text-zinc-500">{role}</span></div><p className="mt-2 text-sm text-zinc-600"><MapPin className="mr-1 inline size-3" />{place}</p>{index > 0 && <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">{index === 1 ? 'Manage daily reception operations, facility access control, registrations, reservations, and member inquiries for a high-traffic community facility.' : 'Execute high-volume POS transactions with accuracy while supporting kitchen prep, restocking, sanitation, and dynamic shift teams.'}</p>}</div>)}</div></section> }

function Contact() { const [copied, setCopied] = useState(false); const copy = async () => { await navigator.clipboard.writeText('ayonder.m@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1800) }; return <section id="contact" className="mx-auto max-w-6xl px-6 py-24"><div className="contact-card"><div><SectionLabel index="04">Open channel</SectionLabel><h2 className="max-w-lg text-4xl font-medium tracking-tight text-zinc-100 sm:text-5xl">Let&apos;s build something <span className="text-emerald-400">useful.</span></h2><p className="mt-5 max-w-md leading-7 text-zinc-500">Have a systems problem, a product idea, or an opportunity? I&apos;d like to hear about it.</p></div><div className="flex flex-col gap-4 text-sm"><button onClick={copy} className="contact-row text-left"><Mail /><span>{copied ? 'Copied to clipboard' : 'ayonder.m@gmail.com'}</span>{copied ? <Check className="ml-auto text-emerald-400" /> : <Clipboard className="ml-auto text-zinc-600" />}</button><a className="contact-row" href="tel:+16052707469"><Phone /><span>(605) 270-7469</span></a><div className="contact-row"><MapPin /><span>Madison, South Dakota</span></div></div></div><footer className="mt-24 flex flex-col gap-3 border-t border-zinc-800 pt-6 font-mono text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Onder Ay</span><span>Designed with Next.js &amp; Tailwind CSS</span></footer></section> }

export default function Portfolio() { return <div id="top" className="min-h-screen bg-zinc-950 text-zinc-100"><Header /><main><Hero /><Skills /><Projects /><Experience /><Contact /></main></div> }
