import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet";

function About() {
  return (


    <div className="min-h-screen  px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2">
        {/* About Box */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">About Me</h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Hello! I'm <span className="font-semibold text-blue-600">Abhi Jagodana</span>, a frontend developer skilled in HTML, CSS, JavaScript, React JS, TypeScript, and Tailwind CSS. I'm a fast learner and team player.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            I enjoy working with modern tools like <strong>React</strong> and <strong>Tailwind CSS</strong>. Always learning, always building.
          </p>
        </div>

        <Helmet>
          <title>About | Abhi Profile</title>
          <meta
            name="description"
            content="Learn more about Abhi Jagodana — a frontend developer with expertise in React, TypeScript, Tailwind CSS, and more."
          />
        </Helmet>

        {/* Bio Box */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Bio</h2>
          <ul className="space-y-4 text-sm sm:text-base text-gray-700">
            <li className="flex items-center gap-3 flex-wrap">
              <FaUser className="text-blue-500 min-w-[20px]" />
              <strong>Age:</strong> 21
            </li>
            <li className="flex items-center gap-3 flex-wrap">
              <FaEnvelope className="text-blue-500 min-w-[20px]" />
              <strong>Email:</strong>{" "}
              <a href="mailto:jagodanaabhay@gmail.com" className="hover:underline break-all">
                jagodanaabhay@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 flex-wrap">
              <FaLinkedin className="text-blue-500 min-w-[20px]" />
              <strong>LinkedIn:</strong> Jagodana Abhay
            </li>
            <li className="flex items-center gap-3 flex-wrap">
              <FaPhoneAlt className="text-blue-500 min-w-[20px]" />
              <strong>Phone:</strong> +91 6353772828
            </li>
            <li className="flex items-center gap-3 flex-wrap">
              <FaMapMarkerAlt className="text-blue-500 min-w-[20px]" />
              <strong>Address:</strong> India
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
