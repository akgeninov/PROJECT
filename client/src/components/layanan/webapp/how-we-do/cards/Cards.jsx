import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos";

function Cards({dataCards}) {
    const Card = ({ title, description }) => {
        return (
                <div className="border border-gray-200 text-gray-400 shadow-lg rounded-lg p-6 gap-y-10 transition duration-300 transform hover:bg-white hover:text-black mb-4">
                    <h2 className="text-[22px] font-bold  mb-[10px]">{title}</h2>
                    <p className=" text-[16px]">{description}</p>
                </div>
        );
    };
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
            <div>
                {dataCards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} />
                    ))}
            </div>
    );
}

export default Cards