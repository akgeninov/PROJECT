import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos";

function Faq() {
  const [dataFaq, setDataFaq] = useState([
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quidem",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ducimus, provident, qui dicta, consectetur sequi impedit libero consequatur molestias dolore dolores. Laboriosam tempore fugit, provident beatae inventore quam mollitia aut.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quidem",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ducimus, provident, qui dicta, consectetur sequi impedit libero consequatur molestias dolore dolores. Laboriosam tempore fugit, provident beatae inventore quam mollitia aut.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quidem",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ducimus, provident, qui dicta, consectetur sequi impedit libero consequatur molestias dolore dolores. Laboriosam tempore fugit, provident beatae inventore quam mollitia aut.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, quidem",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ducimus, provident, qui dicta, consectetur sequi impedit libero consequatur molestias dolore dolores. Laboriosam tempore fugit, provident beatae inventore quam mollitia aut.",
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" flex flex-col justify-start items-center mt-[60px] lg:mt-[160px] px-[10px] lg:px-0 w-full lg:w-[900px] gap-[52px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-[22px] lg:text-[40px] w-[208px] lg:w-auto  font-bold leading-[32px] lg:leading-[60px] text-black500 text-center"
      >
        Pertanyaan Seputar Growlab
      </h1>
      <Accordion defaultIndex={[0]} allowMultiple className="w-full">
        {dataFaq.map((faq, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className=" text-[16px] lg:text-[22px] font-medium leading-[24px] lg:leading-[32px] text-black400 p-[24px]"
                >
                  {faq.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p className="p-[24px] text-[14px] lg:text-[16px] font-light leading-[24px] text-black400">
                {faq.answer}
              </p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
