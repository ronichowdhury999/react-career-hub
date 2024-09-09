const Banner = () => {
  return (
      <div className='px-4 my-header-bg'>
      <div className="max-w-[1200px] mx-auto">
      <div className='md:flex justify-center items-center'>
        <div>
          <h1 className='text-5xl font-bold'>One Step Closer To Your <span className='text-indigo-400'>Dream Job</span></h1>
          <p className='py-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='px-4 py-2 font-semibold rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500'>Get Started</button>
        </div>
        <div className=''>
          <img className='md:pt-2 pt-10 w-[600px]' src="https://i.ibb.co.com/GFdX0s9/user.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner