import Logo from '../../images/Logo.PNG'
import ComingSoonPhoto from '../../images/coming_soon.jpg'
import NotifyMeForm from "./NotifyMeForm";

const offers = [
    { name: 'Customization like never before', description: 'You\'ll customize your wig to your taste', href: '#' },
    { name: "One on one consultation", description: 'You\'ll get 1-1 consultation with me', href: '#' },
    { name: 'Nationwide shipping', description: 'We\'ll ship your wig to you anywhere in US', href: '#' },
]

const ComingSoon = () => {
    return (
        <div className="bg-white">
            <header className="relative z-10">
                <nav aria-label="Top">
                    <div className="bg-white">
                        <div className="border-b border-gray-200">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="h-16 grid grid-cols-3 gap-4 items-center justify-between">
                                    {/* Logo (lg+) */}
                                    <div className="hidden lg:flex lg:items-center">
                                        <a href="/">
                                            <span className="sr-only">Hassatu Beauty</span>
                                            <img
                                                className="h-8 w-auto"
                                                src={Logo}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    
                                    {/* Logo (lg-) */}
                                    <a href="/" className="lg:hidden">
                                        <span className="sr-only">Hassatu Beauty</span>
                                        <img
                                            src={Logo}
                                            alt=""
                                            className="h-8 w-auto"
                                        />
                                    </a>
                                    
                                    <p className="text-base text-center font-extrabold tracking-tight text-gray-900 sm:text-sm xl:text-3xl">
                                        Hassatu Beauty
                                    </p>
                                    
                                    <p className="invisible"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            
            <main>
                {/* Hero */}
                <div className="flex flex-col border-b border-gray-200 lg:border-0">
                    <div className="relative">
                        <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />
                        <div className="relative bg-gray-100 lg:bg-transparent">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                                <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                                    <div className="lg:pr-16 space-y-4">
                                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                            We're launching soon!
                                        </h1>
                                        <p className="mt-4 text-xl text-gray-600">
                                            We're getting all the bells and whistles together. Our physical studio is nicely coming together as well.
                                        </p>
                                        <p className="mt-4 text-xl text-gray-600">
                                            Once our awesomeness is ready for you, we'll email you.
                                        </p>
                                        
                                        <NotifyMeForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full lg:block">
                            <img
                                // src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                                src={ComingSoonPhoto}
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>
    
                    <nav aria-label="Offers" className="order-last lg:order-first">
                        <div className="max-w-7xl mx-auto lg:px-8">
                            <ul
                                role="list"
                                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
                            >
                                {offers.map((offer) => (
                                    <li key={offer.name} className="flex flex-col">
                                        <a
                                            href={offer.href}
                                            className="relative flex-1 flex flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                                        >
                                            <p className="text-sm text-gray-500">{offer.name}</p>
                                            <p className="font-semibold text-gray-900">{offer.description}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </main>
            
            <footer aria-labelledby="footer-heading" className="bg-white">
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block text-indigo-600">We're on social media!</span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                            <a href="#!" className="mr-6 text-gray-600">
                                <svg
                                    className="w-6 h-6 text-blue-600 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    />
                                </svg>

                            </a>
                            <a href="#!" className="mr-6 text-gray-600">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                                     className="w-3.5" role="img"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <h2 id="footer-heading" className="sr-only">
                    Footer
                </h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="py-10 md:flex md:items-center md:justify-between">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
                        </div>
                        
                        {/*TODO: Replace w/ social media links*/}
                        {/*<div className="mt-4 flex items-center justify-center md:mt-0">*/}
                        {/*    <div className="flex space-x-8">*/}
                        {/*        {footerNavigation.bottomLinks.map((item) => (*/}
                        {/*            <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">*/}
                        {/*                {item.name}*/}
                        {/*            </a>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*    */}
                        {/*    <div className="ml-6 border-l border-gray-200 pl-6">*/}
                        {/*        <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">*/}
                        {/*            <img*/}
                        {/*                src="https://tailwindui.com/img/flags/flag-canada.svg"*/}
                        {/*                alt=""*/}
                        {/*                className="w-5 h-auto flex-shrink-0"*/}
                        {/*            />*/}
                        {/*            <span className="ml-3 text-sm">Change</span>*/}
                        {/*            <span className="sr-only">location and currency</span>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ComingSoon
