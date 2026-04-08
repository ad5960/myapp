import React from "react"

type ActionRow = {
  action: string
  description: string
}

type Section = {
  object: string
  intro: string
  actions: ActionRow[]
}

const sections: Section[] = [
  {
    object: 'HTTP Method',
    intro: 'Standard methods used in RESTful APIs to indicate the desired action on a resource.',
    actions: [
      { action: 'GET',    description: 'Fetches data from the server. Does not modify any data. Used for reading records, lists, or single items.' },
      { action: 'POST',   description: 'Sends data to the server to create a new resource. The server assigns an ID and returns the created object.' },
      { action: 'PUT',    description: 'Replaces an entire existing resource with the request payload. All fields must be included or they will be overwritten as empty.' },
      { action: 'PATCH',  description: 'Partially updates an existing resource. Only the fields included in the request body are modified.' },
      { action: 'DELETE', description: 'Deletes the specified resource from the server. This action is usually irreversible.' },
    ],
  },
  {
    object: 'RestAssured',
    intro: 'Helper methods for building and configuring API requests using the RestAssured library.',
    actions: [
      { action: 'Add Cookies',                          description: 'Attaches one or more cookies to the request. Useful for session-based authentication or passing client state to the server.' },
      { action: 'Add Header with OAuthType and OAuthToken', description: 'Appends an Authorization header using the specified OAuth type (e.g. Bearer) and token value for secured API endpoints.' },
      { action: 'Add Headers',                          description: 'Adds one or more custom key-value headers to the request, such as Content-Type, Accept, or any API-specific headers.' },
      { action: 'Get JSONBody',                         description: 'Extracts and returns the response body as a parsed JSON object for further assertions or data extraction.' },
      { action: 'Request Initialization',               description: 'Sets up the base RequestSpecification object with default configurations before building the full request.' },
      { action: 'Request Finalize',                     description: 'Completes the request specification by applying all accumulated configurations and prepares it for execution.' },
      { action: 'Set Base_URI',                         description: 'Defines the base URI of the API (e.g. https://api.example.com) that all subsequent requests will be sent to.' },
      { action: 'Set Base_Path',                        description: 'Sets the base path appended to the Base_URI (e.g. /v1/users), scoping all requests to a specific API version or resource group.' },
      { action: 'Set JSONBody',                         description: 'Attaches a JSON payload as the request body. Automatically sets Content-Type to application/json.' },
      { action: 'Set Proxy',                            description: 'Configures a proxy server for the request, routing traffic through the specified host and port for debugging or network control.' },
    ],
  },
  {
    object: 'OAuth 2.0',
    intro: 'Methods for configuring OAuth 2.0 authentication credentials and tokens for secured API requests.',
    actions: [
      { action: 'Client ID',       description: 'Fetches Client ID from Test Data and Excel.' },
      { action: 'Client Secret',   description: 'Fetches Client Secret from Test Data and Excel.' },
      { action: 'Grant Type',      description: 'Fetches Grant Type from Test Data and Excel.' },
      { action: 'Password',        description: 'Fetches Password from Test Data and Excel.' },
      { action: 'Set OAuth Token', description: 'Fetches OAuth Token from Test Data and Excel.' },
      { action: 'Set OAuth Type',  description: 'Fetches OAuth Type from Test Data and Excel.' },
      { action: 'Username',        description: 'Fetches Username from Test Data and Excel.' },
    ],
  },
  {
    object: 'Asserts',
    intro: 'Assertion methods for validating API responses against expected values and test data.',
    actions: [
      { action: 'Assert on Status 200',          description: 'Asserts whether the response status code is 200 or not.' },
      { action: 'HTTP Status Code 200',          description: 'Marks the test as passed in the extent report if the status code is 200.' },
      { action: 'HTTP Status Code 204',          description: 'Marks the test as passed in the extent report if the status code is 204.' },
      { action: 'HTTP Status Code 201',          description: 'Marks the test as passed in the extent report if the status code is 201.' },
      { action: 'Validate Response',             description: 'Validates the generated API response against the response stored in Test Data Excel.' },
      { action: 'Validation Against Captured Data', description: 'Validates the value of a given key against data provided in Test Data Excel.' },
    ],
  },
  {
    object: 'Report',
    intro: 'Methods for capturing and logging API responses in test reports.',
    actions: [
      { action: 'Print Response', description: 'Captures the API response in string format and prints it as a log in the extent report.' },
    ],
  },
  {
    object: 'Store Data',
    intro: 'Methods for reading from and writing to Test Data Excel during test execution.',
    actions: [
      { action: 'Get Data',   description: 'Fetches the value of a given key from Test Data Excel.' },
      { action: 'Store Data', description: 'Fetches any particular field from the API response and stores it into Test Data Excel.' },
    ],
  },
]

const httpMethodStyles: Record<string, string> = {
  GET:    'bg-blue-100 text-blue-700',
  POST:   'bg-green-100 text-green-700',
  PUT:    'bg-amber-100 text-amber-700',
  PATCH:  'bg-purple-100 text-purple-700',
  DELETE: 'bg-red-100 text-red-700',
}

export default function HomePage() {
  return (
    <div className="p-8 max-w-5xl">

      {/* Page heading */}
      <h1 className="text-2xl font-semibold text-slate-800 mb-1">API Actions</h1>
      <p className="text-sm text-slate-500 mb-8">
        A reference for HTTP methods, RestAssured, OAuth 2.0, assertions, reporting, and data utilities.
      </p>

      {/* Table */}
      <div className="rounded-xl border border-indigo-100 overflow-hidden">
        <table className="w-full text-sm">

          {/* Header */}
          <thead>
            <tr className="bg-indigo-700 text-white">
              <th className="text-left px-6 py-3.5 font-medium tracking-wide w-44">Object</th>
              <th className="text-left px-6 py-3.5 font-medium tracking-wide w-64">Action</th>
              <th className="text-left px-6 py-3.5 font-medium tracking-wide">Description</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-indigo-50">
            {sections.map((section) => (
              <React.Fragment key={section.object}>
                {/* Section intro row */}
                <tr key={`${section.object}-intro`} className="bg-indigo-50">
                  <td
                    className="px-6 py-4 font-semibold text-indigo-800 align-top"
                    rowSpan={section.actions.length + 1}
                  >
                    {section.object}
                  </td>
                  <td className="px-6 py-4 text-slate-500 italic align-top" colSpan={2}>
                    {section.intro}
                  </td>
                </tr>

                {/* Action rows */}
                {section.actions.map((row, i) => (
                  <tr
                    key={`${section.object}-${row.action}`}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}
                  >
                    <td className="px-6 py-4 align-top">
                      {section.object === 'HTTP Method' && httpMethodStyles[row.action] ? (
                        <>
                          <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold tracking-wide ${httpMethodStyles[row.action]}`}>
                            {row.action}
                          </span>
                        </>
                      ) : (
                        <span className="font-medium text-slate-700">{row.action}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-slate-500 leading-relaxed align-top">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}