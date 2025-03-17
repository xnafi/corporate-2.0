import React from "react";
import Image from "next/image";

const CommentsSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Comments Section */}
      <h2 className="text-2xl font-bold mb-6">Comments (2)</h2>

      <div className="space-y-6">
        {/* Comment 1 */}
        <div className=" bg-gray-100 p-4 rounded-lg">
        <div className="flex gap-4 ">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500">May 13, 2023</p>
            <p className="font-semibold">Albert Flores</p>
           
          </div>
          <button className="ml-auto bg-black text-white px-3 py-1 rounded-md text-sm">
            Reply
          </button>
        </div>
        <p className="text-gray-700 pl-16 pr-16">
              How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
            </p>
        </div>
        {/* Comment 2 */}
        <div className=" bg-gray-100 p-4 rounded-lg">
        <div className="flex gap-4 ">
          <Image
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="User"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500">May 13, 2023</p>
            <p className="font-semibold">Albert Flores</p>
           
          </div>
          <button className="ml-auto bg-black text-white px-3 py-1 rounded-md text-sm">
            Reply
          </button>
        </div>
        <p className="text-gray-700 pl-16 pr-16">
              How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
            </p>
      </div>
      </div>

      {/* Write a Comment Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Write a Comment</h2>
      <div className="border border-gray-500 p-4 rounded-md bg-gray-50">
        <p className="text-gray-600">
          You must <span className="text-orange-500 font-semibold">log in</span> first to be able to post comments on this platform.
        </p>
      </div>

      {/* Write a Comment Form */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Write a Comment</h2>
      <p className="text-gray-500 text-sm mb-4">
        Your email address won’t be shared publicly. Please fill in the required fields marked with an asterisk.
      </p>

      <form className="bg-gray-100 p-6 rounded-md space-y-4 border border-gray-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="w-full p-3 border rounded-md"
          />
        </div>

        <textarea
          placeholder="Your comment"
          className="w-full p-3 border rounded-md h-24"
        ></textarea>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember" className="w-4 h-4" />
          <label htmlFor="remember" className="text-gray-700 text-sm">
            Remember my name, email, and website for future comments.
          </label>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-full"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
