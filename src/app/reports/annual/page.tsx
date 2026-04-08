export default function BulletPointsAndListsPage() {
  return (
    <div className="p-10 max-w-3xl">
      {/* Page title */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          Best Practices & Guidelines
        </h1>
        <p className="text-sm text-slate-400">
          Recommended patterns, naming conventions, and coding standards for working with the framework.
        </p>
        <div className="mt-4 h-px bg-indigo-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-10">

        {/* Section 1 — Paragraph + Bullet Points */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block flex-shrink-0 mt-1" />
            <h2 className="font-semibold text-indigo-700 uppercase tracking-widest text-xs">
              Naming Conventions
            </h2>
          </div>
          <div className="pl-4 flex flex-col gap-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Consistent naming is critical for readability and maintainability. Follow these
              conventions across all modules and test files in the framework.
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              <li className="text-sm text-slate-600 leading-relaxed flex gap-2">
                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                <span>Use camelCase for local variables, function parameters, and private methods.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-2">
                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                <span>Use PascalCase for class names, interfaces, type aliases, and enum values.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-2">
                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                <span>Use UPPER_SNAKE_CASE for constants and environment variable references.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-2">
                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                <span>Use UPPER_SNAKE_CASE for constants and environment variable references.</span>
              </li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed">
              Adhering to these conventions reduces cognitive load during code reviews and makes
              onboarding significantly faster for new team members.
            </p>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Section 2 — Paragraph + Numbered List */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block flex-shrink-0 mt-1" />
            <h2 className="font-semibold text-indigo-700 uppercase tracking-widest text-xs">
              Test Execution Order
            </h2>
          </div>
          <div className="pl-4 flex flex-col gap-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Every test suite follows a strict execution order to ensure consistent results and
              proper resource management. The steps below outline the lifecycle of a single test run.
            </p>
            <ol className="flex flex-col gap-2 pl-4">
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">1.</span>
                <span>Initialize the test environment and load configuration from the properties file.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">2.</span>
                <span>Read test data from the Excel sheet and resolve any dynamic placeholders.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">3.</span>
                <span>Authenticate using OAuth 2.0 and obtain a valid access token.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">4.</span>
                <span>Build and send the API request using the configured RestAssured specification.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">5.</span>
                <span>Capture the response, run assertions, and log results to the extent report.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">6.</span>
                <span>Store any required response values back into Test Data Excel for downstream tests.</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Section 3 — Mixed: Paragraph + Bullets + Paragraph + Numbered */}
        <div>
          <div className="flex gap-3 mb-3">
            <span className="w-1 h-5 rounded-full bg-indigo-500 inline-block flex-shrink-0 mt-1" />
            <h2 className="font-semibold text-indigo-700 uppercase tracking-widest text-xs">
              Error Handling
            </h2>
          </div>
          <div className="pl-4 flex flex-col gap-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              Proper error handling ensures that test failures produce clear, actionable logs rather
              than cryptic stack traces. The framework supports multiple strategies for handling errors
              at different layers.
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              <li className="text-sm text-slate-600 leading-relaxed flex gap-2">
                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                <span>Always wrap API calls in try-catch blocks to capture unexpected failures.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-2">
                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                <span>Use custom exception classes for domain-specific errors like authentication failures or data mismatches.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-2">
                <span className="text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                <span>Log the full request and response payload when an assertion fails for easier debugging.</span>
              </li>
            </ul>
            <p className="text-sm text-slate-600 leading-relaxed">
              When multiple errors occur in a single test run, the framework prioritizes them using
              the following severity order:
            </p>
            <ol className="flex flex-col gap-2 pl-4">
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">1.</span>
                <span>Connection and timeout errors — indicate infrastructure or environment issues.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">2.</span>
                <span>Authentication errors — indicate expired tokens or invalid credentials.</span>
              </li>
              <li className="text-sm text-slate-600 leading-relaxed flex gap-3">
                <span className="text-indigo-500 font-semibold flex-shrink-0 w-5 text-right">3.</span>
                <span>Assertion errors — indicate a mismatch between expected and actual response values.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}