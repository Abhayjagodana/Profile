import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Schema definition
const contactSchema = z.object({
    firstName: z
        .string()
        .min(3, 'First Name must be at least 3 characters')
        .max(10, 'First Name must not exceed 10 characters')
        .regex(/^[A-Za-z\s]+$/, 'Only letters are allowed'),
    lastName: z
        .string()
        .min(3, 'Last Name must be at least 3 characters')
        .max(10, 'Last Name must not exceed 10 characters')
        .regex(/^[A-Za-z\s]+$/, 'Only letters are allowed'),
    MobileNumber: z
        .string()
        .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
    Email: z
        .string()
        .email('Enter a valid email address'),
    Message: z
        .string()
        .min(5, 'Message must be at least 5 characters'),
});

// Infer TypeScript type from Zod
type ContactFormData = z.infer<typeof contactSchema>;

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            MobileNumber: '',
            Email: '',
            Message: '',
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/${import.meta.env.VITE_API_URL}`, {
                firstName: data.firstName,
                lastName: data.lastName,
                MobileNumber: data.MobileNumber,
                Email: data.Email,
                Message: data.Message
            });
            console.log(response.data);
            alert('Message Sent Successfully');
            reset();
        } catch (error) {
            console.error(error);
            alert('Failed to send your message');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 sm:p-10">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block mb-1 text-gray-700 font-medium">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Enter your name"
                            {...register('firstName')}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm flex justify-center">{errors.firstName.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="block mb-1 text-gray-700 font-medium">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Enter your Last Name"
                            {...register('lastName')}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm flex justify-center">{errors.lastName.message}</p>
                        )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label htmlFor="MobileNumber" className="block mb-1 text-gray-700 font-medium">
                            Mobile Number
                        </label>
                        <input
                            id="MobileNumber"
                            type="text"
                            placeholder="Enter your Mobile Number"
                            {...register('MobileNumber')}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.MobileNumber && (
                            <p className="text-red-500 text-sm flex justify-center">{errors.MobileNumber.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="Email" className="block mb-1 text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            id="Email"
                            type="text"
                            placeholder="Enter your Email"
                            {...register('Email')}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.Email && (
                            <p className="text-red-500 text-sm flex justify-center">{errors.Email.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="Message" className="block mb-1 text-gray-700 font-medium">
                            Message
                        </label>
                        <textarea
                            id="Message"
                            rows={4}
                            placeholder="Your message"
                            {...register('Message')}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        {errors.Message && (
                            <p className="text-red-500 text-sm flex justify-center">{errors.Message.message}</p>
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
    );
}

export default Contact;
