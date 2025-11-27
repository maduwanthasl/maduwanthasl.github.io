/* src/app/articles/revolutionizing-Printing/page.jsx */

import Image from 'next/image'
import { ArticleLayout } from '@/components/ArticleLayout'
import Revolutionizing3DPrinting from './image3.webp'

export const article = {
  author: 'Hirusha Maduwantha',
  date: '2024-12-24',
  title:
    'Revolutionizing 3D Printing: Overcoming G-code Limitations with Dynamic Control',
  description:
    '3D printing has become a cornerstone of modern manufacturing and prototyping, but it still has its quirks and limitations. One of the most significant issues I’ve encountered is the inability to modify G-code once a print job has started. This limitation often leaves users unable to make necessary adjustments mid-print, such as altering settings, inserting hardware, or addressing errors.',
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold">
          Exploring Real-Time G-code Adjustments to Enhance 3D Printing
          Flexibility and Address Common Limitations in Existing Systems
        </h2>

        <figure className="mx-auto max-w-3xl">
          <Image
            src={Revolutionizing3DPrinting}
            alt="3D printer under operation"
            className="mx-auto rounded-md"
          />
          <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Photo by Jakub Żerdzicki on Unsplash
          </figcaption>
        </figure>

        <h3 className="text-xl font-semibold">Introduction</h3>
        <p>
          3D printing has become a cornerstone of modern manufacturing and
          prototyping, but it still carries significant constraints. One of the
          biggest limitations is the{' '}
          <strong>inability to modify G-code once a print job has started</strong>.
        </p>
        <p>This creates issues such as:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>inability to add or change settings mid-print</li>
          <li>difficulty inserting hardware inside prints</li>
          <li>no easy way to correct errors without restarting</li>
        </ul>
        <p>
          To address this, I began experimenting with{' '}
          <strong>real-time G-code control</strong>, exploring ways to bypass
          static G-code files and interact directly with the printer during
          operation.
        </p>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">
          Understanding the Current Landscape
        </h3>
        <p>
          Before building my own solution, I studied existing tools and
          resources.
        </p>

        <h4 className="text-lg font-semibold">Prusa Knowledge Base</h4>
        <p>
          PrusaSlicer allows inserting pauses or custom G-code at specific
          layers. This is useful for:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>filament color swaps</li>
          <li>embedding nuts, magnets, and bearings</li>
        </ul>

        <h4 className="text-lg font-semibold">Community Forums</h4>
        <p>
          Prusa3D forums contain scripts, tips, and user hacks for mid-print
          changes.
        </p>

        <h4 className="text-lg font-semibold">Reddit Discussions</h4>
        <p>
          Users often share practical mid-print modification methods, including:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>real-time filament swaps</li>
          <li>pausing to embed hardware</li>
        </ul>

        <p>
          These insights helped shape a better understanding of the problem and
          the limitations of current tools.
        </p>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">
          Key Considerations for Dynamic G-code Adjustment
        </h3>

        <h4 className="text-lg font-semibold">✔ Firmware Compatibility</h4>
        <p>Not all printers allow:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>pausing and resuming safely</li>
          <li>buffer flushing</li>
          <li>arbitrary G-code injection</li>
        </ul>

        <h4 className="text-lg font-semibold">✔ Software Tools</h4>
        <p>
          Tools like PrusaSlicer, OrcaSlicer, or Cura allow scripted pauses and
          small custom G-code insertions, but they still rely on a static file.
        </p>

        <h4 className="text-lg font-semibold">✔ Manual G-code Editing</h4>
        <p>
          Advanced users can edit G-code manually, but this requires good
          knowledge of:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>G-code syntax and semantics</li>
          <li>the printer&apos;s motion planning behavior</li>
          <li>how the firmware manages command buffers</li>
        </ul>

        <p>All of this led me to explore something new…</p>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">
          My Approach: Real-time G-code Transmission with Python
        </h3>
        <p>
          To bypass the limitations of existing slicers, I experimented with{' '}
          <strong>sending G-code dynamically using Python and pyserial</strong>,
          communicating directly with the printer over a serial connection.
        </p>

        <h4 className="text-lg font-semibold">Step 1 — Sending Simple G-code</h4>

        <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
          <code className="language-python">
            {`import serial
import time

# Configuration
SERIAL_PORT = 'COM4'  # Replace with your printer's serial port
BAUD_RATE = 38400    # Adjust to your printer's baud rate

def send_gcode_command(command, printer):
    """Send a G-code command to the 3D printer."""
    printer.write(f"{command}\\n".encode('utf-8'))
    printer.flush()
    while True:
        response = printer.readline().decode('utf-8').strip()
        print(f"Response: {response}")
        if response == "ok":
            break

def main():
    try:
        with serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5) as printer:
            time.sleep(2)
            print("Connected to the printer.")
            
            send_gcode_command("G28", printer)  # Home all axes
            send_gcode_command("G1 X10 Y10 Z10 F3000", printer)  # Move
                
            print("Commands sent successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()`}
          </code>
        </pre>

        <h5 className="font-semibold">Lesson learned</h5>
        <p>
          Using the wrong baud rate leads to freezing, ignored commands, and
          random disconnections. Choosing the{' '}
          <strong>correct baud rate</strong> makes communication much smoother.
        </p>

        <div className="my-6 h-px bg-zinc-800" />

        <h4 className="text-lg font-semibold">
          Step 2 — Sending G-code Line-by-Line
        </h4>

        <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
          <code className="language-python">
            {`import serial
import time
import os

SERIAL_PORT = 'COM4'
BAUD_RATE = 38400
GCODE_FILE = 'path/to/file.gcode'

def send_gcode_line(line, printer):
    printer.write(f"{line}\\n".encode('utf-8'))
    printer.flush()
    response = printer.readline().decode('utf-8').strip()
    print(f"Response: {response}")

def monitor_and_print():
    last_position = 0

    try:
        with serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5) as printer:
            time.sleep(2)
            print("Connected to the printer.")

            while True:
                with open(GCODE_FILE, 'r') as gcode_file:
                    gcode_file.seek(last_position)
                    new_lines = gcode_file.readlines()

                    for line in new_lines:
                        line = line.strip()
                        if line and not line.startswith(';'):
                            print(f"Sending: {line}")
                            send_gcode_line(line, printer)

                    last_position = gcode_file.tell()

                time.sleep(1)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    monitor_and_print()`}
          </code>
        </pre>

        <p>
          This approach works, but motion can feel jerky because each line waits
          for an <code>ok</code> response before sending the next one.
        </p>

        <div className="my-6 h-px bg-zinc-800" />

        <h4 className="text-lg font-semibold">
          Step 3 — Sending G-code in Batches (Much Faster)
        </h4>

        <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
          <code className="language-python">
            {`import os
import time
import serial

GCODE_FILE = r'C:\\path\\to\\your\\gcode_file.gcode'
SERIAL_PORT = 'COM4'
BAUD_RATE = 38400

def send_gcode_batch(gcode_lines, printer):
    for line in gcode_lines:
        line = line.strip()
        if line and not line.startswith(';'):
            printer.write(f"{line}\\n".encode('utf-8'))
    printer.flush()

def monitor_and_print_fast():
    try:
        with serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5) as printer:
            time.sleep(2)
            print("Connected to the printer.")

            last_modified_time = 0

            while True:
                current_modified_time = os.path.getmtime(GCODE_FILE)
                if current_modified_time > last_modified_time:
                    last_modified_time = current_modified_time
                    print(f"File modified. Reloading...")

                    with open(GCODE_FILE, 'r') as gcode_file:
                        gcode_lines = gcode_file.readlines()
                        print(f"Sending {len(gcode_lines)} lines...")
                        send_gcode_batch(gcode_lines, printer)

                    print("All commands sent.")
                else:
                    time.sleep(1)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    monitor_and_print_fast()`}
          </code>
        </pre>

        <p>
          With batched sending, movements become <strong>smoother</strong> and
          execution is <strong>faster</strong>. However, occasional freezes
          still occur.
        </p>

        <h5 className="font-semibold">Likely causes</h5>
        <ul className="list-disc space-y-1 pl-6">
          <li>buffer overflow in the printer firmware</li>
          <li>missing <code>ok</code> acknowledgments</li>
          <li>flow control and timing issues</li>
        </ul>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">Challenges &amp; Future Work</h3>

        <h4 className="text-lg font-semibold">Buffer Overflows</h4>
        <p>
          Sending too much G-code too quickly can overwhelm the printer&apos;s
          internal command queue.
        </p>

        <h4 className="text-lg font-semibold">Real-Time Reactivity</h4>
        <p>
          A proper UI or control interface is needed to pause, modify, and
          resume print jobs dynamically, without manually editing G-code files.
        </p>

        <h4 className="text-lg font-semibold">Firmware Differences</h4>
        <p>
          Different firmware (Marlin, Klipper, Repetier, etc.) handles command
          buffers and acknowledgements in different ways, so a robust solution
          must account for these differences.
        </p>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">Conclusion</h3>
        <p>
          This exploration demonstrates that{' '}
          <strong>dynamic G-code control is absolutely possible</strong>, but it
          requires careful management of:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>serial communication timing</li>
          <li>printer firmware behavior</li>
          <li>command buffering and flow control</li>
        </ul>
        <p>
          I&apos;m excited to keep refining this system and move toward a more
          flexible, adaptive, and interactive 3D printing workflow.
        </p>
        <p>
          <strong>Have you tried modifying G-code mid-print?</strong> I&apos;d
          love to hear your experiences and ideas for making real-time
          control even more reliable.
        </p>
      </section>
    </ArticleLayout>
  )
}
