import { MdCall, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import SectionTitle from "../components/shared/SectionTitle";

const Contact = () => {
  return (
    <div>
      <SectionTitle subHeading={"get in touch"} heading={"contact us"} />
      <div className="md:flex gap-14 bg-gray-200 p-4 rounded-xl">
        <div className="md:w-4/12">
          <h1 className="text-3xl text-black font-bold mb-4">Contact Info</h1>
          <ul className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-gray-300 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-gray-300">
            <li className="relative pl-6">
              <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-gray-300 text-gray-700 ring-2 ring-white">
                <MdLocationOn />
              </span>
              <div className="flex flex-col flex-1 gap-0">
                <h4 className="text-sm font-medium text-black mt-2">
                  Rangpur, Bangladesh
                </h4>
              </div>
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-gray-300 text-gray-700 ring-2 ring-white">
                <MdOutlineEmail />
              </span>
              <div className="flex flex-col flex-1 gap-0">
                <h4 className="text-sm font-medium text-black mt-2">
                  merajulhasan09@gmail.com
                </h4>
              </div>
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 -translate-x-1/2 rounded-full bg-gray-300 text-gray-700 ring-2 ring-white">
                <MdCall />
              </span>
              <div className="flex flex-col flex-1 gap-0">
                <h4 className="text-sm font-medium text-black mt-2">
                  +88 01619961209 (WhatsApp)
                </h4>
              </div>
            </li>
          </ul>
        </div>

        {/*<!-- Component: Card with form --> */}
        <form className="md:w-8/12 overflow-hidden rounded text-gray-700 mb-8">
          {/*  <!-- Body--> */}
          <div className="px-6">
            <header className="mt-6 md:mt-0 md:mb-4">
              <h3 className="text-3xl font-bold text-gray-900">Message me!!</h3>
            </header>
            <div className="flex flex-col space-y-8">
              {/*      <!-- Input field --> */}
              <div className="grid grid-cols-2 -mb-5 gap-x-5">
                <div className="relative my-6">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="your name"
                    className="peer relative h-10 w-full rounded border border-gray-300 px-4 text-sm text-gray-700 placeholder-transparent outline-none transition-all focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-900"
                  >
                    Name*
                  </label>
                </div>
                <div className="relative my-6">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your email"
                    className="peer relative h-10 w-full rounded border border-gray-300 px-4 text-sm text-gray-700 placeholder-transparent outline-none transition-all focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 -top-2 z-[1] px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-900"
                  >
                    Email*
                  </label>
                </div>
              </div>
              <div className="relative my-6">
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="peer relative h-10 w-full rounded border border-gray-300 px-4 text-sm text-gray-700 placeholder-transparent outline-none transition-all focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-900"
                >
                  Subject*
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="your message"
                  className="peer relative h-32 w-full rounded border border-gray-300 px-4 text-sm text-gray-700 placeholder-transparent outline-none transition-all focus:border-gray-500 focus:outline-none"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-2 -top-2 z-[1] px-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-900"
                >
                  Your message*
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end px-6">
            <button
              type="submit"
              className="btn bg-gray-900 text-white mt-5 font-semibold p-3 px-5 rounded hover:bg-gray-700 transition duration-300 w-full"
            >
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
