import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import PropTypes from 'prop-types'
import Loader from '../components/Loader'
const AgentRoute = ({ children }) => {
    const [role, isLoading] = useRole()

    if (isLoading) return <Loader />
    if (role === 'agent') return children
    return <Navigate to='/dashboard' />
}

export default AgentRoute

AgentRoute.propTypes = {
    children: PropTypes.element,
}