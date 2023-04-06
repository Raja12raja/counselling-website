import React from 'react'

export default function UG() {
  return (
    <div>
    {/* tab navigation */}
    <ul className="mr-4 flex list-none flex-col flex-wrap pl-0">
    <li className="flex-grow text-center">
    <a
    href="tabs-1"
    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent "
    aria-controls="tabs-1"
    aria-selected="true"
    id="tab-1"
    tabindex="0"
    >Home</a>
    </li>
    <li className="flex-grow text-center">
    <a
      href="tabs-2"
      className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate "
      aria-controls="tabs-2"
      aria-selected="false"
      id="tab-2"
      tabindex="-1"
      >Profile</a>
    </li>
    <li role="presentation" class="flex-grow text-center">
    <a
      href="tabs-3"
      className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent "
      aria-controls="tabs-3"
      aria-selected="false"
      id="tab-3"
      tabindex="-1"
      >Messages</a>
    </li>
    </ul>
    {/* Tab Content */}
    <div className="my-2">
      <div
      className="opacity-100 transition-opacity duration-150 ease-linear"
      id="tabs-1"
      aria-labelledby="tabs-1"
      tabindex="0">
      Tab 1 content
      </div>
      <div
      className="opacity-100 transition-opacity duration-150 ease-linear"
      id="tabs-2"
      role="tabpanel"
      aria-labelledby="tabs-2"
      tabindex="0">
      Tab 2 content
      </div>
    </div>
  </div>
  )
}
