/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { LinkedInIcon, GitHubIcon, XIcon, BehanceIcon, MediumIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'




function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: `I'm Hirusha, a Robotics Enthusiast from Pakistan. Although I explored various fields like video editing and graphic design, none truly resonated with me. My journey into front-end development began in 2020 when I discovered HTML and CSS, and I haven't looked back since. I'm always staying up-to-date with the JavaScript ecosystem, excited to see what comes next.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Robotics Enthusiast dedicated to building things that actually work.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm Hirusha Maduwantha, a final-year Electronic & Telecommunication Engineering undergraduate at the 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> University of Moratuwa</span>. I completed my research internship at the <span className="font-semibold text-blue-600 dark:text-blue-400">Digital Manufacturing and Design 
              Centre (DManD) at SUTD</span>, where I worked on robotic 3D printing, soft robotics,smart materials, 4D printing, freeform toolpath generation and intelligent fabrication systems.
            </p>
            <p>
              I've also been actively involved at my university as a <span className="font-semibold text-blue-600 dark:text-blue-400">Teaching Assistant</span> for the EN2533 Robot Design and 
              Competition module and EN2091 - Laboratory Practice and Projects module, supporting labs and mentoring students. Recently, I also took on the role of <span className="font-semibold text-blue-600 dark:text-blue-400">Head of 
              Education at the Electronic Club SLRC Branch</span>, where I help design workshops and guide students through robotics and 
              embedded systems projects.
            </p>
            <p>
              My work mainly focuses on robotics, computer vision, autonomous systems, deep learning, shared autonomy (HRI) and advanced additive manufacturing.
               I love working on <span className="font-semibold text-blue-600 dark:text-blue-400">humanoids, legged robots, robot simulations, robotic arm printing, and trying out different additive manufacturing methods</span>.
            </p>
            <p>
              I'm passionate about the connection between robotics, AI, and digital fabrication. I love experimenting, 
              debugging, and turning ideas into real, working prototypes. Outside engineering, I enjoy photography, exploring 
              tech projects, and getting involved in robotics competitions.
            </p>
            <p>
              More than anything, I love building robots and systems that actually work—simple, reliable, and useful.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.linkedin.com/in/hirusha-maduwantha/"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://github.com/maduwanthasl"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://medium.com/@hirusha2me"
              icon={MediumIcon}
              className="mt-4"
            >
              Follow on Medium
            </SocialLink>
            <SocialLink
              href="https://www.behance.net/hirushamaduwantha/projects"
              icon={BehanceIcon}
              className="mt-4"
            >
              Follow on Behance
            </SocialLink>
            <SocialLink
              href="mailto:hirushamaduwantha0@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hirushamaduwantha0@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
