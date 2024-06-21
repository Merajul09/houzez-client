import { Link, useNavigate } from 'react-router-dom'
import bgImg from "../assets/registerImage.jpg"
import logo from "../assets/loginIcon.png"
import toast from 'react-hot-toast'
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth'
import { FcGoogle } from 'react-icons/fc'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useState } from 'react'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const { googleSignIn, createUser, updateUserProfile, setLoading, setUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const result = await createUser(data.email, data.password)
            await updateUserProfile(data.name, data.photo)
            setUser({ ...result?.user, photoURL: data.photo, displayName: data.name })
            navigate('/')
            toast.success('Signup Successful')
            console.log(data.email, data.photo, data.name)
        } catch (err) {
            toast.error(err.message)
        }
    };
    // Google Signin
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/')
            toast.success('Signup Successful')
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] pt-24'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img className='w-auto h-7 sm:h-8' src={logo} alt='' />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Get Your Free Account Now.
                    </p>

                    <div
                        onClick={handleGoogleSignIn}
                        className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
                    >
                        <div className='px-4 py-2'>
                            <FcGoogle className='w-8 h-8'></FcGoogle>
                        </div>

                        <span className='w-5/6 px-4 py-3 font-bold text-center'>
                            Sign in with Google
                        </span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or Register with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                {...register("name", { required: true })}
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                {...register("photo", { required: true })}
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                            {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                {...register("email", { required: true })}
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className="space-y-2 mt-4">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <div className="flex items-center gap-2 relative">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[a-z])/
                                })} />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 cursor-pointer">{
                                    showPassword ? <FaEye /> : <FaEyeSlash />
                                }</span>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase and one lower case</p>}
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Register