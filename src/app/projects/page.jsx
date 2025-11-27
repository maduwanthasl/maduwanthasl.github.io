import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import FPVIMG from '@/images/logos/fpv.jpeg'
import SCARAIMG from '@/images/logos/scara.jpeg'
import MICROMOUSEIMG from '@/images/logos/micromouse.jpeg'
import PCBIMG from '@/images/logos/pcbdetails.jpeg'
import MYCOBOTING from '@/images/logos/mycobot.jpeg'
import RPITVIMG from '@/images/logos/rpitv.jpeg'
import UARTIMG from '@/images/logos/uart.png'
import IMGINEERPRINTERIMG from '@/images/logos/imagineerprint.jpeg'
import HIGHFAMPIMG from '@/images/logos/highfimage.jpg'
import FILEFLOWIMG from '@/images/logos/fileflow.png'
import REFRESHMATEIMG from '@/images/logos/refreshmate.png'
import ANALOGLINEFOLLOWER from '@/images/logos/analoglinefollower.jpg'
import BINPICKINGIMG from '@/images/logos/binpicking.png'
import GOLEMIMG from '@/images/logos/golem.jpg'
import UNICCASSIMG from '@/images/logos/uniccass.jpeg'
import CMOSIMG from '@/images/logos/cmosdesign.png'
import BINPICKINGSOURCE from '@/images/logos/binpickingsource.png'

