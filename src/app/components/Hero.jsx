

const Hero = () => {
    return (
      <div className=" bg-gray-50 text-gray-900 h-screen flex items-center justify-center">
        <div className="text-center bg-white p-3 rounded-xl shadow-lg w-full">
          <h1 className="font-serif text-5xl sm:text-6xl font-semibold leading-relaxed mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed tracking-wide font-serif mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam consequatur minima, nemo quam provident facere, officiis deleniti eligendi dolor corporis quisquam pariatur praesentium vel vitae commodi suscipit iure distinctio? Nobis.
          </p>
          <a
            href="#"
            className="inline-block bg-gray-900 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-gray-800 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
  