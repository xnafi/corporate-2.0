import ScrollAnimation from "@/utils/scrollAnimation";
import Image from "next/image";

const CommentsSection = () => {
  return (
    <div className="mx-auto mt-10">
      {/* Comments Section */}
      <ScrollAnimation direction="left">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Comments (2)
        </h2>
      </ScrollAnimation>

      <ScrollAnimation direction="left" className="space-y-4 sm:space-y-6">
        {/* Comment 1 */}
        <ScrollAnimation
          direction="left"
          className="bg-gray-100 p-3 sm:p-4 rounded-lg"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-500">May 13, 2023</p>
              <p className="font-semibold text-sm sm:text-base">
                Albert Flores
              </p>
            </div>
            <button className="bg-black text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm">
              Reply
            </button>
          </div>
          <p className="text-gray-700 mt-2 sm:pl-12 sm:pr-12 text-sm sm:text-base">
            How all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system.
          </p>
        </ScrollAnimation>

        {/* Comment 2 */}
        <ScrollAnimation
          direction="left"
          className="bg-gray-100 p-3 sm:p-4 rounded-lg"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Image
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="User"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-gray-500">May 13, 2023</p>
              <p className="font-semibold text-sm sm:text-base">
                Albert Flores
              </p>
            </div>
            <button className="bg-black text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm">
              Reply
            </button>
          </div>
          <p className="text-gray-700 mt-2 sm:pl-12 sm:pr-12 text-sm sm:text-base">
            How all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system.
          </p>
        </ScrollAnimation>
      </ScrollAnimation>

      {/* Write a Comment Section */}
      <ScrollAnimation direction="left">
        <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-10 mb-3 sm:mb-4">
          Write a Comment
        </h2>
      </ScrollAnimation>

      <ScrollAnimation
        direction="left"
        className="border border-gray-500 p-3 sm:p-4 rounded-md bg-gray-50"
      >
        <p className="text-gray-600 text-sm sm:text-base">
          You must <span className="text-orange-500 font-semibold">log in</span>{" "}
          first to be able to post comments on this platform.
        </p>
      </ScrollAnimation>

      {/* Write a Comment Form */}
      <ScrollAnimation direction="left">
        <h2 className="text-xl sm:text-2xl font-bold mt-8 sm:mt-10 mb-3 sm:mb-4">
          Write a Comment
        </h2>
      </ScrollAnimation>

      <ScrollAnimation direction="left">
        <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
          Your email address won’t be shared publicly. Please fill in the
          required fields marked with an asterisk.
        </p>
      </ScrollAnimation>

      <ScrollAnimation direction="left">
        <form className="bg-gray-100 p-4 sm:p-6 rounded-md space-y-3 sm:space-y-4 border border-gray-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-2 sm:p-3 border rounded-md text-sm"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="w-full p-2 sm:p-3 border rounded-md text-sm"
            />
          </div>

          <textarea
            placeholder="Your comment"
            className="w-full p-2 sm:p-3 border rounded-md h-20 sm:h-24 text-sm"
          ></textarea>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="w-3 sm:w-4 h-3 sm:h-4"
            />
            <label
              htmlFor="remember"
              className="text-gray-700 text-xs sm:text-sm"
            >
              Remember my name, email, and website for future comments.
            </label>
          </div>

          <button
            type="button"
            className="bg-[#1A73E8] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base"
          >
            Post Comment
          </button>
        </form>
      </ScrollAnimation>
    </div>
  );
};

export default CommentsSection;
