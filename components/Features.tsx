
import React from 'react';

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12.75l9-9m0 0l-9 9m9-9v12.75m1.5-15.562c1.062.073 1.987.16 2.813.246a11.94 11.94 0 014.28 1.135 11.94 11.94 0 014.043 4.043 11.94 11.94 0 011.135 4.28 11.948 11.948 0 01-.246 2.813" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75l-9 9m0 0l9 9m-9-9h12.75" />
        </svg>
    ),
    title: 'Control with Data Labs',
    description: 'Pool data from all your tools. Visually join datasets to create a single source of truth and unlock deep insights without writing a single line of SQL.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l1 1.5m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.5-1.5l-1-1.5m1 1.5h7.5" />
      </svg>
    ),
    title: 'Oversight with Executive Control Center',
    description: 'Get a high-level, synthesized view of company performance. Track KPIs, identify trends, and make confident, data-driven decisions from a single dashboard.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.456-2.456L12.75 18l1.178-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456l1.178.398-1.178.398a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: 'Understanding via Organiser & Sandbox',
    description: 'Map your entire business process with The Organiser, then foster innovation in the Sandbox. Seamlessly turn great ideas into actionable projects.',
  },
   {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M12 2.25V4.5m4.5 4.5l2.25-1.313M16.5 9l-2.25 1.313M16.5 9V6.75m-12 0L12 2.25l2.25 1.313M4.5 6.75L12 11.25l7.5-4.5M4.5 6.75V9m12-2.25V9" />
        </svg>
    ),
    title: 'Integrated Application Modules',
    description: 'Power your teams with fully-featured CRM, Project Management, and HR modules, all working together in one seamless ecosystem.',
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    title: 'Granular, Flexible Licensing',
    description: 'Escape rigid, all-or-nothing contracts. With Norvorx, you purchase licenses for specific modules only for the teams that need them.',
  },
  {
    icon: (
        <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
    ),
    title: 'Enterprise-Grade Security',
    description: 'Built on a foundation of Role-Based Access Control (RBAC), your data is protected with industry-leading security and encryption.',
  },
];

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
    <div className="bg-slate-800 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:bg-slate-700/50">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Features: React.FC = () => {
  return (
    <section id="platform" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">A Platform Built For Clarity</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Norvorx isn't just another tool. It's an integrated ecosystem designed to solve the core challenges of modern business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
