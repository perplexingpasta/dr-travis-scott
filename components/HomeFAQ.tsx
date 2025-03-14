import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const HomeFAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          How do I book an appointment with Dr. Varun in Delhi?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          You can easily book an appointment by calling us or visiting our
          website. Walk-ins are also welcome, but we recommend booking in
          advance to avoid wait times.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-9">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          How much is the consultation fee?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          Our walk-in consultation is ₹750 only. <br /> This consultation will
          be valid for the next 90 days from the day of your consultation. Visit
          us now!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          Do you offer treatments for hair loss?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          Yes, we provide specialized treatments for hair loss, including plasma
          reach therapy, hair transplants, and other advanced treatments to
          promote hair growth and restore volume.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          Are the treatments safe?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          Absolutely!
          <br />
          All our treatments are carried out by experienced dermatologists using
          the latest technologies and techniques. We follow stringent safety
          protocols to ensure effective and safe results.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          Do you offer cosmetic dermatology services?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          Yes, we offer a variety of cosmetic dermatology treatments such as
          Anti-wrinkle treatment, fillers, skin rejuvenation, chemical peels,
          and anti-aging solutions designed to enhance your skin’s appearance.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          How soon can I see results from the treatments?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          Results vary depending on the treatment and individual skin
          conditions. Some treatments may show results after just one session,
          while others may require multiple sessions for optimal results.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          Do you accept insurance?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          Most cosmetic procedures are not covered by insurance. However, for
          medical dermatology services, we recommend checking with your
          insurance provider to confirm coverage.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default HomeFAQ;
