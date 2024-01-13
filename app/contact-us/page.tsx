import MaterialIcon from "@/components/material-icon"
import { ContactUsForm } from "./(components)/contact-us-form"

export default function ContactUsPage() {
  return (
    <div>
      <section>
        <div className="relative h-screen max-h-[480px]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{
              backgroundImage: 'url("images/home/contact-us.webp")',
              filter: "blur(6px)",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-primary opacity-40 z-1"></div>
          <div className="relative h-[480px] z-10 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-dmserif font-medium mb-4 text-white">
              Contact Us
            </h1>
            <h2 className="text-lg font-light text-white">
              Feel free to contact us for any inquiries.
            </h2>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mb-11">
          <div className="mx-12">
            <h1 className="text-4xl font-normal tracking-tight mb-5">
              Contacts
            </h1>
            <div className="grid lg:grid-cols-3 gap-20">
              <div className=" space-y-4">
                <div className="flex cursor-pointer gap-2 max-sm:justify-center">
                  <MaterialIcon
                    className="mt-0.5 flex-none text-primary"
                    icon={"mail"}
                    fill
                  />
                  <p>info@summertwilight.lk</p>
                </div>
                <div className="flex gap-2 max-sm:justify-center">
                  <MaterialIcon
                    className="mt-0.5 flex-none text-primary"
                    icon={"call"}
                    fill
                  />
                  <p>info@summertwilight.lk</p>
                </div>
                <div className="flex gap-2 max-sm:items-center max-sm:justify-center sm:items-start">
                  <MaterialIcon
                    className="mt-0.5 flex-none text-primary"
                    icon={"location_on"}
                    fill
                  />
                  <p className="sm:text-left">
                    44/5 Pitawella Road, Malani Bulathsinghala Mawatha,
                    Boralesgamuwa 10290 Colombo, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <p>
                  We're not just photographers, we're memory makers. Our passion
                  is to create timeless images that capture the essence of your
                  love and the beauty of your relationship. We're committed to
                  creating beautiful, high-quality photos that showcase the true
                  magic of your special day. Let us help you tell your love
                  story and create memories that will last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full">
          <iframe
            title="map"
            className="w-full"
            height="328"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJG7o7JhVb4joRMQAjALEA9lo&key=AIzaSyDqkkg1g6YKOQ37Axf_WsSjfOo93DyFwco"
          ></iframe>
        </div>
      </section>
      <section className="py-8 md:py-12 lg:py-16 bg-secondary">
        <div className="container">
        <h1 className="text-4xl text-center font-normal tracking-tight mb-5">Get in Touch</h1>
        <ContactUsForm />
        </div>
        </section>
    </div>
  )
}
