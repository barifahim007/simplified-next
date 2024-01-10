"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-medium text-white">
              Ehsanul Bari Fahim
              <br className="hidden lg:inline-block " />
              <span className="text-green-600">
                <Typewriter
                  options={{
                    strings: ["A bad developer", "Don't hire him"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="mb-8 leading-relaxed">
              a passonate web application developer since 2022 . till nothing to
              do in this field for himself lagacy.{" "}
              <span className="text-xl text-red-400"> Warning </span>
              if you want to hire him? It`s all about your own risk!!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Hire me?
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                resume!
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              src="https://aiartshop.com/cdn/shop/products/ai-cat-style-design-artwork-680.webp?v=1673473340"
              width={400}
              height={300}
              alt="image"
              className="rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
