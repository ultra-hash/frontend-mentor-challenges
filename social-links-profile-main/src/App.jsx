function App() {

  const Links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"]
  return (
    <div className='bg-secondary-cOff-black min-h-[100vh] flex justify-center items-center'>
      <div className='w-[80%] max-w-[310px] bg-secondary-cDark-grey p-4 rounded-lg text-secondary-cWhite flex flex-col gap-3'>
        <div className='text-center'>
          <img className='m-auto rounded-full w-20' src='public\assets\images\avatar-jessica.jpeg' alt='jessica avatar' />
          <h1 className="text-2xl text-cInter font-bold mb-1 mt-4">
            Jessica Randall
          </h1>
          <p className='text-cParagraph text-cInter text-primary-cGreen font-semibold'>London, United Kingdom</p>
        </div>

        <p className='text-cParagraph text-center font-medium mt-2'>"Front-end developer and avid reader."</p>
        <div className='flex flex-col gap-3 text-cParagraph font-semibold text-secondary-cWhite'>
          {Links.map(link =>
            <button key={link} className='bg-secondary-cGrey hover:bg-primary-cGreen hover:text-secondary-cOff-black px-4 py-2 rounded-lg'>
              {link}
            </button>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default App
