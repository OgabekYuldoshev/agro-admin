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
        <section className="bg-gray-100 w-full h-screen flex items-center justify-center">
            <div>
                <h1 className='text-center mb-5 text-xl font-bold'>Qorasuv Agro Chemical</h1>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className='bg-white rounded p-5 w-80'
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
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
        </section>
    )
}
