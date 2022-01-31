import { Layout, Menu, Avatar, Dropdown, Button } from 'antd'
import {
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import { Link } from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout
import "./style.css"
import menu from '../navigation'
import { useDispatch } from "react-redux"
import { handleLogout } from "@store/reducers/Auth"


const DeafultLayout = (props) => {
    const dispatch = useDispatch()

    const MenuList = (
        <Menu>
            <Menu.Item key="0">
                <a href="https://www.antgroup.com">1st menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={() => dispatch(handleLogout())} key="3">
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
            <Layout className="bg-gray-100 h-screen" style={{ marginLeft: 200 }}>
                <Header className="bg-white px-5 flex items-center justify-between" >
                    Ogabek
                    <Dropdown overlay={MenuList} trigger={['click']}>
                        <div className='cursor-pointer flex items-center gap-1'>
                            <span>Admin</span>
                            <Avatar icon={<UserOutlined />} />
                        </div>
                    </Dropdown>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="bg-white" style={{ padding: 24 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>CopyRight ©2022 Created by <a className='text-blue-800' href='https://yuldoshev.vercel.app/'>Ogabek Yuldoshev</a></Footer>
            </Layout>
        </Layout>
    )
}
export default DeafultLayout