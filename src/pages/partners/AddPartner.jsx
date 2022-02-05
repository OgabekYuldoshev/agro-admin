import { Modal, Input, Button, Form, Upload, Select } from "antd"
import { UploadOutlined } from '@ant-design/icons'
const { Option } = Select
const AddPartner = ({ open, onClose, createPartner }) => {

    return (
        <Modal title="Partner qo'shish" visible={open} onCancel={onClose} footer={null} width={500} centered>
            <Form onFinish={createPartner} className="grid grid-cols-1 gap-1"
                layout="vertical">
                <Form.Item
                    name="image"
                    label="Rasmini yuklash"
                    // valuePropName="fileList"
                    getValueFromEvent={({ file }) => file.originFileObj}
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Upload className="w-full" name="image" accept=".png, .jpg, .jpeg" >
                        <Button block className="w-full" icon={<UploadOutlined className="text-xl" />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Partner nomi" rules={[{ required: true, message: 'Please input your name!' }]} name='name' className="w-full">
                    <Input placeholder="Partner nomini kiriting..." />
                </Form.Item>
                <Form.Item label="Link" rules={[{ required: true, message: 'Please input your name!' }]} name='link' className="w-full">
                    <Input placeholder="Link" />
                </Form.Item>
                <Form.Item label="Partner Turi" rules={[{ required: true, message: 'Please input your name!' }]} name='type_id' className="w-full">
                    <Select name="type_id" placeholder="tanlang">
                        <Option value={1}>Asosiy Hamkor</Option>
                        <Option value={2}>Hamkor</Option>
                        <Option value={3}>Mijoz</Option>
                    </Select>
                </Form.Item>
                <Form.Item className="flex items-center justify-end gap-1">
                    <Button htmlType="reset">Bekor qilish</Button>
                    <Button htmlType="submit" className="ml-2">Qo'shish</Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddPartner