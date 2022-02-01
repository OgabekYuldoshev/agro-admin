import { Modal, Upload, Form, Input, InputNumber, Select, Button } from "antd"
import { UploadOutlined } from '@ant-design/icons'

const { Option } = Select

const AddProducts = ({ open, onClose }) => {

    const onFinish = (vals) => {
        console.log(vals)
    }
    const normFile = (e) => {
        console.log('Upload event:', e)

        if (Array.isArray(e)) {
            return e
        }

        return e && e.fileList
    }
    return (
        <Modal title="Yangi mahsulot qo'shish!" visible={open} onCancel={onClose} footer={null} width={700}>
            <Form
                name="basic"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="grid grid-cols-2 gap-4"
                layout="vertical">
                <Form.Item
                    name="image"
                    label="Rasmini yuklash"
                    valuePropName="fileList"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    getValueFromEvent={normFile}
                >
                    <Upload className="w-full" name="image" listType="picture">
                        <Button className="w-full" icon={<UploadOutlined className="text-xl" />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="Nomi"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input placeholder='Nomini kiriting....' />
                </Form.Item>
                <Form.Item
                    label="Narxi"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <InputNumber className='w-full' placeholder='Narx kiriting....' />
                </Form.Item>
                <Form.Item
                    label="Kategoryasi"
                    name="category"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        <Option value="male">Helo</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Sub Kategoryasi"
                    name="sub_category"
                    rules={[{ required: true, message: 'Please input your Subcategory!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        <Option value="male">Helo</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Partner"
                    name="partner"
                    rules={[{ required: true, message: 'Please input your Subcategory!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        <Option value="male">Helo</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="flex">
                    <Button htmlType="submit">
                        Qo'shish
                    </Button>
                    <Button className="ml-2" onClick={onClose} htmlType="reset">
                        Bekor Qilish
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}
export default AddProducts