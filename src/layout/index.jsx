import { Layout, Menu } from 'antd'
import {
    UserOutlined
} from '@ant-design/icons'
import { Link } from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout
import "./style.css"
import menu from '../navigation'

const DeafultLayout = (props) => {
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
                <h1 className="text-white p-2 h1">Logo</h1>
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
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0 }} >
                    Ogabek
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}
export default DeafultLayout