import axios from 'axios';
import { useForm } from 'react-hook-form';
type formData={
 firstName:string,
 lastName:string,
 MobileNumber:string,
 Email:string,
 Message:string
}
function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<formData>();

    const onSubmit=async(data:formData)=>{

        try{
        const responce=await axios.post("https://jsonplaceholder.typicode.com/posts",{
            firstName:data.firstName,
            lastName:data.lastName,
            MobileNumber:data.MobileNumber,
            Email:data.Email,
            Message:data.Message
        });
        console.log(responce.data)
        alert("Message Sent Succesfully");
        reset();
    }
    catch(error){
            console.log(error);
            alert("Faill Your Message");
    }
    }
    return (
        <div>
            <div className="min-h-screen  flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 sm:p-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
                                FirstName
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                {...register('firstName',
                                    {
                                        required: { value: true, message: "*please Enter Fill" },
                                        maxLength: { value: 10, message: "*maxlength At least 10 " },
                                        minLength: { value: 3, message: "*MinLength At least 3" },
                                        pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters are allowed" }
                                    }

                                )}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.firstName?.message && (
                                <p className="text-red-500 text-sm flex justify-center">{String(errors.firstName.message)}</p>
                            )}
                        </div>

                        <div>
                            <div>
                                <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
                                    LastName
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your Lastname"
                                    {...register('lastName', {
                                        required: { value: true, message: "Please Enter Fill" },
                                        minLength: { value: 3, message: "MinLength At Least 3" },
                                        maxLength: { value: 10, message: "MaxLength At Least 10" },
                                        pattern: { value: /^[A-Za-z\s]+$/, message: "Only letters are allowed" }
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.lastName?.message && (
                                    <p className="text-red-500 text-sm flex justify-center">{String(errors.lastName.message)}</p>
                                )}
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
                                        Mobile-Number
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your Mobile-Number"
                                        {...register('MobileNumber', {
                                            required: { value: true, message: "Please Enter Fill" },
                                            pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit mobile number" }
                                        })}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.MobileNumber?.message && (
                                        <p className="text-red-500 text-sm flex justify-center">{String(errors.MobileNumber.message)}</p>
                                    )}
                                </div>

                                <div>

                                </div>
                            </div>
                            <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Enter your email"
                                {...register('Email',{
                                    required:{value:true,message:"Please Enter Fill"},
                                    pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/ , message:"Enter a valid email address"}

                                })}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.Email?.message && (
                                        <p className="text-red-500 text-sm flex justify-center">{String(errors.Email.message)}</p>
                                    )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 text-gray-700 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Your message"
                                {...register('Message',{
                                    required:{value:true,message:"Please Enter Fill"},
                                    minLength:{value:5,message:"MinLength At Least 5"}
                                })}
                                rows={4}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                             {errors.Message?.message && (
                                        <p className="text-red-500 text-sm flex justify-center">{String(errors.Message.message)}</p>
                                    )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact