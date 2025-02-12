'use client';

import Link from 'next/link'
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h2 className="text-2xl font-bold mb-4">Not Found</h2>
        <p className="mb-4">Could not find requested resource</p>
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          Return Home
        </Link>
      </div>
    </Suspense>
  )
}
