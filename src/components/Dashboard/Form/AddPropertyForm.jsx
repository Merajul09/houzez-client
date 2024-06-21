import { TbFidgetSpinner } from 'react-icons/tb'
import useAuth from '../../../hooks/useAuth';

const AddPropertyForm = ({
    handleSubmit,
    imagePreview,
    imageText,
    handleImage,
    loading,
}) => {
    const { user } = useAuth()
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='name' className='block text-gray-600'>
                                    Name
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='name'
                                    id='name'
                                    type='text'
                                    defaultValue={user.displayName}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='location' className='block text-gray-600'>
                                    Location
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='location'
                                    id='location'
                                    type='text'
                                    placeholder='Location'
                                    required
                                />
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='email' className='block text-gray-600'>
                                Email
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='email'
                                id='email'
                                type='text'
                                defaultValue={user.email}
                                readOnly
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='title'
                                id='title'
                                type='text'
                                placeholder='Title'
                                required
                            />
                        </div>

                        <div className=' p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input
                                            className='text-sm cursor-pointer w-36 hidden'
                                            type='file'
                                            onChange={e => handleImage(e.target.files[0])}
                                            name='image'
                                            id='image'
                                            accept='image/*'
                                            hidden
                                        />
                                        <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                                            {/* {imageText} */}
                                            {imageText.length > 20
                                                ? imageText.split('.')[0].slice(0, 15) +
                                                '....' +
                                                imageText.split('.')[1]
                                                : imageText}
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
                                {imagePreview && <img src={imagePreview} />}
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    disabled={loading}
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    {loading ? (
                        <TbFidgetSpinner className='animate-spin m-auto' />
                    ) : (
                        'Add property'
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddPropertyForm;