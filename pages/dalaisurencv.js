export default function CV() {
    return (
      <div className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-lg rounded-lg">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full mr-4"></div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Dalaisuren</h1>
            <p className="text-xl text-gray-600">Web Developer</p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="font-semibold text-gray-700">Location</p>
            <p>Mongolia Ulaanbaatar</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Phone</p>
            <p>(+976) 69696969</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email</p>
            <p>dalaisuren@email.com</p>
          </div>
        </div>
  
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
          <p className="text-gray-700">
            Dalaisuren is a good studenttt i love me myself
          </p>
        </div>
  
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">Software Engineer - ABC Corp</h3>
            <p className="text-gray-600">January 2020 - Present</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Developed and maintained scalable web applications using React and Node.js.</li>
              <li>Collaborated with cross-functional teams to design and implement new features.</li>
              <li>Optimized front-end performance, resulting in a 25% faster load time.</li>
            </ul>
          </div>
  
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">Junior Web Developer - XYZ Solutions</h3>
            <p className="text-gray-600">June 2017 - December 2019</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Created responsive websites using HTML, CSS, and JavaScript.</li>
              <li>Worked with back-end developers to integrate APIs and databases.</li>
              <li>Improved website UI/UX based on user feedback and testing.</li>
            </ul>
          </div>
        </div>
  
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University of New York, 2017</p>
          </div>
        </div>
  
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <li className="bg-gray-100 p-2 rounded-md text-center">HTML5</li>
            <li className="bg-gray-100 p-2 rounded-md text-center">CSS3</li>
            <li className="bg-gray-100 p-2 rounded-md text-center">JavaScript</li>
            <li className="bg-gray-100 p-2 rounded-md text-center">React</li>
            <li className="bg-gray-100 p-2 rounded-md text-center">Node.js</li>
            <li className="bg-gray-100 p-2 rounded-md text-center">Python</li>
            <li className="bg-gray-100 p-2 rounded-md text-center">SQL</li>
            <li className="bg-gray-100 p-2 rounded-md text-center">Git</li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Projects</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">E-Commerce Web App</h3>
            <p className="text-gray-600">A fully responsive e-commerce platform built with React and Node.js, featuring product listing, cart management, and secure checkout.</p>
          </div>
  
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">Personal Portfolio</h3>
            <p className="text-gray-600">A personal website built to showcase my projects and skills, using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </div>
    );
  }
  