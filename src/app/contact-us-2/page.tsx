import Image from "next/image";

const page = () => {
  return (
    <div className="container2 mx-auto flex items-center justify-center min-h-screen bg-[#0d0f1b] p-6 mt-8 mb-8">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Left Side - Contact Form */}
        <div className="flex-1 p-8">
          <h2 className="title-header-text mb-6">Contact Us.</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Md. Mahmud-ul-amin"
                className="w-full border-b border-gray-300 outline-none py-2 text-lg text-black"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="mahmudulamin745ui@gmail.com"
                className="w-full border-b border-gray-300 outline-none py-2 text-lg text-black"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full border-b border-gray-300 outline-none py-2 text-lg text-black h-24"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-lg font-semibold transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex-1">
          <Image
            src="https://i.postimg.cc/V61ZQkxn/corpo-contact.jpg"
            alt="Contact Us"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
