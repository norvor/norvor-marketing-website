
import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Data Labs is a revelation. We connected our CRM and accounting data in minutes, giving us a true understanding of project profitability for the first time.",
    name: 'Sarah Johnson',
    title: 'COO, Innovate Inc.',
    avatar: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: "The Executive Control Center gives me the 'bird's-eye view' I've always wanted. I can finally trust the numbers I'm presenting to our board.",
    name: 'Michael Chen',
    title: 'CEO, DataDriven Co.',
    avatar: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: "We mapped our entire sales process in The Organiser and used that insight to justify adopting the CRM module just for that team. The flexibility is incredible.",
    name: 'Jessica Rodriguez',
    title: 'Head of Operations, Quantum Solutions',
    avatar: 'https://picsum.photos/id/1027/100/100',
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, title, avatar }) => (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <img className="w-20 h-20 rounded-full mb-4 border-4 border-slate-700" src={avatar} alt={name} />
        <p className="text-gray-300 italic mb-6">"{quote}"</p>
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-indigo-400">{title}</div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Loved by Teams Worldwide</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our customers have to say.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
