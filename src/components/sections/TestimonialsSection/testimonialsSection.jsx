import ANTONIO from "../../../assets/antonio_falso.png"
function TestimonialsSection() {
    return (
        <div id="testimonials" className="py-16 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Quem usa recomenda
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-indigo-100 mx-auto">
                        Veja o que os empreendedores estão falando sobre a HubStartup
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    <div className="testimonial-card p-8 rounded-lg">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src={ANTONIO} alt="Roberto Almeida" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium text-white">Antônio Araújo</h4>
                                <p className="text-indigo-200">Analista de Sistemas, D.YORK</p>
                            </div>
                        </div>
                        <p className="mt-4 text-indigo-100">
                            "A colaboração em tempo real mudou completamente como nossa equipe trabalha. Nunca mais voltaremos ao modelo antigo."
                        </p>
                    </div>

                    <div className="testimonial-card p-8 rounded-lg">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="Carlos Mendes" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium text-white">Carlos Mendes</h4>
                                <p className="text-indigo-200">CTO, HealthTech</p>
                            </div>
                        </div>
                        <p className="mt-4 text-indigo-100">
                            "A conformidade com LGPD foi crucial para nós. A HubStartup simplificou esse processo complexo."
                        </p>
                    </div>

                    <div className="testimonial-card p-8 rounded-lg">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="Ana Silva" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium text-white">Ana Silva</h4>
                                <p className="text-indigo-200">CEO, Fintech Startup</p>
                            </div>
                        </div>
                        <p className="mt-4 text-indigo-100">
                            "A HubStartup nos permitiu focar no produto em vez de infraestrutura. Reduzimos nosso tempo de lançamento em 40%!"
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection;