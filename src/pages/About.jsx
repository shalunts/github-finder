function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details
        by using a utility-first CSS framework Tailwind and daisyUI
        component library. This project is part of the React Front To
        Back Udemy course by <strong>Brad Traversy</strong>.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:{' '}
        <span className='text-white'>Hassib Moddasser</span>
      </p>
    </>
  );
}

export default About;
