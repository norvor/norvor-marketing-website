
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-xl p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Ready to Unify Your Business?
                    </h2>
                    <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Stop wrestling with fragmented data and inefficient workflows. Gain the control, oversight, and understanding your business deserves.
                    </p>
                    <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
                        Start Your 14-Day Free Trial
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
