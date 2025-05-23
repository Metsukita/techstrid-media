import React from 'react';

const services = [
	{
		title: 'Implementação de CRM Comercial',
		description:
			'Organize e potencialize seu setor comercial com as melhores ferramentas e processos.',
		icon: 'https://cdn.jsdelivr.net/gh/tabler/icons@latest/icons/brand-hubspot.svg', // CRM
		iconColor: 'text-orange-500',
	},
	{
		title: 'Treinamento Comercial',
		description:
			'Capacite sua equipe para converter mais e melhor, com técnicas modernas e acompanhamento.',
		icon: 'https://cdn.jsdelivr.net/gh/tabler/icons@latest/icons/school.svg', // Treinamento
		iconColor: 'text-emerald-500',
	},
	{
		title: 'Gestão de Anúncios',
		description:
			'Facebook, Google, Youtube Ads e mais. Gestão completa para gerar oportunidades reais.',
		icon: 'https://cdn.jsdelivr.net/gh/tabler/icons@latest/icons/brand-google-ads.svg', // Ads
		iconColor: 'text-blue-500',
	},
	{
		title: 'Landing Pages & Criativos',
		description:
			'Páginas e criativos de alta conversão, pensados para transformar cliques em clientes.',
		icon: 'https://cdn.jsdelivr.net/gh/tabler/icons@latest/icons/layout-dashboard.svg', // Landing Page
		iconColor: 'text-pink-500',
	},
];

const Services: React.FC = () => {
	return (
		<section
			id="services"
			className="section bg-gradient-to-b from-white to-blue-50"
		>
			<div className="container text-center">
				<h2 className="text-4xl font-extrabold mb-4 text-gray-900">
					Nossos Serviços
				</h2>
				<p className="text-lg text-gray-600 mb-12">
					Veja como podemos acelerar o crescimento do seu negócio
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="card flex flex-col items-center text-center hover:shadow-2xl transition bg-white rounded-2xl p-8 shadow-md group"
						>
							<div
								className={`rounded-full bg-gradient-to-tr from-blue-100 to-white shadow-lg mb-4 flex items-center justify-center w-20 h-20 transition-transform duration-300 group-hover:scale-110`}
							>
								<img
									src={service.icon}
									alt={service.title}
									className={`w-12 h-12 ${service.iconColor} transition-transform duration-300 group-hover:rotate-6`}
								/>
							</div>
							<h3 className="text-xl font-bold mb-2 text-blue-700">
								{service.title}
							</h3>
							<p className="text-gray-600">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;