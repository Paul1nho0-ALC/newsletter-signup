'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { IconSuccess } from '../components/icons/IconSuccess'
import { useState } from 'react'

export default function Success() {
  const searchParams = useSearchParams()

  const [open, setOpen] = useState('')
  const router = useRouter()

  const email = searchParams.get('email')

  const handleClick = () => {
    router.push('/')
  }

  return (
    <main
      className={
        'h-screen w-full max-w-screen flex sm:items-center sm:justify-center sm:p-12 ' +
        open
      }
    >
      <div className="bg-white h-full w-full flex flex-col items-start justify-around p-6 sm:max-w-lg sm:p-12 sm:rounded-xl">
        <IconSuccess />

        <h1 className="mt-6 text-dark font-bold text-5xl">
          Thanks for subscribing!
        </h1>
        <p className="mt-4 text-dark">
          A confirmation email has been sent to{' '}
          <span className="font-bold">{email}.</span> Please open it and click
          the button inside to confirm your subscription.
        </p>

        <button
          className="bg-dark text-white text-bold text-base w-full h-12 rounded-md mt-4 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-lg hover:shadow-primary/90"
          onClick={() => handleClick()}
        >
          Dismiss message
        </button>
      </div>
    </main>
  )
}
