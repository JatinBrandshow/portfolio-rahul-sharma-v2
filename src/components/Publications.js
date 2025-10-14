import { publications } from "@/app/Json/PublicationsData";
import React from "react";

const Publications = () => {
    return (
        <>
            <section id="publications" className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-white mb-8">Selected Publications</h2>

                <div className="grid gap-8">
                    {publications.map((pub, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
                            <span className="text-orange-400 font-semibold">{pub.year}</span>
                            <h3 className="text-2xl font-bold text-white mt-2">{pub.title}</h3>
                            <p className="text-gray-400 italic mt-1">{pub.authors}</p>
                            <p className="text-gray-300 font-medium mt-2">{pub.journal}</p>
                            <p className="text-gray-400 mt-4">{pub.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Publications;
