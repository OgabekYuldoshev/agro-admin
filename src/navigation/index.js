import {HomeOutlined, MenuUnfoldOutlined, UserSwitchOutlined, SortAscendingOutlined} from '@ant-design/icons'

const menu = [
    {
        name: 'Asosiy',
        link: '/',
        icon: <HomeOutlined />
    },
    {
        name: 'Kategoryalar',
        link: '/category',
        icon: <MenuUnfoldOutlined />
    },
    {
        name: 'Hamkorlar',
        link: '/partners',
        icon: <UserSwitchOutlined />
    },
    {
        name: 'Mahsulotlar',
        link: '/products',
        icon: <SortAscendingOutlined />
    }
]
export default menu
