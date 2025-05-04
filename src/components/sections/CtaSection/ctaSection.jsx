function CtaSection() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Pronto para impulsionar sua startup?</span>
                    <span className="block text-indigo-600">Comece sua avaliação gratuita hoje.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/comece-agora"  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Comece Agora
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a target="_blank" href="https://wa.me/5586994189363?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20do%20HubStartup.%20Gostaria%20de%20conversar%20com%20voc%C3%AA!" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                            Fale com um especialista
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;