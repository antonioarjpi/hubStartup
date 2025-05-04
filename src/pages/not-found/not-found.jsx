function NotFound() {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Página não encontrada
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-700 mx-auto">
                        A página que você está procurando não existe ou ainda está em construção.
                        Você pode voltar à <a href="/" className="text-indigo-600">página inicial</a> ou entrar em contato com o <a href="https://api.whatsapp.com/send/?phone=5586994189363&text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+do+HubStartup.+Gostaria+de+conversar+com+voc%C3%AA%21&type=phone_number&app_absent=0" className="text-gray-400" target="_blank">suporte</a>, se precisar de ajuda.
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
        </div>
    )
}

export default NotFound;