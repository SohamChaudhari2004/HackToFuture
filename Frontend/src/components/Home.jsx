import React from 'react'

const Home = () => {
  return (
    <section
  className="relative w-[100%]   bg-cover bg-center bg-no-repeat"
  style={{
    background : ``,
    backgroundRepeat: 'no-repeat',
    backgroundSize : 'cover',
    backgroundPosition: 'center'
  }}
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative flex gap-10 justify-between mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Upscale Images

        <strong className="block font-extrabold text-rose-300"> Hassle free </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 ml-20 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
    <div className='w-[100%] h-[80%] border border-white border-dashed'>

    </div>
  </div>
</section>
  )
}

export default Home