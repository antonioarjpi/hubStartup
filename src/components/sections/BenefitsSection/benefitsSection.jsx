function BenefitsSection() {
    return (
        <div className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Benefícios para sua Startup
                </h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    Transforme desafios em oportunidades com a HubStartup
                </p>
            </div>
            
            <div className="mt-16">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-money-bill-wave"></i>
                        </div>
                        <div className="ml-16">
                            <h3 className="text-lg font-medium text-gray-900">Redução de Custos</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Elimine investimentos em infraestrutura cara e aloque recursos em áreas críticas do seu negócio.
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-tachometer-alt"></i>
                        </div>
                        <div className="ml-16">
                            <h3 className="text-lg font-medium text-gray-900">Aumento da Produtividade</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Ferramentas colaborativas e automação aumentam a eficiência, acelerando o desenvolvimento.
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-expand"></i>
                        </div>
                        <div className="ml-16">
                            <h3 className="text-lg font-medium text-gray-900">Escalabilidade</h3>
                            <p className="mt-2 text-base text-gray-500">
                                A plataforma cresce junto com sua startup, adaptando-se às necessidades do seu negócio.
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="ml-16">
                            <h3 className="text-lg font-medium text-gray-900">Segurança e Conformidade</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Proteja sua startup contra riscos legais e cibernéticos com nossos recursos integrados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default BenefitsSection;