const projects = [
	{
		name: 'Custom 5" Freestyle FPV Build',
		description:
			"I built this quad because I'm deeply interested in FPV and wanted a hobby freestyle rig that helps me unwind while delivering durable performance and clean HD video. In its current setup, it flies for about 5–6 minutes in freestyle, hovers at roughly 17% throttle, and weighs around 680 g (AUW with a 6S 1500 mAh pack).",
		link: {
			href: 'https://github.com/maduwanthasl/Micofpv',
			label: 'Project Details',
		},
		logo: FPVIMG,
		image: FPVIMG,
	},
	{
		name: 'SCARA Robot: Design and Control Implementation',
		description:
            "This project focuses on designing and building a SCARA (Selective Compliance Assembly Robot Arm) for automated tasks like pick-and-place operations. The robot was carefully developed to ensure accuracy, efficiency, and reliability, making it suitable for various real-world applications.",
    link: {
			href: 'https://github.com/maduwanthasl/Scara-Robot',
			label: 'Project Details',
		},
		logo: SCARAIMG,
		image: SCARAIMG,
	},
	{
		name: 'Mico Micromouse Robot',
		description:
      "The goal of this project was to build a fully functional micromouse named Mico from scratch. This involved careful consideration of hardware, custom PCB design, and firmware development. Throughout the process, I selected and evaluated various components to ensure optimal performance and compatibility.",
    link: { href: 'https://github.com/maduwanthasl/Mico-Micromouse_V1', label: 'Project Details' },
		logo: MICROMOUSEIMG,
		image: MICROMOUSEIMG,
	},
	{
		name: 'Made My First Double-Layer PCB ',
		description:
    "I'm happy to announce that I've successfully designed and made my first double-layer PCB for a high-frequency amplifier project, version 2.1. This project has been a great learning experience, and I want to share the steps I took to make it happen.",
		link: {
			href: 'https://www.linkedin.com/in/hirusha-maduwantha/details/projects/',
			label: 'Project Details',
		},
		logo: PCBIMG,
		image: PCBIMG,
	},
	{
		name: 'Modeling and Simulation of Robotic Arm in ROS 2 and Gazebo',
		description:
      "In this project, I undertook the complete process of modeling and simulating the MyCobot 280 robotic arm using the Robot Operating System 2 (ROS 2) framework and Gazebo simulation environment.",
		link: {
			href: 'https://github.com/maduwanthasl/Model-a-Robotic-Arm-Ros2',
			label: 'Project Details',
		},
		logo: MYCOBOTING,
		image: MYCOBOTING,
	},
	{
		name: '8bit SAR ADC IEEE Unic-CASS 2024',
		description:
		 "Introduction: We propose to design a 100 KSPS 8-bit successive approximation register (SAR) ADC for low-power applications such as battery-powered or RF-powered internet-of-things (IoT) devices and wearable/implantable medical devices. Our main goal is to achieve 8-bit resolution while minimizing power and die area consumption. Walden figure-of-merit (FoM) will be utilized to quantify the performance of the ADC. The choice of the SAR ADC for the UNIC-CASS program will enable us to master both analog and digital design techniques while providing practical experience with relevant tools. Additionally, designing the SAR ADC layout will teach us crucial layout methods, such as common centroid and noise reduction techniques.",
		link: {
			href: 'https://github.com/maduwanthasl/8b-sar-adc-unic_cass',
			label: 'Project Details',
		},
		logo: UNICCASSIMG,
		image: UNICCASSIMG,
	},
	{
		name: 'CMos Inverter sky130',
		description:
		"This is an open-source project on CMOS Inverter Design, Analysis and Layout in SKY130 PDK.",
		link: {
			href: 'https://github.com/maduwanthasl/cmos_inverter_sky130',
			label: 'Project Details',
		},
		logo: CMOSIMG,
		image: CMOSIMG,
	},
	{
		name: 'Raspberry PI Media Center',
		description:
      "This is my hobby project to transform an old TV into a smart TV with a Raspberry Pi! The project sets up a comprehensive media center using LibreELEC, providing access to PVR TV, gaming, local media playback, YouTube, weather updates, and more. It's a customizable and cost-effective solution for an enhanced media experience",
		link: {
			href: 'https://github.com/maduwanthasl/Raspberry-pi-Media-Center',
			label: 'Project Details',
		},
		logo: RPITVIMG,
		image: RPITVIMG,
	},
  {
		name: 'UART implementation on FPGA',
		description:
    "UART is widely used in embedded systems, microcontrollers, communication interfaces, and peripherals, facilitating data exchange between diverse electronic devices from simple sensors to complex industrial machinery. In this project, we implemented UART communication on an FPGA board, showcasing its versatility and efficiency in hardware applications.",
		link: {
			href: 'https://github.com/maduwanthasl/UART-implementation-on-FPGA',
			label: 'Project Details',
		},
		logo: UARTIMG,
		image: UARTIMG,
	},
	{
		name: 'Imagineer 3D Printer',
		description:
      "As a passionate ENTC student, I love bringing innovative ideas to life. One year ago, while working on Refreshmate, I wanted to build my own 3D printer. I embarked on a personal journey to create one, and today, I'm proud to say that I've successfully made the Imagineer 3D Printer.",
		link: {
			href: 'https://github.com/maduwanthasl/Imagineer-3D-Printer',
			label: 'Project Details',
		},
		logo: IMGINEERPRINTERIMG,
		image: IMGINEERPRINTERIMG,
	},
	{
		name: 'Analog High Frequency Amplifier',
		description:
      "An amplifier is an electronic device that can increase the power of a signal (a time-varying voltage or current). Depending on its frequency of operation, we have several types of amplifiers. As the name suggests, high-frequency amplifiers are designed to operate at high frequencies. These have a vast variety of applications like telecommunication, high-speed electronic measurements, laser research, and photonic research.",
		link: {
			href: 'https://github.com/maduwanthasl/Analog-High-Frequency-Amplifier-V1',
			label: 'Project Details',
		},
		logo: HIGHFAMPIMG,
		image: HIGHFAMPIMG,
	},
	{
		name: 'Fileflow - Communication Design Project',
		description:
      "Successfully completed the 3rd-Semester Communication Design Project in IN21-S3-EN2130 - \"Fileflow\": A File Sharing System Using SDRs",
		link: {
			href: 'https://github.com/maduwanthasl/Fileflow-Communication-Desing-Project-Semester-3',
			label: 'Project Details',
		},
		logo: FILEFLOWIMG,
		image: FILEFLOWIMG,
	},
	{
		name: 'Refreshmate',
		description:
      "Refreshmate: Innovative project for automated air renewal and freshener in public toilets. Core components: Gas sensor, exhaust fan, and air freshener, powered by both electricity and batteries. Primary goal: Autonomously detect and eliminate unpleasant odors, improving air quality.",
		link: {
			href: 'https://github.com/maduwanthasl/RefreshMate',
			label: 'Project Details',
		},
		logo: REFRESHMATEIMG,
		image: REFRESHMATEIMG,
	},
	{
		name: 'Arduino Line Follower',
		description:
      "This is the project that I did for the Semester 3 Robot Design and Competition module. An Arduino-based line follower robot that autonomously detects and follows a line path using sensors.",
		link: {
			href: 'https://github.com/maduwanthasl/Arduino-Line-follower',
			label: 'Project Details',
		},
		logo: ANALOGLINEFOLLOWER,
		image: ANALOGLINEFOLLOWER,
	},
	{
		name: 'Bin Picking Robot Gripper PCB',
		description:
      "This repository contains the PCB design files for the bin picking robot project, developed using Altium Designer. The project has gone through two versions, with the second version incorporating improvements and changes based on component availability and expert guidance.",
		link: {
			href: 'https://github.com/maduwanthasl/Bin-picking-PCB',
			label: 'Project Details',
		},
		logo: BINPICKINGIMG,
		image: BINPICKINGIMG,
	},
	{
		name: 'Golem - SLRC 2024',
		description:
      "Golem is a line-following robot designed to navigate complex paths and perform various tasks autonomously. The robot was built using an Arduino Mega board, various sensors, motor drivers, and custom-designed components. A notable feature of Golem is its robotic arm, which I designed and 3D printed using my Imagineer 3D printer. This document provides a detailed overview of the project's development, including the design, implementation, and functionality of Golem.",
		link: {
			href: 'https://github.com/maduwanthasl/Golem-SLRC-2024',
			label: 'Project Details',
		},
		logo: GOLEMIMG,
		image: GOLEMIMG,
	},
	{
		name: 'Bin Picking Robot Gripper Source Code',
		description:
      "This repository contains the source code for a bin-picking robot project, developed using Microchip Studio. The robot uses an ATmega328P microcontroller, an OLED display, a stepper motor for a gripper mechanism, and a UART interface for receiving coordinates. The project also utilizes the u8g2 library for driving the OLED display.",
		link: {
			href: 'https://github.com/maduwanthasl/Bin-picking-source-code',
			label: 'Project Details',
		},
		logo: BINPICKINGSOURCE,
		image: BINPICKINGSOURCE,
	},
]

function LinkIcon(props) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export const metadata = {
	title: 'Projects',
	description: 'Apps I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
	return (
		<SimpleLayout
			title="Projects I've built to push my ideas into the real world."
			intro="A collection of builds, experiments, and prototypes—from simulations to real hardware—that taught me the most."
		>
			<ul
				role="list"
				className="space-y-8"
			>
				{projects.map((project) => (
					<Card as="li" key={project.name} className="flex flex-col sm:flex-row gap-6">
						{project.image && (
							<div className="flex-shrink-0 h-48 w-48">
								<Image
									src={project.image}
									alt={project.name}
									className="h-full w-full object-cover rounded-lg"
									unoptimized
								/>
							</div>
						)}
						<div className="flex-1">
							<h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
								<Card.Link href={project.link.href}>{project.name}</Card.Link>
							</h2>
							<Card.Description>{project.description}</Card.Description>
							<p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
								<LinkIcon className="h-6 w-6 flex-none" />
								<span className="ml-2">{project.link.label}</span>
							</p>
						</div>
					</Card>
				))}
			</ul>
		</SimpleLayout>
	)
}
