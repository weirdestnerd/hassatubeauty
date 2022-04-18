import { Formik } from 'formik';

const NotifyMeForm = () => {
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Formik initialValues={{ email: '' }} onSubmit={onSubmit}>
            {({ handleSubmit, handleChange, values }) => (
                <form className="mt-4 sm:mt-6 sm:flex" onSubmit={handleSubmit}>
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="text"
                        autoComplete="email"
                        required
                        className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={values.email}
                    />
                    <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500"
                        >
                            Notify me
                        </button>
                    </div>
                </form>

            )}
        </Formik>
    )
}

export default NotifyMeForm;