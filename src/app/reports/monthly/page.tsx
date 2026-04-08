import Image from "next/image"

export default function ParagraphsWithImagesPage() {
  return (
    <div className="p-10 max-w-3xl">
      {/* Page title */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          Getting Started Guide
        </h1>
        <p className="text-sm text-slate-400">
          An introductory guide covering setup, configuration, and core concepts of the framework.
        </p>
        <div className="mt-4 h-px bg-indigo-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-10">

        {/* Section 1 */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block flex-shrink-0 mt-1" />
            <h2 className="font-semibold text-indigo-700 uppercase tracking-widest text-xs">
              Overview
            </h2>
          </div>
          <div className="pl-4 flex flex-col gap-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
              vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Etiam non
              diam ante. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>
            <div className="rounded-lg border border-indigo-100 overflow-hidden bg-slate-50 relative w-full aspect-[7/3]">
              <Image
                src="/images/architecture-diagram.png"
                alt="Architecture Diagram"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-slate-400 italic -mt-2">
              Fig 1 — High-level architecture overview of the framework.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Section 2 */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block flex-shrink-0 mt-1" />
            <h2 className="font-semibold text-indigo-700 uppercase tracking-widest text-xs">
              Installation
            </h2>
          </div>
          <div className="pl-4 flex flex-col gap-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
            <div className="rounded-lg border border-indigo-100 overflow-hidden bg-slate-50 relative w-full aspect-[7/3]">
              <Image
                src="/images/installation-steps.png"
                alt="Installation Steps"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-slate-400 italic -mt-2">
              Fig 2 — Step-by-step installation workflow.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
              occaecati cupiditate non provident.
            </p>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Section 3 */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block flex-shrink-0 mt-1" />
            <h2 className="font-semibold text-indigo-700 uppercase tracking-widest text-xs">
              Configuration
            </h2>
          </div>
          <div className="pl-4 flex flex-col gap-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
              fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus.
            </p>
            <div className="rounded-lg border border-indigo-100 overflow-hidden bg-slate-50 relative w-full aspect-[7/3]">
              <Image
                src="/images/config-file-structure.png"
                alt="Config File Structure"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-slate-400 italic -mt-2">
              Fig 3 — Default configuration file structure and key fields.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
              aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}