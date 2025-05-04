import LOGO from '../../../assets/logo_blue.png'
function HeroSection() {
    return (
        <div className="animated-bg pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="pl-4 -ml-4 sm:pl-6 md:-ml-8">
                            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:leading-tight lg:text-6xl">
                                <span className="block">Supere os desafios</span>
                                <span className="block text-indigo-200">das startups brasileiras</span>
                            </h1>
                            <p className="mt-3 text-xl text-indigo-100">
                                A plataforma de desenvolvimento colaborativa na nuvem projetada especificamente para startups em fase inicial.
                            </p>
                            <div className="mt-8 sm:flex">
                                <div className="rounded-md shadow">
                                    <a href="/teste-gratis" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                        Teste Grátis
                                    </a>
                                </div>
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <a href="/demostracao" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                                        Demonstração
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0">
                        <div className="relative mx-auto w-full">
                            <div className="relative block ">
                                <img className="w-full" src={LOGO} width={500} alt="HubStartup platform screenshot" />
                                    <div className="absolute inset-0 bg-indigo-600 bg-opacity-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;