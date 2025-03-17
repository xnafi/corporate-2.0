import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUsEmail = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Office Address Card */}
      <div className="bg-gray-200 shadow-lg rounded-lg p-6 text-center">
        <div className="flex justify-center items-center w-16 h-16 bg-orange-500 text-white rounded-full mx-auto mb-4">
          <FaMapMarkerAlt size={24} />
        </div>
        <h3 className="text-lg font-semibold">Office Address</h3>
        <p className="text-gray-600 text-sm mt-2">
          4517 Washington Ave, Manchester, Kentucky 39495, USA
        </p>
      </div>

      {/* Phone Number Card */}
      <div className="bg-gray-200 shadow-lg rounded-lg p-6 text-center">
        <div className="flex justify-center items-center w-16 h-16 bg-orange-500 text-white rounded-full mx-auto mb-4">
          <FaPhoneAlt size={24} />
        </div>
        <h3 className="text-lg font-semibold">Phone Number</h3>
        <p className="text-gray-600 text-sm mt-2">
          (704) 555-0127, (225) 555-0118 <br /> (209) 555-0104
        </p>
      </div>

      {/* Email Address Card */}
      <div className="bg-gray-200 shadow-lg rounded-lg p-6 text-center">
        <div className="flex justify-center items-center w-16 h-16 bg-orange-500 text-white rounded-full mx-auto mb-4">
          <FaEnvelope size={24} />
        </div>
        <h3 className="text-lg font-semibold">Email Address</h3>
        <p className="text-gray-600 text-sm mt-2">
          dolores.chambers@example.com <br /> sara.cruz@example.com
        </p>
      </div>
    </div>
  );
};

export default ContactUsEmail;
