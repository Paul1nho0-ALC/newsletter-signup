'use client'
import { useEffect, useState } from 'react'
import { IconList } from '../icons/IconList'

export const Signup = () => {
  const [desktopOrMobile, setdesktopOrMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setdesktopOrMobile(window.innerWidth < 640)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const srcImg = desktopOrMobile
    ? '/assets/images/illustration-sign-up-mobile.svg'
    : '/assets/images/illustration-sign-up-desktop.svg'

  return (
    <div className="flex flex-col-reverse sm:flex-row bg-white sm:p-6 sm:rounded-xl h-full">
      <div className="flex w-full h-full flex-col items-start justify-center p-4 md:p-10">
        <div className="flex flex-col gap-2 sm:gap-6 md:gap-2 w-full">
          <h1 className="text-dark text-normal font-bold text-3xl md:text-5xl">
            Stay updated!
          </h1>
          <p className="text-dark">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>
        <div className="flex flex-col pt-2 md:pt-6 gap-4">
          <div className="flex items-center gap-3">
            <IconList />
            <span className="text-dark ">
              Product discovery and building what matters
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IconList />
            <span className="text-dark ">
              Measuring to ensure updates are a success
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IconList />
            <span className="text-dark ">And much more!</span>
          </div>
        </div>

        <form className="flex flex-col items-start w-full mt-4" action="">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-dark text-base" htmlFor="">
              Email adress
            </label>
            <input
              type="text"
              placeholder="email@company.com"
              className="placeholder:text-light border border-light p-2 rounded-md w-full"
            />
          </div>
          <button
            className="bg-dark text-white text-bold text-base w-full h-12 rounded-md mt-4"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      <img className="w-full sm:w-1/2 h-full" src={srcImg} alt="Illustration" />
    </div>
  )
}
