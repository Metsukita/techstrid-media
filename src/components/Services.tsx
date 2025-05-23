import React from 'react';

const services = [
	{
		title: 'Implementação de CRM Comercial',
		icon: '/icons/crm.svg',
	},
	{
		title: 'Treinamento comercial',
		icon: '/icons/training.svg',
	},
	{
		title: 'Gerenciamento do Facebook Ads',
		icon: '/icons/facebook.svg',
	},
	{
		title: 'Gerenciamento do Google Ads',
		icon: '/icons/google.svg',
	},
	{
		title: 'Gerenciamento em Youtube Ads',
		icon: '/icons/youtube.svg',
	},
	{
		title: 'Elaboração de landing page de alta conversão',
		icon: '/icons/landing.svg',
	},
	{
		title: 'Elaboração de criativos de alta conversão',
		icon: '/icons/creative.svg',
	},
	{
		title: 'Consultoria Estratégica',
		icon: '/icons/consulting.svg',
	},
];

const Services: React.FC = () => {
	return (
		<section id="services" className="py-20 bg-black text-white">
			<div className="container text-center">
				<h2 className="text-4xl font-extrabold mb-4">
					Nossos principais{' '}
					<span className="underline decoration-orange-400 decoration-4 underline-offset-8">
						serviços
					</span>
					:
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
					{services.map((service, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center justify-center border border-orange-500 bg-black rounded-md py-10 px-4 min-h-[180px] min-w-[220px] shadow-lg hover:scale-105 transition-all duration-200"
						>
							<img
								src={service.icon}
								alt={service.title}
								className="h-14 mb-4"
							/>
							<span className="font-semibold text-lg leading-tight text-white mt-2">
								{service.title}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;