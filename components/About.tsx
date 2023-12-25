import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Image from "next/image";

const About = () => {
  return (
    <section className="mb-32">
      <div className="lg:flex mx-auto md:px-24 px-10 py-24 items-center">
        
        <div>
          <div className="mb-8">
            <p className="lg:text-left regular-16 text-gray-500 xl:max-w-[520px]">
              With its 24/7 customer service, New Time Plug has you covered. We provide our customers with high-quality service. 
              With our many years of experience and a wealth of client testimonials, our standard service has won the trust of our users. 
              Because of this, we are offering you the chance to profit by working as one of our agents.
            </p>
          </div>
          <div className="mb-10">
            <div className="flex items-center mb-3">
              <IoShieldCheckmarkOutline className="w-8 h-8 text-blue-500" />
              <p className="regular-16 ml-4 bold-16">
                24/7 Customer Support
              </p>
            </div>
            <div className="flex items-center mb-3">
              <IoShieldCheckmarkOutline className="w-8 h-8 text-blue-500" />
              <p className="regular-16 ml-4 bold-16">
                Swift Delivery
              </p>
            </div>
            <div className="flex items-center">
              <IoShieldCheckmarkOutline className="w-8 h-8 text-blue-500" />
              <p className="regular-16 ml-4 bold-16">
                Services at a Low Cost
              </p>
            </div>
          </div>
          <div>
            <button className="bg-blue-700 uppercase rounded-3xl p-5 text-white hover:bg-blue-600">
              become a member
            </button>
          </div>
        </div>

        <div className="mt-10">
          <Image 
            src="/aboutimg.jpg"
            alt="aboutimg"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  )
}

export default About