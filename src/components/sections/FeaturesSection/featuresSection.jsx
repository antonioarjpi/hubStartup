function FeaturesSection() {
    return (
        <div id="features" className="py-16 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Nossa Solução
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-indigo-100 mx-auto">
                        A HubStartup foi criada para resolver esses desafios de forma simples e eficiente
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                            <i className="fas fa-cloud text-2xl"></i>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">Ambientes na Nuvem</h3>
                        <p className="mt-4 text-gray-600">
                            Ambientes prontos para uso, eliminando configuração manual e permitindo que as equipes comecem a codificar imediatamente.
                        </p>
                    </div>

                    <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                            <i className="fas fa-users-cog text-2xl"></i>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">Colaboração em Tempo Real</h3>
                        <p className="mt-4 text-gray-600">
                            Ferramentas integradas para desenvolvedores, designers e gerentes trabalharem juntos simultaneamente.
                        </p>
                    </div>

                    <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                            <i className="fas fa-robot text-2xl"></i>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">Automação CI/CD</h3>
                        <p className="mt-4 text-gray-600">
                            Pipelines automatizados que facilitam a integração e entrega contínua, reduzindo o tempo de lançamento.
                        </p>
                    </div>

                    <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                            <i className="fas fa-lock text-2xl"></i>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">Segurança Incorporada</h3>
                        <p className="mt-4 text-gray-600">
                            Criptografia de dados e autenticação multifator para proteger suas informações sensíveis.
                        </p>
                    </div>

                    <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                            <i className="fas fa-balance-scale text-2xl"></i>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">Conformidade LGPD</h3>
                        <p className="mt-4 text-gray-600">
                            Recursos que facilitam a gestão de dados pessoais em conformidade com a legislação brasileira.
                        </p>
                    </div>

                    <div className="feature-card bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                            <i className="fas fa-chart-line text-2xl"></i>
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-gray-900">Escalabilidade</h3>
                        <p className="mt-4 text-gray-600">
                            Cresça sem preocupações. Nossa plataforma se adapta às necessidades da sua startup.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection;