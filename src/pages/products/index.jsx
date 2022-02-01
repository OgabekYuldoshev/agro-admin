import { Upload, message, Form, Input, InputNumber, Row, Col, Select, Button } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload
const { Option } = Select

const ProductsPage = () => {

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file
            if (status !== 'uploading') {
                console.log(info.file, info.fileList)
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files)
        }
    }

    const onFinish = (values) => {
        alert(JSON.stringify(values))
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Mahsulot yaratish</h1>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className='flex gap-2'>
                <div>
                    <Dragger {...props} className='w-1/2 p-5'>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>
                </div>
                <Row gutter={[10, 10]} className='w-1/2'>
                    <Col span='12'>
                        <Form.Item
                            label="Nomi"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder='Nomini kiriting....' />
                        </Form.Item>
                    </Col>
                    <Col span='12'>
                        <Form.Item
                            label="Narxi"
                            name="price"
                            rules={[{ required: true, message: 'Please input your price!' }]}
                        >
                            <InputNumber className='w-full' placeholder='Narx kiriting....' />
                        </Form.Item>
                    </Col>
                    <Col span='12'>
                        <Form.Item
                            label="Kategoryasi"
                            name="category"
                            rules={[{ required: true, message: 'Please input your category!' }]}
                        >
                            <Select placeholder='Tanlang....'>
                                <Option value="male">Helo</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span='12'>
                        <Form.Item
                            label="Sub Kategoryasi"
                            name="sub_category"
                            rules={[{ required: true, message: 'Please input your Subcategory!' }]}
                        >
                            <Select placeholder='Tanlang....'>
                                <Option value="male">Helo</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span='12'>
                        <Form.Item
                            label="Partner"
                            name="partner"
                            rules={[{ required: true, message: 'Please input your Subcategory!' }]}
                        >
                            <Select placeholder='Tanlang....'>
                                <Option value="male">Helo</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default ProductsPage