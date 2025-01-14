import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          How much is the consultation fee?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          1000 bucks for real
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          At what time is the doctor available?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          On weekdays, from 10am and till 5pm in the evening. <br />
          Who knows about the weekends lol
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          Are the treatments safe?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          fosho
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          How do I book an appointment?
        </AccordionTrigger>
        <AccordionContent className="opacity-75 md:text-lg lg:text-xl">
          You can easily book an appointment by calling us or visiting our
          website. Walk-ins are also welcome, but we recommend booking in
          advance to avoid wait times.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="md:text-lg lg:text-xl">
          How soon can I become pretty?
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

export default FAQ;
