import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loader from '../components/Loader'
import useRole from '../hooks/useRole'
const AdminRoute = ({ children }) => {
    const [role, isLoading] = useRole()

    if (isLoading) return <Loader />
    if (role === 'admin') return children
    return <Navigate to='/dashboard' />
}

export default AdminRoute

AdminRoute.propTypes = {
    children: PropTypes.element,
}