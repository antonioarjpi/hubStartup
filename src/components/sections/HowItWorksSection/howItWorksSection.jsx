function HowItWorksSection() {
    return (
        <div id="how-it-works" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Como Funciona
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Em poucos passos, sua equipe estará pronta para desenvolver com eficiência
                    </p>
                </div>

                <div className="mt-16">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="relative">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <span className="text-xl font-bold">1</span>
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Crie sua conta</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Registre-se em minutos e tenha acesso imediato à plataforma.
                            </p>
                        </div>

                        <div className="mt-10 lg:mt-0 relative">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <span className="text-xl font-bold">2</span>
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Configure seu projeto</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Escolha as tecnologias e configure seu ambiente de desenvolvimento.
                            </p>
                        </div>

                        <div className="mt-10 lg:mt-0 relative">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <span className="text-xl font-bold">3</span>
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Convide sua equipe</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Adicione membros da equipe e comece a colaborar imediatamente.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="relative">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <span className="text-xl font-bold">4</span>
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Desenvolva colaborativamente</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Trabalhe em tempo real com sua equipe no mesmo ambiente.
                            </p>
                        </div>

                        <div className="mt-10 lg:mt-0 relative">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <span className="text-xl font-bold">5</span>
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Automatize o deploy</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Configure pipelines CI/CD para entregas contínuas.
                            </p>
                        </div>

                        <div className="mt-10 lg:mt-0 relative">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                <span className="text-xl font-bold">6</span>
                            </div>
                            <h3 className="mt-6 text-lg font-medium text-gray-900">Escale conforme necessário</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Aumente recursos conforme seu projeto cresce.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HowItWorksSection;