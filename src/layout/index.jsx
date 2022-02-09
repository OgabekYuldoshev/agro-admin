import {Layout, Menu, Avatar, Dropdown, Button, Row, Col} from 'antd'
import {
    UserOutlined,
    LogoutOutlined,
    LoginOutlined,
    UnorderedListOutlined,
    MessageOutlined,
    SearchOutlined
} from '@ant-design/icons'
import {Link, useHistory} from "react-router-dom"

const {Header, Content, Footer, Sider} = Layout
import menu from '../navigation'
import {useDispatch, useSelector} from "react-redux"
import {handleLogout} from "@store/reducers/Auth"
import {useState} from "react"
import './style.css'

const DeafultLayout = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const store = useSelector(state => state.auth)

    const [burger, setBurger] = useState(false)
    const toggle = () => setBurger(!burger)

    const LogOut = () => {
        dispatch(handleLogout())
        history.push('/login')
    }

    const MenuList = (
        <Menu>
            <Menu.Divider/>
            <Menu.Item onClick={LogOut} key="3">
                <span className='text-red-500 flex items-center gap-1'>
                    <LogoutOutlined/>
                    LogOut
                </span>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout hasSider>
            <Sider width={burger ? 0 : 250}
                   style={{
                       overflow: 'auto',
                       height: '100vh',
                       position: 'fixed',
                       left: 0,
                       top: 0,
                       bottom: 0,
                       boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                   }}
            >
                <Row className={"justify-between items-center px-3"}>
                    <Col>
                        <div className='flex items-center justify-center mx-2'>
                            <img src={require("../assets/images/logo.png")} alt="logo" width={60}/>
                        </div>
                    </Col>
                    <Col>
                        <Dropdown overlay={MenuList} trigger={['click']}>
                            <div className='cursor-pointer flex items-center gap-1 text-white'>
                                {/*<span>{store?.userData?.username}</span>*/}
                                <div className="flex items-center justify-center rounded-full">
                                    <LoginOutlined className="text-xl mx-2"/>
                                </div>
                            </div>
                        </Dropdown>
                    </Col>
                </Row>
                <div className='p-3 flex items-center justify-center'>
                    <img src={require("../assets/images/219983.png")} alt="logo" width={100}/>
                </div>
                <div className="name text-white text-center mb-3">
                    <span>{store?.userData?.username}</span>
                </div>
                <hr className="mb-3"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} className={"px-2"}>
                    {
                        menu.map((m, index) => (
                            <Menu.Item key={index} icon={m.icon} className="border">
                                <Link to={m.link}>
                                    <span>{m.name}</span>
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout className="bg-gray-100 min-h-screen slide-left" style={{marginLeft: burger ? 0 : 250}}>
                <Header className="bg-white px-5 flex items-center justify-between shadow">
                    <Button onClick={toggle} className={"flex items-center justify-center"}><UnorderedListOutlined
                        className="text-xl"/></Button>
                    <div className="">
                        <SearchOutlined className="text-xl mx-3"/>
                        <MessageOutlined className="text-xl" style={{cursor: 'pointer'}}/>
                    </div>
                </Header>
                <Content className='px-12 py-10 bg-white m-5'>
                    {props.children}
                </Content>
                <Footer style={{textAlign: 'end'}}>CopyRight ©2022 Created by <a className='text-blue-800'
                                                                                    href='https://yuldoshev.vercel.app/'>Ogabek
                    Yuldoshev</a></Footer>
            </Layout>
        </Layout>
    )
}
export default DeafultLayout
