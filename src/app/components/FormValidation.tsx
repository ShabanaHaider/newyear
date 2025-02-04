'use client'
import { useForm } from "react-hook-form";
const FormValidation = () => {



// Importing functions of handlesubmit from useForm

    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)
    const CustomSubmit = (data: any) => {
        console.log(data)  }


    return (
        <div className="flex items-center justify-center ml-56 px-6 py-4 w-[1440px] bg-[#dbb763]">
            {/* className="px-6 py-4 bg-[#B88E2F] text-white rounded mt-6 w-full" */}



            <form onSubmit={handleSubmit(CustomSubmit)} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-white mb-4 text-center">Billing Information</h2>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Name
                    </label>
                    <input
                    // a special way to pass props-- pass required key because user should not left this field empty
                        {...register('name', { required: true })}     
                        type="text"
                        id="customerName"
                        name="name"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                    {
                        // errors.name && <p className="text-red-500 text-sm mt-2">Name is required</p>
                        errors.name && errors.name.type === "required" && <p className="text-red-600 font-bold">Name is Required</p>
                    }
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Email
                    </label>
                    <input
                        {...register('email' , {required: true})}
                        type="email"
                        id="customerEmail"
                        name="email"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                {
                    errors.email && errors.email.type == 'required' &&
                    <p className="text-red-600 font-bold">Email is Required</p>
                }


<div className="mb-4">
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Billing Address
                    </label>
                    <input
                        {...register('address' , {required: true})}
                        type="object"
                        id="customerAddress"                        
                        name="address"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your Billing Address"
                    />
                </div>


                <div className="mb-4">
                    <label
                        htmlFor="mobilenumber"
                        className="block text-sm font-medium text-gray-300 mb-2"
                    >
                        Mobile Number
                    </label>
                    <input
                        {...register('mobilenumber' , {required: true})}
                        type="string"
                        id="customerMobileNumber"                        
                        name="mobilenumber"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your Mobile Number"
                    />
                </div>   

                <button
                    type="submit"
                    className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};
export default FormValidation;