import React from 'react'

export default function HeroSection() {
  return (
    <section class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-12 sm:py-20 lg:max-w-xl lg:mx-auto lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block">Dalab Technology</span>
              <span class="block text-gray-500">Innovative Solutions</span>
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              Dalab Technology is a leading provider of innovative solutions that help businesses and organizations achieve their goals. We specialize in providing custom software development, web design, and digital marketing services.
            </p>
            <div class="mt-8">
              <a href="#" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                Contact Us
                <svg class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-12 lg:mt-0">
            <img class="h-64 w-full object-cover lg:h-72" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Technology"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
