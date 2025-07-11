import React, { useState } from 'react'
import { faqs } from '../constants/index';
import { Plus, Minus } from 'lucide-react';

const Accordion = () => {

    const [ openIndex, setOpenIndex ] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

  return (
    <section className="w-full">

        <div className="w-full flex justify-center">
            <div className="max-w-3xl flex flex-col items-center p-8">
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-300">
                    Got Questions? We’ve Got Answers
                </h1>
                <p className="max-w-lg text-center text-sm mt-2 text-gray-400">
                    Everything you need to know about growing your business with our digital services.
                </p>
            </div>
        </div>

        <div className="w-[80%] mx-auto p-8 border border-neutral-900 rounded-md space-y-4">

            {
                faqs.map((faq, index) => (
                    <div key={faq.id} className="space-y-2 w-full border-b border-neutral-900 py-4">
                        <button 
                            onClick={() => handleToggle(index)}
                            className="text-gray-200 font-semibold flex justify-between w-full cursor-pointer text-l"
                        >
                            {faq.question}
                            {openIndex === index ? 
                                <Minus 
                                    size={20} 
                                    className="text-orange-700"
                                /> : 
                                <Plus 
                                    size={20} 
                                    className="text-orange-700" 
                                />
                            }
                        </button>
                        {
                            openIndex === index && (
                                <p className="max-w-4xl text-gray-300 py-3 px-2 rounded-md bg-gray-950 mb-3">
                                    {faq.answer}
                                </p>
                            )
                        }
                    </div>
                ))
            }

        </div>
      
    </section>
  )
}

export default Accordion
