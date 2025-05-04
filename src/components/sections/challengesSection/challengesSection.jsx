function ChallengesSection() {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Desafios das Startups Brasileiras
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        As startups enfrentam diversos obstáculos que dificultam seu crescimento e inovação
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-server text-xl"></i>
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Infraestrutura Limitada</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Falta de recursos para investir em ambientes de desenvolvimento robustos e escaláveis.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-users text-xl"></i>
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Escassez de Talentos</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Competição intensa por profissionais de tecnologia qualificados.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-file-alt text-xl"></i>
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Burocracia Complexa</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Ambiente regulatório que pode atrasar ou inviabilizar projetos inovadores.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <i className="fas fa-shield-alt text-xl"></i>
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Segurança Digital</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Riscos como ataques cibernéticos e vazamento de dados sensíveis.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChallengesSection;