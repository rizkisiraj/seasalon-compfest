import Image from "next/image";
import Header from "./components/header.component";
import Footer from "./components/footer.component";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
            Beauty and Elegance Redefined
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
            "Discover Sea Salon, where Beauty and Elegance are redefined with every visit."
            </p>
          </div>
          <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
            <Image src="/images/photo_1.webp" width={500} height={300} alt="Hero" className="rounded-xl" />
          </div>
          <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="/images/placeholder.png" alt="image" />
          </div>
        </div>
        <div className="mt-0 bg-white lg:mt-40">
          <div className="text-black">
            <div
              className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
            >

              <img
                className="
              mb-24
              inline-block
              w-5/6
              rounded
              object-cover object-center
              lg:hidden
              lg:w-4/6 
            "
                src="/images/placeholder.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold text-4xl font-bold leading-tight text-black lg:text-6xl">
              Services
            </h2>
          </div>
        </div>
        <div className="bg-white text-black">
          <div className="mx-auto flex flex-col items-center px-5 pt-56 lg:flex-row">
            <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Haircuts and styling
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
              Unleash your inner confidence with a haircut and style designed just for you.{" "}
              </p>
            </div>
            <div className="lg:w-full lg:max-w-2xl">
              <img src="/images/photo_hairstyle.webp" alt="img" />
            </div>
          </div>
          <div className="mt-32">
            <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
              <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                <img src="/images/photo_manicure.webp" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Manicure and Pedicure
                </h2>
                <p className="mb-8 font-semibold leading-relaxed text-black">
                Pamper yourself from fingertips to toes with our luxurious manicure and pedicure services.
                </p>
              </div>
              <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                <img src="/images/photo_manicure.webp" alt="img" />
              </div>
            </div>
          </div>
          <div className="my-24 p-4 text-black">
            <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                Facial Treatments
                </h2>
                <p className="text-md mb-8 lg:text-xl">
                Reveal your radiant skin with our customized facial treatments.
                </p>
              </div>
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="/images/photo_facialTreatment.webp"
                  className="hidden object-cover object-center lg:inline-block"
                  alt="image"
                />
                <img
                  src="/images/photo_facialTreatment.webp"
                  className="inline-block object-cover object-center lg:hidden"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
              <div className="my-6 flex w-full flex-col text-left lg:text-center">
                <h3 className="mb-8 text-5xl font-bold text-black">
                Prepare for Beauty at SEASalon
                </h3>
                <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                Get ready to experience the ultimate in relaxation and style. Book your appointment today and let us bring out the best in you!
                </h3>
              </div>
              <img src="/images/salon_photo.webp" alt="img" />
            </div>
          </div>
          <div className="text-black">
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
