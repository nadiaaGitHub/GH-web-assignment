import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative bg-white pt-28">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/background.jpeg"
                    alt="Sindh Governor House"
                    layout="fill"
                    objectFit="cover"

                    className="opacity-40"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-12 lg:py-20 px-6 lg:px-16">
                {/* Left Section: Text */}
                <div className="text-center lg:text-left max-w-lg">

                    <h1 className="text-4xl lg:text-5xl font-bold text-blue-900">
                        Governor Sindh
                    </h1>
                    <p className="text-2xl font-medium text-gray-700">
                        Kamran Khan Tessori
                    </p>
                    <p className="mt-4 text-xl lg:text-2xl text-blue-600 font-semibold">
                        Certified Cloud Applied Generative AI Engineer (GenEng)
                    </p>
                    <p className="mt-2 text-lg text-gray-800">
                        Earn up to <span className="text-blue-600">$5,000 / month</span>
                        <br />
                        Now admissions are open in Hyderabad
                    </p>
                    <button className="mt-6 px-6 py-2 bg-blue-900 text-white text-lg rounded-md hover:bg-blue-700">
                        Apply Now
                    </button>
                    <p className="mt-4 text-gray-600">
                        <span className="font-bold text-black">562,143</span> Accepted Applications
                    </p>
                </div>

                {/* Right Section: Image */}
                <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
                    <Image
                        src="/images/Kamran.jpg"
                        alt="Governor Kamran Khan Tessori"
                        width={600}
                        height={1080}
                        className=" rounded-xl shadow-lg object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
