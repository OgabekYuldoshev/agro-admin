import { HomeOutlined, MenuUnfoldOutlined, DollarOutlined, UserSwitchOutlined, SortAscendingOutlined, SettingOutlined } from '@ant-design/icons'

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
        name: 'Sahiflar',
        link: '/settings/page',
        icon: <SettingOutlined />
    },
    {
        name: 'Sliderlar',
        link: '/settings/slider',
        icon: <SettingOutlined />
    }
]
export default menu
