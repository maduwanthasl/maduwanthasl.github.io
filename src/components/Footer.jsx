import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, BehanceIcon, MediumIcon } from '@/components/SocialIcons'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block text-sm text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ icon: Icon, href, label }) {
  return (
    <Link
      href={href}
      className="group"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-blue-500 dark:fill-zinc-400 dark:group-hover:fill-blue-400" />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-8 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col gap-6">
              {/* Main Footer Content - 3 Columns */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                {/* Left Column - Brand & Social */}
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                    Hirusha Maduwantha
                  </h2>
                  <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                    Electronics & Telecommunication Engineering student focused on robotics, additive manufacturing, and embedded systems.
                  </p>
                  <div className="mt-6 flex gap-6">
                    <SocialLink
                      href="https://www.linkedin.com/in/hirusha-maduwantha/"
                      icon={LinkedInIcon}
                      label="Follow on LinkedIn"
                    />
                    <SocialLink
                      href="https://github.com/maduwanthasl"
                      icon={GitHubIcon}
                      label="Follow on GitHub"
                    />
                    <SocialLink
                      href="https://medium.com/@hirusha2me"
                      icon={MediumIcon}
                      label="Follow on Medium"
                    />
                    <SocialLink
                      href="https://www.behance.net/hirushamaduwantha/projects"
                      icon={BehanceIcon}
                      label="Follow on Behance"
                    />
                  </div>
                </div>

                {/* Middle Column - Quick Links */}
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
                    Quick Links
                  </h3>
                  <div className="mt-4 grid grid-cols-2 gap-x-8">
                    <ul className="space-y-3">
                      <li><NavLink href="/">Home</NavLink></li>
                      <li><NavLink href="/about">About</NavLink></li>
                      <li><NavLink href="/projects">Projects</NavLink></li>
                      <li><NavLink href="/articles">Articles</NavLink></li>
                    </ul>
                    <ul className="space-y-3">
                      <li><NavLink href="/conference">Conference</NavLink></li>
                      <li><NavLink href="/certifications">Certifications</NavLink></li>
                      <li><NavLink href="/awards">Awards</NavLink></li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Get In Touch */}
                <div className="lg:col-span-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-100">
                    Get In Touch
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li>
                      <a 
                        href="mailto:hirushamaduwantha0@gmail.com"
                        className="block text-sm text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
                      >
                        Gmail
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://github.com/maduwanthasl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.linkedin.com/in/hirusha-maduwantha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-zinc-600 transition hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <NavLink href="/contact">Contact Form</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-zinc-100 dark:border-zinc-700/40" />

              {/* Bottom Section - Copyright */}
              <div className="flex justify-end">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  © {new Date().getFullYear()} Hirusha Maduwantha. All rights reserved.
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
