
import React from 'react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '49',
    period: '/month',
    description: 'Perfect for a single team looking to solve a specific problem.',
    features: [
      '1 Core Module (CRM, PM, or HR)',
      'The Organiser',
      'Sandbox Environment',
      'Standard Data Labs Connectors',
    ],
    isFeatured: false,
  },
  {
    name: 'Pro',
    price: '99',
    period: '/month',
    description: 'For collaboration across teams and deeper business insights.',
    features: [
      'All Core Modules (CRM, PM, HR)',
      'The Organiser & Sandbox',
      'Executive Control Center',
      'Advanced Data Labs Connectors',
    ],
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    description: 'For the entire organization with custom needs and support.',
    features: [
      'Everything in Pro, plus:',
      'Custom Module Configuration',
      'Dedicated Account Manager',
      'Advanced Security & RBAC',
    ],
    isFeatured: false,
  },
];

const PricingCard: React.FC<PricingTier> = ({ name, price, period, description, features, isFeatured }) => (
    <div className={`border-2 rounded-lg p-8 flex flex-col ${isFeatured ? 'border-indigo-500 bg-slate-800' : 'border-slate-700 bg-slate-800/50'}`}>
        {isFeatured && <div className="text-center text-sm font-bold text-indigo-400 mb-4">MOST POPULAR</div>}
        <h3 className="text-2xl font-bold text-white text-center">{name}</h3>
        <div className="mt-4 text-center text-gray-300">
            {price.startsWith('Contact') ?
                <span className="text-4xl font-extrabold text-white">{price}</span> :
                <>
                    <span className="text-4xl font-extrabold text-white">${price}</span>
                    <span className="text-base font-medium text-gray-400">{period}</span>
                </>
            }
        </div>
        <p className="mt-4 text-center text-gray-400 h-16">{description}</p>
        <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <svg className="flex-shrink-0 h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-auto pt-8">
            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${isFeatured ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-gray-200'}`}>
                {name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
            </button>
        </div>
    </div>
);


const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Pricing That Scales With You</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Start with what you need, expand when you're ready. Our flexible model ensures you only pay for the value you get.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
