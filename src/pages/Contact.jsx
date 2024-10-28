const Contact = () => {
  return (
    <div className="flex  items-center justify-center h-lvh">
      <div className="container grid lg:grid-cols-2 items-center justify-center gap-10">
        <div>
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-lg">
            Have questions, suggestions, or need assistance? We’d love to hear
            from you! Please fill out the form below, and we’ll get back to you
            shortly.
          </p>
        </div>

        <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
