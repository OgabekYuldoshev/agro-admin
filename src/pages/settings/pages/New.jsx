import { Button, Form, Input, Select } from "antd"
import { Link, useHistory } from "react-router-dom"
import { createPage } from "@store/reducers/Units"
import { useDispatch } from "react-redux"
import CKEditor from "../../../components/Ckeditor"
const { Option } = Select

const NewPages = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleFinish = (values) => {
        dispatch(createPage(values)).then(() => history.push('/settings/page'))
    }
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Yangi sahifa qo'shish</h1>
            <Form
                name="basic"
                onFinish={handleFinish}
                autoComplete="off"
                className="grid grid-cols-2 gap-4"
                layout="vertical">
                <Form.Item
                    label="Sahifa nomi"
                    name="title"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input placeholder='Nomini kiriting....' />
                </Form.Item>

                <Form.Item
                    label="Sahifa turi"
                    name="page_id"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        <Option value={1}>Asosiy</Option>
                        <Option value={2}>Oddiy</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="content"
                    label="Mahsulot haqida"
                    className="col-span-2"
                    valuePropName='data'
                    getValueFromEvent={(event, editor) => {
                        const data = editor.getData()
                        return data
                    }}
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <CKEditor name="content" />
                </Form.Item>
                <Form.Item className="flex w-full col-span-2 justify-between">
                    <Link to="/settings/page">
                        <Button htmlType="reset">
                            Bekor Qilish
                        </Button>
                    </Link>
                    <Button htmlType="submit">
                        Qo'shish
                    </Button>
                </Form.Item>
            </Form>
        </>

    )
}
export default NewPages