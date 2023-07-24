'use client'
import { useEffect, useState } from 'react'
import { IconList } from '../icons/IconList'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z
    .string()
    .email('Valid email required')
    .nonempty('The email was empty'),
})

type formData = z.infer<typeof formSchema>

export const Signup = () => {
  const [desktopOrMobile, setdesktopOrMobile] = useState(false)
  const router = useRouter()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<formData>({
    resolver: zodResolver(formSchema),
  })

  const srcImg = desktopOrMobile
    ? './assets/images/illustration-sign-up-mobile.svg'
    : './assets/images/illustration-sign-up-desktop.svg'

  const errorInput = errors.email
    ? 'border-primary bg-primary/10 text-primary'
    : ''

  function submitEmail(data: any) {
    // Sign up logic
    const { email } = data
    router.push(`/Success?email=${email}`)
  }

  useEffect(() => {
    function handleResize() {
      setdesktopOrMobile(window.innerWidth < 640)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

        <form
          className="flex flex-col items-start w-full mt-4"
          onSubmit={handleSubmit(submitEmail)}
        >
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full flex justify-between">
              <label className="text-dark text-base" htmlFor="">
                Email adress
              </label>
              <span className="text-primary">
                {errors.email && <span>{errors.email.message}</span>}
              </span>
            </div>
            <input
              type="text"
              placeholder="email@company.com"
              className={
                errorInput +
                'placeholder:text-light outline-none border border-light hover:outline p-2 rounded-md w-full'
              }
              {...register('email')}
            />
          </div>
          <button
            className="bg-dark text-white font-bold text-base w-full h-12 rounded-md mt-4 hover:bg-gradient-to-r from-rose-500 to-primary hover:shadow-lg hover:shadow-primary/90"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>

      <img
        className="w-full sm:w-1/2 h-full -translate-y-2 sm:translate-y-0"
        src={srcImg}
        alt="Illustration"
      />
    </div>
  )
}
