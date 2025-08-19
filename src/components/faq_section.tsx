import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section className="w-full py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-accent mb-8"
          style={{ fontFamily: "var(--font-lexend)" }}
        >
          FAQS
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              What is Scribeverse exactly?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                A web app for writers, fanfic authors, and novelists to create,
                write, and track their projects, join challenges, and keep their
                work organized; all in one platform! Whether you're writing
                original works or 200k words of slow-burn fanfic, this website's
                got your back.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              Is Scribeverse free?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                Yes! Scribeverse is completely free to use.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/*link to sign up area*/}
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              How do I join the beta list?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                To join the beta list, simply sign up here. There are limited
                spots available, so be sure to secure your place!
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              When will the full version be available?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                The full version will be available after the beta testing phase
                is complete, but we don't have a date yet. We'll keep you
                updated on the timeline!
              </p>
            </AccordionContent>
          </AccordionItem>

          {/*link to contact area in footer*/}
          <AccordionItem value="item-5" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              Can I suggest features or report bugs?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                Yes, please do! We'd love your feedback. You can suggest
                features or report bugs through our{" "}
                <Link
                  href="/#contact"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  contact section.
                </Link>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              Why doesn't the web app look exactly like the prototype?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                Protoypes = Ideas. The real web app is being built and will be
                improved over time.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              How can I support the development of Scribeverse?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                Thank you for your interest! You can support by sharing the
                word, and you can donate via Scribeverse's{" "}
                <a
                  href="https://ko-fi.com/scribeverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Ko-fi
                </a>{" "}
                to help us cover hosting, domain, and development costs (After
                all, there is only one girl working on this project!)
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border-none">
            <AccordionTrigger className="bg-primary text-foreground hover:bg-primary/90 px-6 py-4 rounded-lg text-left font-medium text-lg [&[data-state=open]]:rounded-b-none">
              Why do you say "us" or "we" when it's just you?
            </AccordionTrigger>
            <AccordionContent className="bg-accent text-white px-6 py-6 rounded-b-lg">
              <p style={{ fontFamily: "var(--font-lexend)" }}>
                It makes me feel cool. Leave it. (But also, I want to create a
                community around this project!)
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
