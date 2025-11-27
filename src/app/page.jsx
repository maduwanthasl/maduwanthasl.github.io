/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { BehanceIcon, GitHubIcon, LinkedInIcon, MediumIcon, XIcon } from '@/components/SocialIcons'
import NAGODAROYALLOGO from '@/images/logos/nagodaroyal.png'
import AQuinasLOGO from '@/images/logos/aquinas.png'
import DESAWANALOGO from '@/images/logos/desawana.webp'
import ALOYLOGO from '@/images/logos/aloy.png'
import SUTDLogo from '@/images/logos/sutd.jpg'
import DMANDLogo from '@/images/logos/dmand.png'
import ECLUBLogo from '@/images/logos/eclub.webp'
import SKILLSURFLogo from '@/images/logos/skillsurf.png'
import BRDLogo from '@/images/logos/brd.webp'
import UOMLogo from '@/images/logos/uom.png'
import ENTClogo from '@/images/logos/entc.png'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'




function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function EducationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Mortarboard (Graduation Cap) */}
      <path
        d="M3 9l9-4 9 4-9 4-9-4z"
        className="stroke-zinc-400 dark:stroke-zinc-500 fill-zinc-100 dark:fill-zinc-100/10"
      />

      {/* Cap Underline / Base */}
      <path
        d="M7 12v4c0 .8 2.7 2 5 2s5-1.2 5-2v-4"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />

      {/* Tassel */}
      <path
        d="M12 5v4"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <circle
        cx="12"
        cy="10"
        r="0.7"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}




function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Certificate({ certificate }) {
  let startLabel =
    typeof certificate.start === 'string'
      ? certificate.start
      : certificate.start.label

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={certificate.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {certificate.company}
        </dd>
        <dt className="sr-only">Title</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {certificate.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime={certificate.start}>{startLabel}</time>{' '}
        </dd>
      </dl>
    </li>
  )
}

function Education() {
  let education = [
    {
      company: 'University of Moratuwa',
      title: 'B.Sc. Electronic and Telecommunication Engineering Honours Degree',
      logo: UOMLogo,
      start: '2022',
    },
    {
      company: "St. Aloysius' College",
      title: 'G.C.E. Advanced Level (Physical Science Stream)',
      logo: ALOYLOGO,
      start: '2015',
    },
    {
      company: 'Aquinas College of Higher Studies',
      title: 'Diploma in Engilish',
      logo: AQuinasLOGO,
      start: '2019',
    },
    {
      company: 'Nagoda Royal College',
      title: 'Ordinary Level',
      logo: NAGODAROYALLOGO,
      start: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EducationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((certificate, index) => (
          <Certificate key={index} certificate={certificate} />
        ))}
      </ol>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'University of Moratuwa',
      title: 'Teaching Assistant',
      logo: UOMLogo,
      start: 'Sep 2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'SUTD - DManD',
      title: 'Visiting Research Student',
      logo: SUTDLogo,
      start: 'Dec 2024',
      end: 'Jun 2025',
    },
    {
      company: 'Skill Surf',
      title: 'Teaching Assistant',
      logo: SKILLSURFLogo,
      start: 'Feb 2025',
      end: 'Jun 2025',
    },
    {
      company: 'Desawana Music',
      title: 'UI Designer',
      logo: DESAWANALOGO,
      start: '2021',
      end: '2022',
    },
  ]

  return (
    <>
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work experiences</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, index) => (
            <Role key={index} role={role} />
          ))}
        </ol>
        {/* <Button
          href="../pdf/HirushaEssaResume.pdf"
          variant="secondary"
          className="group mt-6 w-full"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button> */}
      </div>
    </>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi there, I'm Hirusha
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m a Robotics and AI Enthusiast from Sri Lanka. I love building intelligent
            robots that blend computer vision, hardware, and advanced 3D designing to solve 
            real-world problems. I’m always exploring new ideas in digital manufacturing, humanoids, shared autonomy,
            and soft robotics, and I’m excited to keep pushing what machines can do.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/hirusha-maduwantha/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/maduwanthasl"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://medium.com/@hirusha2me"
              aria-label="Follow on Medium"
              icon={MediumIcon}
            />
            <SocialLink
              href="https://www.behance.net/hirushamaduwantha/projects"
              aria-label="Follow on Behance"
              icon={BehanceIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
            <div className="mt-8">
              <a
                href="https://medium.com/@hirusha2me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Read more articles on Medium
              </a>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Education />
          </div>
        </div>
      </Container>
      {/* 🔹 New logo strip section */}
      <Container className="mt-16">
        <div className="bg-white py-10 shadow-sm w-full">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
            <div className="flex h-16 w-32 items-center justify-center">
              <Image
                src={SUTDLogo}
                alt="SUTD Logo"
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="flex h-16 w-32 items-center justify-center">
              <Image
                src={DMANDLogo}
                alt="DMAND Logo"
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="flex h-16 w-32 items-center justify-center">
              <Image
                src={BRDLogo}
                alt="BRD Logo"
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="flex h-16 w-24 items-center justify-center">
              <Image
                src={UOMLogo}
                alt="UOM Logo"
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="flex h-16 w-32 items-center justify-center">
              <Image
                src={ENTClogo}
                alt="ENTC Logo"
                className="object-contain"
                unoptimized
              />
            </div>

            <div className="flex h-16 w-24 items-center justify-center">
              <Image
                src={ECLUBLogo}
                alt="ECLUB Logo"
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

