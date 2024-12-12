import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Houzez
          </h1>
          <p className="text-lg text-gray-600">
            Your trusted partner in finding the perfect property.
          </p>
        </section>

        {/* Who We Are */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to <span className="font-bold">Houzez</span>, a leading real
            estate platform connecting buyers, sellers, and renters with their
            dream properties. We offer a seamless experience for all your real
            estate needs.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Houzez?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Wide selection of properties in prime locations.</li>
            <li>User-friendly platform with advanced search filters.</li>
            <li>Expert support to guide you through the process.</li>
            <li>Reliable and transparent property listings.</li>
            <li>Committed to helping you make informed decisions.</li>
          </ul>
        </section>

        {/* Mission Statement */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-bold">Houzez</span>, our mission is to make
            property buying, selling, and renting simple and hassle-free. We
            strive to create value for our clients by delivering exceptional
            services and innovative solutions.
          </p>
        </section>

        {/* Our Story */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            <span className="font-bold">Houzez</span> was founded to bridge the
            gap between property seekers and property providers. Starting as a
            small initiative, we have grown into a trusted name in the real
            estate industry, helping countless individuals and families find
            their perfect homes.
          </p>
        </section>

        {/* Customer Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="space-y-6">
            <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-600">
              &quot;Houzez made my home-buying journey smooth and effortless.
              The platform is easy to use, and the team was incredibly
              supportive. Thank you!&quot;
              <br />
              <span className="font-bold">- Emily R.</span>
            </blockquote>
            <blockquote className="border-l-4 border-blue-600 pl-4 text-gray-600">
              &quot;I found my dream apartment through Houzez. The detailed
              listings and transparent process were truly impressive. Highly
              recommended!&quot;
              <br />
              <span className="font-bold">- Mark T.</span>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/all-properties"
            className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Browse Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
