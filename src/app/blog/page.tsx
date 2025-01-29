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
          <h2 className="absolute top-1/4 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold 
          text-4xl text-black">
            BLOG
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
            <p className="text-xs text-gray-800">Blog</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex w-full justify-center bg-white">
        {/* Left Container with Sub-containers */}
        <div className="w-[820px] h-[2490px] bg-white flex flex-col gap-6">
          {/* First box of left side */}
          <div className="w-full h-[794px] bg-white">

            <div className="relative flex flex-col justify-center bg-white py-10">
              <Image
                src="/blogmain1.png"
                alt="blogleftimage1"
                width={1440}
                height={316}
                className="cursor-pointer"
              />

              {/* Small images in a row right below the main image */}
              <div className="flex justify-start gap-6 mt-4">
                <div className="w-[80px] h-[24px]">
                  <img src="/admin.png" alt="admin" />
                </div>
                <div className="w-[121px] h-[24px]">
                  <img src="/date.png" alt="date" />
                </div>
                <div className="w-[78px] h-[24px]">
                  <img src="/wood.png" alt="wood" />
                </div>
              </div>

              {/* Heading below the small images */}
              <div className="flex flex-col gap-2 mt-2 text-black justify-start text-2xl">
                <p className="text-left font-bold w-[517px] h-[45px]">
                  Going all-in with millennial design
                </p>

                <p className="text-xs justify-normal w-[817px] h-[115px]">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur 
                 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem 
                 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua..incididunt ut incididunt ut labore et dolore magna aliqua..
                 incididunt ut incididunt ut labore et dolore magna aliqua..incididunt ut
                 
                </p> 

                <p> <img src="/readmore.png" alt="see more" />       </p>


              </div>
            </div>
          </div>




          {/* Second box of left side */}


          <div className="w-full h-[794px] bg-white">

            <div className="relative flex flex-col justify-center bg-white py-10">
              <Image
                src="/blogmain2.png"
                alt="blogleftimage2"
                width={1440}
                height={316}
                className="cursor-pointer"
              />

              {/* Small images in a row right below the main image */}
              <div className="flex justify-start gap-6 mt-4">
                <div className="w-[80px] h-[24px]">
                  <img src="/admin.png" alt="admin" />
                </div>
                <div className="w-[121px] h-[24px]">
                  <img src="/date.png" alt="date" />
                </div>
                <div className="w-[78px] h-[24px]">
                  <img src="/wood.png" alt="wood" />
                </div>
              </div>

              {/* Heading below the small images */}
              <div className="flex flex-col gap-2 mt-2 text-black justify-start text-2xl">
                <p className="text-left font-bold w-[517px] h-[45px]">
                Exploring new ways of decorating
                </p>

                <p className="text-xs justify-normal w-[817px] h-[115px]">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur 
                 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem 
                 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua..incididunt ut incididunt ut labore et dolore magna aliqua..
                 incididunt ut incididunt ut labore et dolore magna aliqua..incididunt ut
                 
                </p> 

                <p> <img src="/readmore.png" alt="see more" />       </p>


              </div>
            </div>
          </div>
          
          {/* Third box of left side */}

          <div className="w-full h-[794px] bg-white">

            <div className="relative flex flex-col justify-center bg-white py-10">
              <Image
                src="/blogmain3.png"
                alt="blogleftimage3"
                width={1440}
                height={316}
                className="cursor-pointer"
              />

              {/* Small images in a row right below the main image */}
              <div className="flex justify-start gap-6 mt-4">
                <div className="w-[80px] h-[24px]">
                  <img src="/admin.png" alt="admin" />
                </div>
                <div className="w-[121px] h-[24px]">
                  <img src="/date.png" alt="date" />
                </div>
                <div className="w-[78px] h-[24px]">
                  <img src="/wood.png" alt="wood" />
                </div>
              </div>

              {/* Heading below the small images */}
              <div className="flex flex-col gap-2 mt-2 text-black justify-start text-2xl">
                <p className="text-left font-bold w-[517px] h-[45px]">
                Handmade pieces that took time to make
                </p>

                <p className="text-xs justify-normal w-[817px] h-[115px]">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur 
                 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem 
                 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                 et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua..incididunt ut incididunt ut labore et dolore magna aliqua..
                 incididunt ut incididunt ut labore et dolore magna aliqua..incididunt ut
                 
                </p> 

                <p> <img src="/readmore.png" alt="see more" />       </p>


                <div className="flex justify-center gap-4">
                        <Image src="/number1.png" alt="1" width={60} height={60} />
                        <Image src="/number2.png" alt="2" width={60} height={60} />
                        <Image src="/number3.png" alt="3" width={60} height={60} />
                        <Image src="/next.png" alt="next" width={98} height={60} />
                      </div>


                      


              </div>
            </div>
          </div>
          </div> 

        {/* Right Container */}
        <div className="w-[620px] h-[2490px] bg-white]">


          {/* first container on right side */}

          <div className=" w-[393px] h-[537px] bg-white">

            <div className="ml-9 mt-7">

          <Image src="/searchbarbox.png" alt="search box" width={311} height={58} />

          <p className="mt-3 ml-4 font-semibold ">Categories</p>


          </div>         
          


