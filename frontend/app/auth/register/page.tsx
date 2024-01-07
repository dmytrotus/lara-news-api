"use client";

import Link from 'next/link';
import { FormEvent } from 'react';

export default function Page() {

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const response = await fetch('http://localhost:7717/api/register', {
      method: 'POST',
      body: formData,
    });

    console.log(response)

  };

  return (
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Register
      </h1>
      <form className="my-10" onSubmit={handleSubmit}>
        <div className="grid my-10 md:grid-cols-2 gap-4">
        <div className="mb-5">
              <input
                  placeholder="Name"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  type="text"
                  name="name"
              />
          </div>
        <div className="mb-5">
              <input
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  type="email"
                  name="email"
              />
          </div>
          <div className="col-span-2 mb-5">
              <input
                  placeholder="Password"
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                  type="password"
                  name="password"
              />
          </div>
          <Link 
          className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
          href="/auth/login">Already have an account. Please log in
          </Link>
        </div>
          <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black">
            Register
          </button>
      </form>
  </div>
  )
}
