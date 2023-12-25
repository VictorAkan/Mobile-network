import Image from "next/image";

interface FeatProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  detail: string;
}

const CharSite = ({ backgroundImage, title, subtitle, detail }:FeatProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6
      lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
        <div className="rounded-full bg-blue-500 p-4">
          <Image 
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
        </div>

        <div className="flexCenter gap-6">
          <p className="text-gray-300 xl:max-w-[520px]">{detail}</p>
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <div>
      <section className="2xl:max-container relative 
      flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8
        overflow-x-auto lg:h-[400px] xl:h-[240px]">
          <CharSite 
            backgroundImage="bg-bg-img-1"
            title="24/7 Customer Support"
            subtitle="Global service"
            detail="Do you have a question? Rest assured that our customer service representative will respond appropriately."
          />
          <CharSite 
            backgroundImage="bg-bg-img-2"
            title="Services at a Low Cost"
            subtitle="Save money"
            detail="You can now get a significant discount on all of our services by becoming an agent."
          />
          <CharSite 
            backgroundImage="bg-bg-img-3"
            title="Swift Delivery"
            subtitle="Fast subscription"
            detail="All of our goods and services at newtimeplug are delivered instantly together without delay."
          />
        </div>

        <div className="flexEnd mt-10 px-6 lg:-mt-32 lg:mr-6">
          <div className="bg-blue-700 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-26 xl:py-20 relative
          w-full overflow-hidden rounded-3xl">
            <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
              <strong>Feeling Lost</strong> And not Knowing the Next Step?
            </h2>
            <p className="regular-14 xl:regular-16 mt-5 text-white">
              Stay connected wherever you roam. Never run out of talk, text, or data. Top up in seconds, keep the conversation flowing. Recharge with confidence, stay powered for life.
            </p>
            <Image 
              src="/quote.svg"
              alt="camp-2"
              width={186}
              height={219}
              className="camp-quote"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
