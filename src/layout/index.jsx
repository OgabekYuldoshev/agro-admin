import { Layout, Menu, Avatar, Dropdown, Button } from 'antd'
import {
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import { Link, useHistory } from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout
import "./style.css"
import menu from '../navigation'
import { useDispatch, useSelector } from "react-redux"
import { handleLogout } from "@store/reducers/Auth"

const DeafultLayout = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const store = useSelector(state => state.auth)

    const LogOut = () => {
        dispatch(handleLogout())
        history.push('/login')
    }

    const MenuList = (
        <Menu>
            <Menu.Divider />
            <Menu.Item onClick={LogOut} key="3">
                <span className='text-red-500 flex items-center gap-1'>
                    <LogoutOutlined />
                    LogOut
                </span>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0
                }}
            >
                <div className='p-4 flex items-center justify-center'>
                    <img src={require("../assets/images/logo.png")} alt="logo" width={100} />
                </div>
                <hr />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {
                        menu.map((m, index) => (
                            <Menu.Item key={index} icon={<UserOutlined />}>
                                <Link to={m.link}>
                                    <span>{m.name}</span>
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout className="bg-gray-100 min-h-screen" style={{ marginLeft: 200 }}>
                <Header className="bg-white px-5 flex items-center justify-between" >
                    Ogabek
                    <Dropdown overlay={MenuList} trigger={['click']}>
                        <div className='cursor-pointer flex items-center gap-1'>
                            <span>{store?.userData?.username}</span>
                            <div className="flex items-center justify-center rounded-full bg-gray-300 w-10 h-10">
                                <UserOutlined className="text-xl" />
                            </div>
                        </div>
                    </Dropdown>
                </Header>
                <Content className='px-12 py-10 bg-white m-5'>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>CopyRight ©2022 Created by <a className='text-blue-800' href='https://yuldoshev.vercel.app/'>Ogabek Yuldoshev</a></Footer>
            </Layout>
        </Layout>
    )
}
export default DeafultLayout