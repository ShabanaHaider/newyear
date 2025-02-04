import Image from "next/image"; 
import Link from "next/link";

export default function Shop() {
  return (
    <div className="w-full">
      {/* Main Image Section */}
      <div className="relative flex justify-center bg-white py-10">
        <Image
          src="/shopmainpic.png"
          alt="shopmainpic"
          width={1440}
          height={316}
          className="cursor-pointer"
        />

        <div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          font-bold text-4xl text-black"
        >
          <Image
            src="/Meubel House_Logos-05.png"
            alt="MEUELLOGO"
            width={77}
            height={77}
          />
          <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
            CONTACT
          </h2>
        </div>

        <div className="flex absolute top-1/4 mt-20 justify-center items-center gap-6">
          <div className="text-xs text-gray-800">
            <p>Home</p>
          </div>
          <div>
            <img src="/tinyrightarrow.png" alt="rightarrow" />
          </div>
          <div>
            <p className="text-xs text-gray-800">Contact</p>
          </div>
        </div>
      </div>

      {/* Form and Card Total Section */}
      <div className="flex justify-between mt-14 px-10">
        {/* Card Totals Box on the left */}



        <div className="flex flex-col items-center w-[393px] h-[450px] bg-[#f9f1e7] p-14">
  <div className="flex flex-col gap-10 mt-10">
    
    {/* Address Section */}
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <img src="/addressicon.png" alt="address icon" className="w-full h-full" />
      </div>
      <div className="flex flex-col ml-4">
        <p className="text-normal text-black font-bold">Address</p>
        <p className="text-xs mt-1 text-black">236 5th SE Avenue, New York NY10000, United States</p>
      </div>
    </div>

    {/* Phone Section */}
    <div className="flex items-center mt-4">
      <div className="w-12 h-12 mr-4">
        <img src="/phoneicon.png" alt="phone icon" className="w-full h-full" />
      </div>
      <div className="flex flex-col ml-4">
        <p className="text-normal text-black font-bold">Phone</p>
        <p className="text-xs mt-1 text-black">Mobile: +(84) 546-6789<br/>Hotline: +(84) 456-6789</p>
      </div>
    </div>

    {/* Working Time Section */}
    <div className="flex items-center mt-4">
      <div className="w-12 h-12 mr-4">
        <img src="/workingtime.png" alt="working time icon" className="w-full h-full" />
      </div>
      <div className="flex flex-col ml-4">
        <p className="text-normal text-black font-bold">Working Time</p>
        <p className="text-xs mt-1 text-black">Monday-Friday: 9:00 - 22:00<br/>Saturday-Sunday: 9:00 - 21:00</p>
      </div>
    </div>

  </div>

        </div>

        {/* Form Section on the right */}
        <div className="w-2/3">
          <h1 className="text-4xl font-bold uppercase text-center">
            Get In Touch with us
          </h1>

          <p className="text-xs justify-center ml-[200px] mt-1 text-center text-[#797575] w-[644px] h-[48px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>

          <form className="mt-30 flex flex-col gap-8 justify-center items-center">
            <input
              type="text"
              className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your Name"
            />

            <input
              type="email"
              className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />

            <input
              type="text"
              className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Subject"
            />

            <input
              type="text"
              className="p-8 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Message"
            />

            <button
              type="submit"
              className="py-3 px-7 rounded-lg bg-[#B88E2F] text-white hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-4 items-center mt-4 w-full h-[270px] bg-[#f9f1e7]">
        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <img src="/trophy 1.png" alt="trophy" />
          </div>
          <div className="text-black w-[157px] h-[38px]">
            <p className="font-bold">High Quality</p>
            <p className="w-[267px] h-[30px] text-xs text-black">Created from top materials</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <img src="/guarantee.png" alt="warranty" />
          </div>
          <div className="text-black w-[157px] h-[38px]">
            <p className="font-bold">Warranty Protection</p>
            <p className="w-[267px] h-[30px] text-xs text-black">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <img src="/shipping.png" alt="freeshipping" />
          </div>
          <div className="text-black w-[157px] h-[38px]">
            <p className="font-bold">Free shipping</p>
            <p className="w-[267px] h-[30px] text-xs text-black">Order above 150 $</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-[60px] h-[60px]">
            <img src="/customer-support.png" alt="support" />
          </div>
          <div className="text-black w-[157px] h-[38px]">
            <p className="font-bold">24/7 support</p>
            <p className="w-[267px] h-[30px] text-xs text-black">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
