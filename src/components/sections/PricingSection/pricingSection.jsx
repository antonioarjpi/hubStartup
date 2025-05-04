function PricingSection() {
    return (
        <div id="pricing" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Planos Acessíveis
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Escolha o plano ideal para o estágio da sua startup
                    </p>
                </div>

                <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="pricing-card bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900">Start</h3>
                            <p className="mt-4 text-sm text-gray-500">
                                Ideal para equipes pequenas ou projetos iniciais
                            </p>
                            <div className="mt-8">
                                <p className="text-4xl font-extrabold text-gray-900">R$99</p>
                                <p className="mt-1 text-sm text-gray-500">por mês</p>
                            </div>
                            <a href="/comprar?plano-start" className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Começar
                            </a>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h4 className="text-xs font-medium text-gray-900 tracking-wide uppercase">O que está incluído</h4>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">3 desenvolvedores</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">2 ambientes de desenvolvimento</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">10GB de armazenamento</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">Suporte básico</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pricing-card bg-white border-2 border-indigo-600 rounded-lg shadow-lg divide-y divide-gray-200">
                        <div className="p-6">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium text-gray-900">Growth</h3>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                    Mais popular
                                </span>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Para startups em fase de crescimento acelerado
                            </p>
                            <div className="mt-8">
                                <p className="text-4xl font-extrabold text-gray-900">R$299</p>
                                <p className="mt-1 text-sm text-gray-500">por mês</p>
                            </div>
                            <a href="/comprar?plano-growth" c className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Começar
                            </a>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h4 className="text-xs font-medium text-gray-900 tracking-wide uppercase">O que está incluído</h4>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">10 desenvolvedores</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">5 ambientes de desenvolvimento</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">50GB de armazenamento</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">CI/CD integrado</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">Suporte prioritário</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pricing-card bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                        <div className="p-6">
                            <h3 className="text-lg font-medium text-gray-900">Enterprise</h3>
                            <p className="mt-4 text-sm text-gray-500">
                                Para startups estabelecidas com necessidades avançadas
                            </p>
                            <div className="mt-8">
                                <p className="text-4xl font-extrabold text-gray-900">R$899</p>
                                <p className="mt-1 text-sm text-gray-500">por mês</p>
                            </div>
                            <a href="/comprar?plano-enterprise" className="mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Começar
                            </a>
                        </div>
                        <div className="pt-6 pb-8 px-6">
                            <h4 className="text-xs font-medium text-gray-900 tracking-wide uppercase">O que está incluído</h4>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">Desenvolvedores ilimitados</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">Ambientes ilimitados</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">500GB de armazenamento</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">CI/CD avançado</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">Monitoramento avançado</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-700">Suporte 24/7</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingSection;