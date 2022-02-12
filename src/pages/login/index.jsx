import {Form, Input, Button} from 'antd'
import {login} from "@store/reducers/Auth"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from 'react-router-dom'

export default () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const selector = useSelector(state => state)
    const {isLoading} = selector.auth

    const onFinish = (values) => {
        dispatch(login(values)).then(() => history.push('/'))
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <section className="w-full h-screen flex items-center justify-center bg-slate-700">
            <div className="flex container">
                <div className={"ant-row items-center justify-center "}>
                    <div className="">
                        <div className="logo flex justify-center mx-5">
                            <img className={"rounded-xl scale-75  z-10"} width={620}
                                 src={require("../../assets/images/logo.png")} alt="logo"/>
                            <img className={"rounded-xl fixed  blur-sm opacity-75"} width={620}
                                 src={require("../../assets/images/logo.png")} alt="logo"/>
                        </div>

                    </div>
                    <div>
                        <div className="items-center shadow-2xl mx-4 rounded-xl bg-slate-500">
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                layout="vertical"
                                className='rounded p-5 w-80'
                            >
                                <Form.Item
                                    type={"email"}
                                    label="E-mail"
                                    name="email"
                                    rules={[{required: true, message: 'Please input your email!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{required: true, message: 'Please input your password!'}]}
                                >
                                    <Input.Password/>
                                </Form.Item>

                                <Form.Item>
                                    <Button htmlType="submit" loading={isLoading}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="flex container">*/}
            {/*    <div className={"ant-row items-center justify-center "}>*/}
            {/*        <div className="">*/}
            {/*            <div className="logo flex justify-center rounded">*/}
            {/*                <img className={"rounded-xl scale-75  z-10"} width={900}*/}
            {/*                     src={require("../../assets/images/agrar-image.jpg")} alt="logo"/>*/}
            {/*                <img className={"rounded-xl fixed  blur-sm opacity-70"} width={900}*/}
            {/*                     src={require("../../assets/images/agrar-image.jpg")} alt="logo"/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <h1 className='text-center mb-5 text-xl font-bold text-slate-300'>Qorasuv Agro Chemical</h1>*/}
            {/*            <div className="items-center shadow-2xl mx-4 rounded-xl bg-slate-500">*/}
            {/*                <Form*/}
            {/*                    name="basic"*/}
            {/*                    onFinish={onFinish}*/}
            {/*                    onFinishFailed={onFinishFailed}*/}
            {/*                    autoComplete="off"*/}
            {/*                    layout="vertical"*/}
            {/*                    className='rounded p-5 w-80'*/}
            {/*                >*/}
            {/*                    <Form.Item*/}
            {/*                        type={"email"}*/}
            {/*                        label="E-mail"*/}
            {/*                        name="email"*/}
            {/*                        rules={[{required: true, message: 'Please input your email!'}]}*/}
            {/*                    >*/}
            {/*                        <Input/>*/}
            {/*                    </Form.Item>*/}

            {/*                    <Form.Item*/}
            {/*                        label="Password"*/}
            {/*                        name="password"*/}
            {/*                        rules={[{required: true, message: 'Please input your password!'}]}*/}
            {/*                    >*/}
            {/*                        <Input.Password/>*/}
            {/*                    </Form.Item>*/}

            {/*                    <Form.Item>*/}
            {/*                        <Button htmlType="submit" loading={isLoading}>*/}
            {/*                            Submit*/}
            {/*                        </Button>*/}
            {/*                    </Form.Item>*/}
            {/*                </Form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    )
}
