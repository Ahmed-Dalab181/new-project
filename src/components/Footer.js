import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="bg-blue-500">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row justify-between">
      <div class="flex flex-col">
        <div class="flex items-center justify-center md:justify-start">
          <a href="#" class="text-white">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          </a>
          <span class="ml-3 text-sm text-white">
            &copy; 2021 Workflow Inc.
          </span>
        </div>
        <div class="mt-8">
          <nav class="flex space-x-4">
            <a href="#" class="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</a>

            <a href="#" class="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>

            <a href="#" class="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Marketplace</a>

            <a href="#" class="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Company</a>
          </nav>
        </div>
      </div>
      <div class="mt-8 md:mt-0 md:ml-8">
        <a href="#" class="text-white hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
