import ImageHeader from "@/components/img-header"
import { QuoteForm } from "./(components)/quote-form"

export default function RequestAQuotePage() {
  return (
    <div>
      <ImageHeader
        img="images/home/contact-us.webp"
        title="Request a Quote"
        subtitle="Feel free to contact us for any inquiries."
      />
      <div className="container space-y-8 py-8 md:py-12 lg:py-24">
        <p className="text-center text-base font-normal leading-7">
          Reserve your big day with us! <br />
          Please complete this simple form and we will contact you as soon as possible.
        </p>
        <div className="mx-auto md:w-10/12">
        <QuoteForm />
        </div>   
      </div>
    </div>
  )
}
