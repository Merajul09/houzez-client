import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../utils";
import AddPropertyForm from "../../../components/Dashboard/Form/AddPropertyForm";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddProperty = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')

    const { mutateAsync } = useMutation({
        mutationFn: async propertyData => {
            const { data } = await axiosPublic.post(`/property`, propertyData)
            return data
        },
        onSuccess: () => {
            console.log('Data Saved Successfully')
            toast.success('Property Added Successfully!')
            navigate('/dashboard/my-listings')
            setLoading(false)
        },
    })

    //   Form handler
    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const location = form.location.value
        const title = form.title.value
        const price = form.price.value
        const image = form.image.files[0]

        const agent = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        }

        try {
            const image_url = await imageUpload(image)
            const propertyData = {
                location,
                title,
                name,
                email,
                price,
                agent,
                image: image_url,
            }
            console.table(propertyData)

            //   Post request to server
            await mutateAsync(propertyData)
        } catch (err) {
            console.log(err)
            toast.error(err.message)
            setLoading(false)
        }
    }

    //   handle image change
    const handleImage = image => {
        setImagePreview(URL.createObjectURL(image))
        setImageText(image.name)
    }
    return (
        <>
            <Helmet>
                <title>Add Property | Dashboard</title>
            </Helmet>

            {/* Form */}
            <AddPropertyForm
                handleSubmit={handleSubmit}
                setImagePreview={setImagePreview}
                imagePreview={imagePreview}
                handleImage={handleImage}
                imageText={imageText}
                loading={loading}
            />
        </>
    )
}

export default AddProperty;