<div className="flex flex-col ml-12 mt-6 gap-2 justify-center items-center w-[251px]">
  <div className="flex justify-between w-full h-[24px]">
    <p className="text-black text-left text-sm">Craft</p>
    <p className="text-[#9f9f9f] text-sm">2</p>
  </div>
  <div className="flex justify-between w-full h-[24px]">
    <p className="text-black text-left text-sm">Design</p>
    <p className="text-[#9f9f9f] text-sm">6</p>
  </div>
  <div className="flex justify-between w-full h-[24px]">
    <p className="text-black text-left text-sm">Handmade</p>
    <p className="text-[#9f9f9f] text-sm">7</p>
  </div>
  <div className="flex justify-between w-full h-[24px]">
    <p className="text-black text-left text-sm">Interior</p>
    <p className="text-[#9f9f9f] text-sm">1</p>
  </div>
  <div className="flex justify-between w-full h-[24px]">
    <p className="text-black text-left text-sm">Wood</p>
    <p className="text-[#9f9f9f] text-sm">8</p>
  </div>
</div>


          </div>

          {/* second container on right side */}

          <p className="mt-3 ml-6 font-semibold ">Recent Post</p>



<div className="flex flex-row ml-12 mt-6 gap-4 items-center w-[320px]">
  <Image src="/blogsmall1.png" alt="blogsmall1" width={80} height={80} />
  <div className="flex flex-col">
    <p className="text-black text-left text-sm">Going all in with millennial design</p>
    <p className=" text-left text-xs text-gray-500">03 Aug 2022</p>
  </div>
</div>


<div className="flex flex-row ml-12 mt-6 gap-4 items-center w-[320px]">
  <Image src="/blogsmall2.png" alt="blogsmall2" width={80} height={80} />
  <div className="flex flex-col">
    <p className="text-black text-left text-sm">Going all in with millennial design</p>
    <p className=" text-left text-xs text-gray-500">03 Aug 2022</p>
  </div>
</div>



<div className="flex flex-row ml-12 mt-6 gap-4 items-center w-[320px]">
  <Image src="/blogsmall3.png" alt="blogsmall3" width={80} height={80} />
  <div className="flex flex-col">
    <p className="text-black text-left text-sm">Going all in with millennial design</p>
    <p className=" text-left text-xs text-gray-500">03 Aug 2022</p>
  </div>
</div>


<div className="flex flex-row ml-12 mt-6 gap-4 items-center w-[320px]">
  <Image src="/blogsmall4.png" alt="blogsmall4" width={80} height={80} />
  <div className="flex flex-col">
    <p className="text-black text-left text-sm">Going all in with millennial design</p>
    <p className=" text-left text-xs text-gray-500">03 Aug 2022</p>
  </div>
</div>


<div className="flex flex-row ml-12 mt-6 gap-4 items-center w-[320px]">
  <Image src="/blogsmall5.png" alt="blogsmall5" width={80} height={80} />
  <div className="flex flex-col">
    <p className="text-black text-left text-sm">Going all in with millennial design</p>
    <p className=" text-left text-xs text-gray-500">03 Aug 2022</p>
  </div>
</div>


         
        </div>
      </div>



      <div className="grid grid-cols-4 items-center mt-[54px] w-full h-[270px] bg-[#f9f1e7] px-6">
        <div className="flex items-center space-x-4">
          <Image src="/trophy 1.png" alt="trophy" width={60} height={60} />
          <div>
            <p className="font-bold text-black">High Quality</p>
            <p className="text-xs text-black">Created from top materials</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/guarantee.png" alt="warranty" width={60} height={60} />
          <div>
            <p className="font-bold text-black">Warranty Protection</p>
            <p className="text-xs text-black">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/shipping.png" alt="freeshipping" width={60} height={60} />
          <div>
            <p className="font-bold text-black">Free Shipping</p>
            <p className="text-xs text-black">Order above $150</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/customer-support.png" alt="support" width={60} height={60} />
          <div>
            <p className="font-bold text-black">24/7 Support</p>
            <p className="text-xs text-black">Dedicated support</p>
          </div>
        </div>
      </div>

    </div>

    




  );
}
