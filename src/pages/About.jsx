const About = () => {
  return (
    <>
      <div
        className="bg-[url('https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg')] 
             bg-cover bg-center h-96 flex items-center justify-center text-white"
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
          About Us
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
          Welcome to our e-commerce store! We’re dedicated to providing you with
          the best products at affordable prices, all while ensuring a seamless
          and enjoyable shopping experience.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 text-gray-600 text-center">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              Our mission is to bring top-quality products to your doorstep and
              create a convenient online shopping environment.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>Email: contact@dummyecommerce.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 E-commerce St., Shopsville</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-700 max-w-xl text-center">
            With a wide range of products and a dedicated customer service team,
            we ensure our customers receive top-notch service and quality
            products.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
