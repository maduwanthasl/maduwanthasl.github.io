/* src/app/articles/visualizing-Accelerometer-Data-in-Python/page.jsx */

import Image from 'next/image'
import { ArticleLayout } from '@/components/ArticleLayout'
import VisualizingAccelerometerData from './image1.webp'
import Witmotionuserinterface from './image2.webp'

export const article = {
  author: 'Hirusha Maduwantha',
  date: '2025-01-05',
  title:
    'Visualizing Accelerometer Data in Python: A Case Study with the WitMotion WT901BLECL5.0',
  description:
    'In this article, I’ll walk you through my journey of collecting, visualizing, and analyzing accelerometer data from the WitMotion WT901BLECL5.0 sensor. The goal of this project is to use acceleration data to address vibration handling in 3D printer beds and optimize silicon printing parameters.',
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <section className="mt-8 space-y-6">
        <h3 className="text-lg font-semibold">
          Using Python for vibration analysis and optimizing 3D printing
          parameters in silicon printing.
        </h3>

        <h2 className="text-xl font-semibold">Introduction</h2>
        <p>
          In this article, I’ll walk you through my journey of collecting,
          visualizing, and analyzing accelerometer data from the{' '}
          <strong>WitMotion WT901BLECL5.0</strong> sensor. The goal of this
          project is to use acceleration data to address vibration handling in
          3D printer beds and optimize silicon printing parameters.
        </p>

        <figure className="mx-auto max-w-3xl">
          <Image
            src={VisualizingAccelerometerData}
            alt="Visualizing accelerometer data with the WitMotion WT901BLECL5.0"
            className="mx-auto rounded-md"
          />
          <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Witmotion user interface
          </figcaption>
        </figure>

        <h2 className="text-xl font-semibold">
          WitMotion WT901BLECL5.0 — Hardware &amp; Software Overview
        </h2>

        <h3 className="text-lg font-semibold">The Accelerometer</h3>
        <p>The WitMotion WT901BLECL5.0 is a versatile sensor capable of measuring:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Acceleration</li>
          <li>Angular velocity</li>
          <li>Angles (roll, pitch, yaw)</li>
          <li>Temperature</li>
          <li>Magnetic field</li>
          <li>Humidity</li>
        </ul>

        <h3 className="text-lg font-semibold">Features of the Sensor</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Provides data via software with a built-in 3D visualization interface</li>
          <li>Records data and exports it as CSV for post-processing</li>
          <li>Supports Arduino, Python, Raspberry Pi, STM32, and ROS</li>
          <li>Includes an Android app for mobile data collection</li>
        </ul>

        <h2 className="text-xl font-semibold">Data Collection Process</h2>
        <p>
          For this experiment, I measured acceleration data on a 3D printer bed
          using an <strong>XYZ calibration cube</strong> print. This setup
          allowed me to observe the bed’s vibrations during printing.
        </p>

        <h2 className="text-xl font-semibold">Tools and Techniques</h2>

        <h3 className="text-lg font-semibold">1. WitMotion Software</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>Captured acceleration and orientation data</li>
          <li>Exported files in CSV format</li>
          <li>
            Explored roll, pitch, and yaw using the 3D visualization interface
          </li>
        </ul>

        <figure className="mx-auto max-w-3xl">
          <Image
            src={Witmotionuserinterface}
            alt="Witmotion WT901BLECL5.0 user interface"
            className="mx-auto rounded-md"
          />
          <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
            WitMotion WT901BLECL5.0 sensor
          </figcaption>
        </figure>

        <h3 className="text-lg font-semibold">2. Python Libraries</h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Pandas</strong> – data cleaning and manipulation
          </li>
          <li>
            <strong>Matplotlib</strong> – visualization and plotting
          </li>
        </ul>

        <h3 className="text-lg font-semibold">3. Dataset Creation</h3>
        <p>Collected the following data types:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Acceleration</li>
          <li>Angles</li>
          <li>Angular velocity</li>
          <li>Temperature</li>
          <li>Magnetic field</li>
        </ul>
        <p>
          This resulted in a comprehensive dataset for analysis and potential
          future machine learning tasks.
        </p>

        <div className="my-6 h-px bg-zinc-800" />

        <h2 className="text-xl font-semibold">Data Visualization in Python</h2>
        <p>
          To visualize the data, I wrote a Python script using Pandas and
          Matplotlib to generate time-series plots for angles, acceleration,
          angular velocity, magnetic field, temperature, and quaternions.
        </p>

        <h3 className="text-lg font-semibold">Python Code Snippet</h3>

        <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
          <code className="language-python">
            {`import pandas as pd
import matplotlib.pyplot as plt

# Reload the uploaded data
file_path = 'C:/filepath/data.csv'
data = pd.read_csv(file_path)

# Clean the Time column
data['Time'] = data['Time'].str.strip()

# Define reference time
reference_time_str = "19:15:21.501"
reference_time = pd.to_datetime(reference_time_str, format='%H:%M:%S.%f')

# Convert 'Time' column to datetime and calculate time difference
data['Time'] = pd.to_datetime(data['Time'], format='%H:%M:%S.%f', errors='coerce')
data['Time Difference (s)'] = (data['Time'] - reference_time).dt.total_seconds()

print(data.columns)

# Define plotting function
def plot_data(subplot_titles, columns, title):
    fig, axes = plt.subplots(len(columns), 1, figsize=(10, 6), sharex=True)
    fig.suptitle(title, fontsize=16)
    for i, col in enumerate(columns):
        axes[i].plot(data['Time Difference (s)'], data[col], label=col, linewidth=1)
        axes[i].set_ylabel(col)
        axes[i].grid()
        axes[i].legend()
    axes[-1].set_xlabel('Time Difference (s)')
    plt.tight_layout()
    plt.subplots_adjust(top=0.9)
    plt.show()

# Plot angles
plot_data(
    ['Angle X(°)', 'Angle Y(°)', 'Angle Z(°)'],
    ['Angle X(°)', 'Angle Y(°)', 'Angle Z(°)'],
    'Angles (X, Y, Z)'
)

# Plot acceleration
plot_data(
    ['Acceleration X(g)', 'Acceleration Y(g)', 'Acceleration Z(g)'],
    ['Acceleration X(g)', 'Acceleration Y(g)', 'Acceleration Z(g)'],
    'Acceleration (X, Y, Z)'
)

# Plot angular velocity
plot_data(
    ['Angular velocity X(°/s)', 'Angular velocity Y(°/s)', 'Angular velocity Z(°/s)'],
    ['Angular velocity X(°/s)', 'Angular velocity Y(°/s)', 'Angular velocity Z(°/s)'],
    'Angular Velocity (X, Y, Z)'
)

# Plot magnetic field
plot_data(
    ['Magnetic field X(ʯt)', 'Magnetic field Y(ʯt)', 'Magnetic field Z(ʯt)'],
    ['Magnetic field X(ʯt)', 'Magnetic field Y(ʯt)', 'Magnetic field Z(ʯt)'],
    'Magnetic Field (X, Y, Z)'
)

# Plot temperature
plt.figure(figsize=(10, 4))
plt.plot(data['Time Difference (s)'], data['Temperature(℃)'], label='Temperature(℃)', linewidth=1)
plt.title('Temperature (℃)')
plt.xlabel('Time Difference (s)')
plt.ylabel('Temperature (℃)')
plt.grid()
plt.legend()
plt.show()

# Plot quaternions
plot_data(
    ['Quaternions 0()', 'Quaternions 1()', 'Quaternions 2()', 'Quaternions 3()'],
    ['Quaternions 0()', 'Quaternions 1()', 'Quaternions 2()', 'Quaternions 3()'],
    'Quaternions (0, 1, 2, 3)'
)`}
          </code>
        </pre>

        <p className="my-4 text-center">
          <a
            href="https://medium.com/@hirusha.maduwantha/visualizing-accelerometer-data-in-python-a-case-study-with-the-witmotion-wt901blecl5-0-7a1f3e4f3e4f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Read full article
          </a>
        </p>
      </section>
    </ArticleLayout>
  )
}
