

import Image from "next/image";
import ParentComponent from "./components/ParentComponent";
import ParentComponentproducts from "./components/ParentComponentproducts";
import Link from "next/link";
import Shop from "./shop";
import Cart from "./cart";

import './globals.css';

export default function Home() {
  return (
    <div>
      {/* Image Section */}
      <div className="h-screen justify-center overflow-x-hidden items-center mt-0 w-full flex mx-auto relative">
        <div className="relative justify-center w-full">
          {/* Main Image */}
          <Image
            src="/scandinavian.png"
            alt="Interior"
            layout="responsive" // Makes the image responsive
            width={1500} // Original width for responsiveness calculations
            height={718} // Original height for responsiveness calculations
            className="object-cover"
          />

          {/* Rectangle Image positioned to the right */}
          <div
            className="absolute top-1/2 right-[5%] md:items-center transform -translate-y-1/2 w-[80%] max-w-[643px] 
            h-[50%] bg-[#FFF3E3] mr-[100px] flex flex-col justify-start items-start p-6 sm:p-4 md:p-6 lg:p-8"
          >
            <p className="text-sm text-gray-500 mb-4">New Arrival</p>

            <h2 className="text-[#B88E2F] font-extrabold text-xl sm:text-sm md:text-lg lg:text-2xl mb-4 
              sm:max-w-[180px] md:max-w-[200px] lg:max-w-[400px]">
              Discover Our
            </h2>
            <h2 className="text-[#B88E2F] font-extrabold text-xl sm:text-sm md:text-lg lg:text-2xl mb-4 
              sm:max-w-[180px] md:max-w-[200px] lg:max-w-[400px]">
              New Collection
            </h2>

            <ul className="text-[#000000]">
              <li className="mb-4 text-sm sm:text-xs md:text-base lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ipsam veritatis optio autem quam
                consectetur labore eaque excepturi esse blanditiis corrupti sequi sapiente aliquid quibusdam alias,
                mollitia quisquam, perferendis vitae!
              </li>
            </ul>

            <Link href="/product">
              <button className="mt-6 w-[222px] h-[50px] rounded-sm bg-[#B88E2F] text-white sm:text-base font-medium">
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Parent Component */}
      <div>
        <h1 className="text-2xl font-bold text-center mt-8">Browse the Range</h1>
        <p className="max-w-2xl mx-auto mt-4 text-center text-lg text-gray-700">
          May Almighty Allah prevent our holy Land of Pakistan from Evil eyes
          and destroy all those culprits who are looting hard-earned money of
          the innocent people of Pakistan and do not hesitate to shed the
          blood of innocent people for their ulterior motives.
        </p>
        <ParentComponent />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-center mt-8">Our Products</h1>
        <ParentComponentproducts />
      </div>

      <div className="flex justify-center mt-2 items-center">
        <Image src="/showmore.png" alt="showmore" width={245} height={48} />
      </div>

      <div className="flex w-full h-[625px] bg-[#f2eeee] text-black mt-2 items-center">
        <div> 


          <h2 className="font-extrabold justify-left sm:text-xs md:text-1xl lg:text-2xl">50 + Beautiful</h2>
          <h2 className="font-extrabold justify-left sm:text-xs md:text-1xl lg:text-2xl">rooms inspiration</h2>
          <p className="max-w-2xl mx-auto mt-4 text-justify text-lg text-gray-700">
            May Almighty Allah prevent our holy Land of Pakistan.
          </p>
          <button className="mt-6 sm:w-[100] md:w-[150] lg:w-[222px] h-[50px] rounded-sm bg-[#B88E2F] text-white font-medium">
            EXPLORE MORE
          </button>
        </div>

        {/* <div className="flex flex-wrap w-full lg:w-1/4 md:w-1/3 sm:w-1/2 justify-center mt-2 items-center"> */}

        <div className="flex justify-center mt-2 items-center">


          <Image
            src="/innerpeace.png"
            alt="INNER PEACE"            
            width={404}
            height={582}
          />
          <Image
            src="/dinningtable.png"
            alt="dinningtable"            
            width={372}
            height={486}
          />
          <Image
            src="/sidetable.png"
            alt="sidetable"           
            width={372}
            height={486}
          />
        </div>
      </div>


      <div className="flex flex-col items-center h-[100px] bg-white text-black mt-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs">Share your setup with</p>
          <h2 className="font-extrabold text-2xl">#Funiro Furniture</h2>
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex justify-center">
          <Image
            src="/longdivider.png"
            alt="Longdivider"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/orangechair.png"
            alt="Orangechair"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/sheleve.png"
            alt="sheleve"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/laptop.png"
            alt="Laptop"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/livingroom2.png"
            alt="Living Room"
            width={340}
            height={430}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/sidetablestwo.png"
            alt="Side Tables"
            width={340}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/dinningroom2.png"
            alt="Dining Room"
            width={340}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/bednsidebed.png"
            alt="Bed and Side Bed"
            width={340}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/framenvase.png"
            alt="Frame and Vase"
            width={142}
            height={244}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}



