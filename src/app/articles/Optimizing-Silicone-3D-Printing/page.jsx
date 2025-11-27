/* src/app/articles/Optimizing-Silicone-3D-Printing/page.jsx */

import Image from 'next/image'
import { ArticleLayout } from '@/components/ArticleLayout'
import OptimizingSilicone3DPrintingParameters from './image4.webp'
import PrintedSamples from './image5.webp'

export const article = {
  author: 'Hirusha Maduwantha',
  date: '2024-12-11',
  title:
    'Optimizing Silicone 3D Printing Parameters: A Comparison of Speed, Pressure, Z-height and Additives',
  description:
    'Silicone 3D printing is gaining traction for its versatility in producing soft robotic components. However, achieving high-quality prints requires a precise balance of materials, additives, and printing parameters. In this experiment, I tested different combinations of silicone mixtures, speeds, and pressures to determine their impact on print quality.',
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
          Exploring the Impact of Printing Conditions on Silicone Cube Quality
          Using SLO-JO and Thivex Additives
        </h2>

        <h3 className="text-xl font-semibold">Introduction</h3>
        <p>
          Silicone 3D printing is gaining traction for its versatility in
          producing soft robotic components. However, achieving high-quality
          prints requires a precise balance of materials, additives, and
          printing parameters. In this experiment, I tested different
          combinations of silicone mixtures, speeds, and pressures to determine
          their impact on print quality.
        </p>

        <figure className="mx-auto max-w-3xl">
          <Image
            src={OptimizingSilicone3DPrintingParameters}
            alt="Optimizing silicone 3D printing parameters test setup"
            className="mx-auto rounded-md"
          />
        </figure>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">Materials Used</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Silicone Type A and B</strong> – base materials mixed in
            equal ratios
          </li>
          <li>
            <strong>SLO-JO Additive</strong> – extends cure time for more
            workable printing
          </li>
          <li>
            <strong>Thivex (2%)</strong> – increases viscosity for better layer
            adhesion
          </li>
          <li>
            <strong>Silicone Type</strong> – Ecoflex 00-30 (platinum-cure
            silicone rubber compound)
          </li>
        </ul>

        <figure className="mx-auto max-w-3xl">
          <Image
            src={PrintedSamples}
            alt="Printed silicone cube samples"
            className="mx-auto rounded-md"
          />
          <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Printed silicone samples from the experiment.
          </figcaption>
        </figure>

        <h3 className="text-xl font-semibold">Experimental Setup</h3>
        <p>
          The study involved printing <strong>six silicone cubes</strong> under
          varying conditions:
        </p>

        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Cubes 1, 2, 3:</strong> Silicone Type B + 4% SLO-JO + Type
            A
          </li>
          <li>
            <strong>Cubes 4, 5, 6:</strong> Silicone Type B + 4% SLO-JO + Type A
            + 2% Thivex
          </li>
        </ul>

        <p>
          <strong>Observation:</strong> Prints 1–3 used low-viscosity silicone,
          resulting in scattered and uneven layers. Prints 4–6 used Thivex for
          higher viscosity, showing better layer consistency and shape
          retention.
        </p>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">Parameters Tested</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-zinc-700 text-zinc-300">
              <tr>
                <th className="py-2 pr-4">Cube Number</th>
                <th className="py-2 pr-4">Speed (F)</th>
                <th className="py-2 pr-4">Pressure (kPa)</th>
                <th className="py-2 pr-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr>
                <td className="py-2 pr-4 font-medium">1</td>
                <td className="py-2 pr-4">F2400</td>
                <td className="py-2 pr-4">70 kPa</td>
                <td className="py-2 pr-4">Standard mix</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">2</td>
                <td className="py-2 pr-4">F2400</td>
                <td className="py-2 pr-4">90 kPa</td>
                <td className="py-2 pr-4">
                  Higher pressure → denser extrusion
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">3</td>
                <td className="py-2 pr-4">F2400</td>
                <td className="py-2 pr-4">90 kPa</td>
                <td className="py-2 pr-4">Printed 40 min after mixing</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">4</td>
                <td className="py-2 pr-4">F2400</td>
                <td className="py-2 pr-4">90 kPa</td>
                <td className="py-2 pr-4">
                  Added 2% Thivex → higher viscosity
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">5</td>
                <td className="py-2 pr-4">F1800</td>
                <td className="py-2 pr-4">100 kPa</td>
                <td className="py-2 pr-4">
                  Slower speed, higher pressure combination
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">6</td>
                <td className="py-2 pr-4">F900</td>
                <td className="py-2 pr-4">70 kPa</td>
                <td className="py-2 pr-4">Slowest speed, low pressure</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">Observations and Results</h3>

        <h4 className="text-lg font-semibold">
          Prints 1–3 (Low Viscosity — SLO-JO Only)
        </h4>
        <p>These prints showed scattered flow due to low viscosity:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            <strong>Print 1:</strong> 70 kPa → lower flow, slightly controlled
            but still scattered.
          </li>
          <li>
            <strong>Print 2:</strong> 90 kPa → more scattering, higher flow
            increased layer height.
          </li>
          <li>
            <strong>Print 3:</strong> Printed 40 minutes after mixing → partial
            curing caused excessive spreading and major scattering.
          </li>
        </ul>

        <div className="my-4 h-px bg-zinc-800" />

        <h4 className="text-lg font-semibold">
          Prints 4–6 (High Viscosity — SLO-JO + Thivex)
        </h4>
        <p>
          Adding Thivex increased viscosity and significantly improved print
          structure.
        </p>

        <h5 className="font-semibold">Print 4</h5>
        <ul className="list-disc space-y-1 pl-6">
          <li>90 kPa + Thivex → controlled flow, minimal scattering.</li>
          <li>Slight surface pattern suggests a possible Z-calibration issue.</li>
        </ul>

        <h5 className="font-semibold">Print 5</h5>
        <ul className="list-disc space-y-1 pl-6">
          <li>100 kPa + Thivex → reduced surface pattern seen in Print 4.</li>
          <li>
            Bed height slightly increased halfway through the print, improving
            consistency.
          </li>
          <li>
            Lower speed (F1800) helped maintain flow stability at higher
            pressure.
          </li>
        </ul>

        <h5 className="font-semibold">Print 6</h5>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            70 kPa + F900 → cleaner results after nozzle and bed tuning.
          </li>
          <li>
            Initial layers showed uneven distribution due to flow mismatch.
          </li>
          <li>
            Very low speed produced shallow layer heights and small gaps between
            paths.
          </li>
        </ul>

        <div className="my-6 h-px bg-zinc-800" />

        <h3 className="text-xl font-semibold">Conclusion</h3>

        <h4 className="text-lg font-semibold">Key Takeaways</h4>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Higher Pressure → Stronger Flow</strong>  
            Increasing pressure improves extrusion control and consistency,
            especially with thicker silicone mixes.
          </li>
          <li>
            <strong>Lower Flow Rate → Lower Speed Needed</strong>  
            When pressure is low, reducing print speed prevents scattering and
            improves layer formation.
          </li>
          <li>
            <strong>Z-Height Calibration is Critical</strong>  
            Incorrect Z-gap leads to uneven layers, visible patterns, or weak
            adhesion. Precise Z-calibration becomes even more important when
            switching between low- and high-viscosity materials.
          </li>
        </ul>
      </section>
    </ArticleLayout>
  )
}
