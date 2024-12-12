import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I search for properties on Houzez?",
      answer:
        "You can use our advanced search filters to find properties based on location, price range, property type, and other preferences. Simply visit the 'Properties' section and start your search.",
    },
    {
      question: "Are the property listings verified?",
      answer:
        "Yes, we ensure all property listings on Houzez are verified and up-to-date, providing accurate information for a reliable search experience.",
    },
    {
      question: "Can I schedule a property viewing through Houzez?",
      answer:
        "Absolutely! Once you find a property you're interested in, you can contact the listing agent or owner directly to schedule a viewing.",
    },
    {
      question:
        "Does Houzez offer assistance with buying or renting a property?",
      answer:
        "Yes, our expert team is here to guide you through the process. From finding the right property to completing the transaction, we're committed to making your experience hassle-free.",
    },
    {
      question: "How do I list my property on Houzez?",
      answer:
        "You can list your property by signing up as a seller or agent, filling out the listing form, and uploading photos. Our team will review your submission to ensure it meets our standards before it goes live.",
    },
  ];

  return (
    <div>
      <SectionTitle subHeading={"Question"} heading={"Frequently asked"} />
      <div className="w-3/4 mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-2 border-2 px-2 border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left text-lg font-medium text-gray-800 py-2 focus:outline-none flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="my-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
