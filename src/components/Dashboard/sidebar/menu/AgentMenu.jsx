import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const AgentMenu = () => {
    return (
        <>
            <MenuItem icon={BsFillHouseAddFill} label='Add Property' address='add-property' />
            <MenuItem icon={MdHomeWork} label='My Listings' address='my-listings' />
            <MenuItem
                icon={MdOutlineManageHistory}
                label='Sold Properties'
                address='sold-properties'
            />
            <MenuItem
                icon={MdOutlineManageHistory}
                label='Requested Properties'
                address='requested-properties'
            />
        </>
    )
}

export default AgentMenu