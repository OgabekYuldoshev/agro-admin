import {HomeOutlined, MenuUnfoldOutlined, DollarOutlined, UserSwitchOutlined, SortAscendingOutlined} from '@ant-design/icons'

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
    },
    {
        name: 'Pul birliklari',
        link: '/currencies',
        icon: <DollarOutlined />
    }
]
export default menu
