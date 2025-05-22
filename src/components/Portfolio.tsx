import React from 'react';

const Portfolio: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'Project One',
            description: 'A brief description of Project One.',
            imageUrl: '/path/to/image1.jpg',
        },
        {
            id: 2,
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            imageUrl: '/path/to/image2.jpg',
        },
        {
            id: 3,
            title: 'Project Three',
            description: 'A brief description of Project Three.',
            imageUrl: '/path/to/image3.jpg',
        },
        {
            id: 4,
            title: 'Project Four',
            description: 'A brief description of Project Four.',
            imageUrl: '/path/to/image4.jpg',
        },
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Our Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;