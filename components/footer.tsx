
import { Icons } from "@/components/icons"

export function Footer() {
  return (
    <section
    id="footer"
    className="w-full h-full bg-[url('/images/footer/bg.png')] bg-center"
  >
    <div className="bg-primary opacity-[88%] py-12 lg:py-20 ">
      <div className="container text-primary-foreground text-center md:flex gap-6 justify-between">
        <div className="space-y-4 max-md:px-12 md:w-1/3 ">
          <img className="max-md:mx-auto" src="/images/footer/logo.svg" alt="logo" />
          <p className="font-normal md:text-left">
            If you would like to say hello or ask a general question, please
            get in touch.
          </p>
        </div>
        <div className="max-md:mt-8 max-sm:space-y-8 sm:flex sm:justify-between md:justify-end gap-6 lg:gap-20 md:w-2/3">
          <div className="space-y-4 sm:w-1/2">
            <h2 className="text-primary-foreground text-3xl font-dmserif font-normal sm:text-left">
              Contacts
            </h2>
            <div className="flex gap-2 max-sm:justify-center">
              <Icons.mail
                strokeWidth={1.5}
                className="flex-none cursor-pointer rotate-0 scale-100 transition-all"
              />
              <p>info@summertwilight.lk</p>
            </div>
            <div className="flex gap-2 max-sm:justify-center">
              <Icons.phone
                strokeWidth={1.5}
                className="flex-none cursor-pointer rotate-0 scale-100 transition-all"
              />
              <p>info@summertwilight.lk</p>
            </div>
            <div className="flex gap-2 max-sm:justify-center max-sm:items-center">
              <Icons.map
                strokeWidth={1.5}
                className="flex-none cursor-pointer rotate-0 scale-100 transition-all"
              />
              <p className="sm:text-left">
                44/5 Pitawella Road, Malani Bulathsinghala Mawatha,
                Boralesgamuwa 10290 Colombo, Sri Lanka
              </p>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h2 className="text-primary-foreground text-3xl font-dmserif font-normal sm:text-right ">
                Working Hours
              </h2>
              <div className="flex gap-2 justify-center sm:justify-end">
                <Icons.clock
                  strokeWidth={1.5}
                  className="flex-none"
                />
                <p>Always open</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="mt-12 text-primary-foreground text-3xl font-dmserif font-normal sm:text-right ">
                Social Media
              </h2>
              <div className="flex gap-2 justify-center sm:justify-end">
                <Icons.facebook
                  strokeWidth={1.5}
                  className="cursor-pointer"
                />
                <Icons.instagram
                  strokeWidth={1.5}
                  className="cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}