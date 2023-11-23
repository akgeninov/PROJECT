import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

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

  return (
    <div className="flex flex-col justify-start items-center mt-[160px] px-[10px] lg:px-0 w-full lg:w-[900px] gap-[52px]">
      <h1 className="text-[40px] font-bold leading-[60px] text-black500 text-center">
        Pertanyaan Seputar Growlab
      </h1>
      <Accordion defaultIndex={[0]} allowMultiple className="w-full">
        {dataFaq.map((faq) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="text-[22px] font-medium leading-[32px] p-[24px]"
                >
                  {faq.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <p className="px-[24px]">{faq.answer}</p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
