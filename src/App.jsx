import { FaUsers, FaBuilding, FaTools } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import "./App.css";

const BackToTopIcon = () => (
  <svg
    className="h-6 w-6 text-white"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M2.019 11.993c0 5.518 4.48 9.998 9.998 9.998 5.517 0 9.997-4.48 9.997-9.998s-4.48-9.998-9.997-9.998c-5.518 0-9.998 4.48-9.998 9.998zm1.5 0c0-4.69 3.808-8.498 8.498-8.498s8.497 3.808 8.497 8.498-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498zm4.715-1.528s1.505-1.502 3.259-3.255c.147-.146.338-.219.53-.219s.384.073.53.219c1.754 1.753 3.259 3.254 3.259 3.254.145.145.217.336.216.527 0 .191-.074.383-.22.53-.293.293-.766.294-1.057.004l-1.978-1.978v6.694c0 .413-.336.75-.75.75s-.75-.337-.75-.75v-6.694l-1.978 1.979c-.29.289-.762.286-1.055-.007-.147-.146-.22-.338-.221-.53-.001-.19.071-.38.215-.524z"
      clipRule="evenodd"
    />
  </svg>
);

const App = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tips Memulai Karir di Dunia Teknologi",
      summary:
        "Menyusun strategi karir di dunia teknologi bisa jadi tantangan. Simak tips-tips berikut untuk memulai karirmu dengan baik.",
    },
    {
      id: 2,
      title: "Tantangan dan Peluang E-commerce di Era Digital",
      summary:
        "E-commerce terus berkembang pesat. Namun, ada berbagai tantangan dan peluang yang harus dihadapi di era digital ini.",
    },
    {
      id: 3,
      title: "Pentingnya Keamanan Data di Era Digital",
      summary:
        "Keamanan data menjadi krusial di era digital saat ini. Pelajari mengapa melindungi data penting untuk bisnis dan individu.",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Logo</div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#blog" className="text-white hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero section */}
      <div id="home" className="relative px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100">
                Title of your website
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Get started
                  <span aria-hidden="true" className="text-indigo-200">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Read the guide
                  <span aria-hidden="true" className="text-gray-400">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font">
              Tentang Kami
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Siap Melayani Anda dengan Layanan Terbaik
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Kami adalah perusahaan yang berkomitmen untuk memberikan solusi
              terbaik untuk kebutuhan Anda. Dengan tim yang berpengalaman dan
              dedikasi tinggi, kami siap melayani Anda dalam berbagai aspek
              bisnis dan teknologi.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
              {/* Card 1 */}
              <div className="rounded-lg shadow-lg overflow-hidden flex items-center">
                <div className="p-6">
                  <FaUsers className="text-6xl text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    Tim Profesional
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Tim kami terdiri dari para profesional yang berpengalaman
                    dalam bidang mereka masing-masing, siap untuk mengatasi
                    tantangan yang kompleks.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-lg shadow-lg overflow-hidden flex items-center">
                <div className="p-6">
                  <FaBuilding className="text-6xl text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    Lokasi Strategis
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Kantor kami terletak di lokasi strategis yang mudah diakses,
                    memudahkan klien dan mitra untuk berinteraksi dengan kami.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-lg shadow-lg overflow-hidden flex items-center">
                <div className="p-6">
                  <FaTools className="text-6xl text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    Teknologi Modern
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Kami mengadopsi teknologi terbaru untuk memastikan layanan
                    yang cepat, aman, dan andal bagi pelanggan kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font">
              Blog
            </h2>
            <div className="flex items-center justify-center mt-2">
              <FaRegNewspaper className="text-4xl text-white mr-2" />
              <p className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Baca Artikel Terbaru Kami
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{post.summary}</p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                      Baca Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section id="contact" className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-indigo-500 font-semibold tracking-wide uppercase">
              Contact Us
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
              Get in touch
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Whatever questions you have or information you need, feel free to
              reach out. Were here to help!
            </p>
          </div>
          <div className="mt-12">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium leading-5 text-white"
                >
                  First name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="first_name"
                    type="text"
                    required
                    className="form-input block w-full sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium leading-5 text-white"
                >
                  Last name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="last_name"
                    type="text"
                    required
                    className="form-input block w-full sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-white"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    required
                    className="form-input block w-full sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-5 text-white"
                >
                  Message
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    id="message"
                    rows="4"
                    required
                    className="form-textarea block w-full sm:text-sm sm:leading-5"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-gray-800 pt-10">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
          {/* Column 1 */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Getting started
            </div>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Installation
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Release Notes
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Upgrade Guide
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Using with Preprocessors
            </a>
          </div>

          {/* Column 2 */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Community
            </div>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              GitHub
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Stack Overflow
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Discussion Forums
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Code of Conduct
            </a>
          </div>

          {/* Column 3 */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Company
            </div>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              About Us
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Careers
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Contact Us
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Privacy Policy
            </a>
          </div>

          {/* Column 4 */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
              Legal
            </div>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Terms
            </a>
            <a
              href="/"
              className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
            >
              Privacy
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 
        font-bold text-black-m800 items-center"
          >
            <span className="mx-3 text-white">
              © Copyright 2024, All rights reserved
            </span>
          </div>
        </div>
      </footer>

      <button
        className="text-white hover:bg-sky-400 hover:text-gray-900 fixed bottom-4 right-4 bg-sky-500 p-2 rounded-md shadow-md"
        onClick={scrollToTop}
      >
        <BackToTopIcon />
      </button>
    </>
  );
};

export default App;