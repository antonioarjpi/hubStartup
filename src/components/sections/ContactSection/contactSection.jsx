function ContactSection() {
    return (
        <div id="contact" className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        Fale Conosco
                    </h2>
                    <p className="mt-3 text-lg text-gray-500">
                        Tem dúvidas ou precisa de ajuda? Nossa equipe está pronta para te atender.
                    </p>
                    <div className="mt-8">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <i className="fas fa-envelope text-indigo-600"></i>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>contato@hubstartup.com.br</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                <i className="fas fa-phone-alt text-indigo-600"></i>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>+55 86 99418-9363</p>
                            </div>
                        </div>
                        <div className="mt-6 flex">
                            <div className="flex-shrink-0">
                                <i className="fas fa-map-marker-alt text-indigo-600"></i>
                            </div>
                            <div className="ml-3 text-base text-gray-500">
                                <p>Av. Jóquei Clube, 299 - Teresina, PI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                            <label for="first-name" className="block text-sm font-medium text-gray-700">Nome</label>
                            <div className="mt-1">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"/>
                            </div>
                        </div>
                        <div>
                            <label for="last-name" className="block text-sm font-medium text-gray-700">Sobrenome</label>
                            <div className="mt-1">
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autocomplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="company" className="block text-sm font-medium text-gray-700">Empresa</label>
                            <div className="mt-1">
                                <input type="text" name="company" id="company" autocomplete="organization" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                            <div className="mt-1">
                                <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <a type="button" href="/mensagem-nao-enviada" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                                Enviar Mensagem
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactSection;