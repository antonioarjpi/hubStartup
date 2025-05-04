import LOGO from '../../assets/logo.png'
function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center">
                            {/* <i className="fas fa-rocket text-indigo-500 text-2xl mr-2"></i> */}
                            <img className='mr-2' src={LOGO} width={35}/>
                            <span className="text-xl font-bold text-white">HubStartup</span>
                        </div>
                        <p className="text-gray-300 text-base">
                            A plataforma de desenvolvimento colaborativa na nuvem para startups brasileiras.
                        </p>
                        <div className="flex space-x-6">
                            <a href="https://www.instagram.com/hubstartup.tecnologia" target="_blank" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/antonioarjpi" target="_blank" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://wa.me/5586994189363?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20do%20HubStartup.%20Gostaria%20de%20conversar%20com%20voc%C3%AA!" target="_blank" className="text-gray-400 hover:text-white">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://github.com/antonioarjpi/hubStartup" target="_blank" className="text-gray-400 hover:text-white">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                                    Solução
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="/recursos" className="text-base text-gray-400 hover:text-white">
                                            Recursos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/planos" className="text-base text-gray-400 hover:text-white">
                                            Planos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/demostracao" className="text-base text-gray-400 hover:text-white">
                                            Demonstração
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                                    Empresa
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="/sobre" className="text-base text-gray-400 hover:text-white">
                                            Sobre
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/blog" className="text-base text-gray-400 hover:text-white">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/carreiras" className="text-base text-gray-400 hover:text-white">
                                            Carreiras
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                                    Suporte
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="/central-de-ajuda" className="text-base text-gray-400 hover:text-white">
                                            Central de Ajuda
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/documentacao" className="text-base text-gray-400 hover:text-white">
                                            Documentação
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/comunidade" className="text-base text-gray-400 hover:text-white">
                                            Comunidade
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                                    Legal
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="/privacidade" className="text-base text-gray-400 hover:text-white">
                                            Privacidade
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/termos" className="text-base text-gray-400 hover:text-white">
                                            Termos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/lei-geral-de-protecao-de-dados" className="text-base text-gray-400 hover:text-white">
                                            LGPD
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        Desenvolvido por Antônio Araújo
                    </p>
                    <p className="text-base text-gray-400 text-center">
                        &copy; 2025 HubStartup. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;