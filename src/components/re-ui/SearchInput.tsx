
export default function SearchInput() {
    return (
      <div className="w-[200px] flex justify-end h-full items-center">
        <div className="group pl-3 overflow-hidden w-[40px] h-[40px] bg-[#1a73e8] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex items-center transition-all duration-300 hover:w-[250px] focus-within:w-[250px]">
          <div className="flex items-center justify-center fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
          />
        </div>
      </div>
    );
}
