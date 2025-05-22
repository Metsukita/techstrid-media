import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h5 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-2">TechStride Media</h5>
                        <p className="text-sm text-gray-300">Seu crescimento é o nosso sucesso.</p>
                    </div>
                    <div className="mb-4 md:mb-0 text-center">
                        <h6 className="text-md font-semibold mb-2">Links</h6>
                        <ul className="flex flex-wrap gap-4 justify-center">
                            <li><a href="#services" className="hover:text-blue-300 transition">Serviços</a></li>
                            <li><a href="#portfolio" className="hover:text-blue-300 transition">Portfólio</a></li>
                            <li><a href="#testimonials" className="hover:text-blue-300 transition">Depoimentos</a></li>
                            <li><a href="#contact" className="hover:text-blue-300 transition">Contato</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-right">
                        <h6 className="text-md font-semibold mb-2">Redes Sociais</h6>
                        <div className="flex gap-4 justify-center md:justify-end">
                            <a href="#" className="hover:text-blue-300 transition">Facebook</a>
                            <a href="#" className="hover:text-blue-300 transition">Instagram</a>
                            <a href="#" className="hover:text-blue-300 transition">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                    <p className="text-sm">© {new Date().getFullYear()} TechStride Media. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;