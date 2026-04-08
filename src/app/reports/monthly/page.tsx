type TermEntry = {
  term: string
  definition: string
}

type Section =
  | { type: 'group'; heading: string; definition?: string; terms: TermEntry[] }
  | { type: 'standalone'; heading: string; definition: string }

const sections: Section[] = [
  {
    type: 'group',
    heading: 'pocFramework(Root Level Folder)',
    definition: 'This is root level folder of the framework. This folder has subfolders has follows:',
    terms: [
      { term: 'src/main/java', definition: 'This folder is empty. This folder is used by developers to write their code as per Agile methodology. CTDA framework can be integrated with Agile based projects.' },
      { term: 'Backup', definition: 'This folder is being used to store backup scripts if any.' },
      { term: 'Function_Library', definition: 'This folder has GenericFunctions & AdvanceFunctions (Mouse and Keyboard actions) class. The class has user defined functions which are called from the script' },
      { term: 'pocFramework.pocFramework', definition: 'This folder is being used to store scripts which are generated from Agile Designer tool.' },
      { term: 'Report', definition: 'This folder has extent functionality to generate report after execution.' },
      { term: 'TestBase', definition: 'This folder has Test Base class which initiates the web driver according to input given from Testing XML i.e Chrome, Firefox or IE. It also quits the web driver instance once the execution is done.' },
    ],
  },
  {
    type: 'standalone',
    heading: 'Agent',
    definition: 'Some definition of Agent.',
  },
]

export default function FrameworkFolderStructurePage() {
  return (
    <div className="p-10 max-w-3xl">
      {/* Page title */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          Framework Folder Structure
        </h1>
        <p className="text-sm text-slate-400">
          A reference guide to the folders, modules, and components that make up the framework.
        </p>
        <div className="mt-4 h-px bg-indigo-100" />
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        {sections.map((section) =>
          section.type === 'group' ? (
            <div key={section.heading}>
              <div className="flex gap-3 mb-4">
                <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-indigo-700 tracking-widest text-lg">
                    {section.heading}
                  </span>
                  {section.definition && (
                    <>
                      <span className="text-slate-300"> — </span>
                      <span className="text-slate-500">
                        {section.definition}
                      </span>
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-col gap-3 pl-4">
                {section.terms.map((entry, i) => (
                  <div
                    key={entry.term}
                    className="flex gap-4 items-baseline"
                  >
                    {/* Index number */}
                    <span className="text-xs font-medium text-indigo-300 w-5 shrink-0 text-right">
                      {i + 1}.
                    </span>
<p className="text-sm leading-relaxed">
  <span className="font-semibold text-slate-700">
    {entry.term}
  </span>
  <span className="text-slate-300"> — </span>
  <span className="text-slate-500">
    {entry.definition}
  </span>
</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-px bg-slate-100" />
            </div>
          ) : (
            <div key={section.heading}>
              <div className="flex items-center gap-3 mb-1">
                <span className="w-1 h-5 rounded-full bg-indigo-200 inline-block shrink-0" />
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-sm font-semibold text-slate-700">
                    {section.heading}
                  </span>
                  <span className="text-slate-300 text-sm">—</span>
                  <span className="text-sm text-slate-500 leading-relaxed">
                    {section.definition}
                  </span>
                </div>
              </div>
              <div className="mt-6 h-px bg-slate-100" />
            </div>
          )
        )}
      </div>
    </div>
  )
}