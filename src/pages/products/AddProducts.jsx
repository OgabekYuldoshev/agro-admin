import { Modal, Upload, Form, Input, InputNumber, Select, Button, message } from "antd"
import { UploadOutlined } from '@ant-design/icons'
import { getCategory } from "@store/reducers/Category"
import { getPartner } from "@store/reducers/Partners"
// import { useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import { useState } from "react"
import CKEditor from "../../components/Ckeditor"
import { createProduct } from '@store/reducers/Products'
const { Option } = Select

const AddProducts = ({ open, onClose }) => {
    const dispatch = useDispatch()
    const store = useSelector(state => state)
    // const [subs, setSubs] = useState([])
    console.log(store)

    const onFinish = (values) => {
        const formData = new FormData()
        for (const name in values) {
            formData.append(name, values[name])
        }
        dispatch(createProduct(formData))
    }
    // const handleSubCategory = (val) => {
    //     const category = store.category?.categories?.find(item => item.id === val)
    //     setSubs([...category?.sub_categories])
    // }

    return (
        <Modal title="Yangi mahsulot qo'shish!" visible={open} onCancel={onClose} footer={null} width={1000}>
            <Form
                name="basic"
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="grid grid-cols-3 gap-4"
                layout="vertical">
                <Form.Item
                    name="images[]"
                    label="Rasmini yuklash"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                    getValueFromEvent={({ file }) => file.originFileObj}
                >
                    <Upload className="w-full" beforeUpload={() => message.success("Image Selected!")} name="image" accept=".png, .jpg, .jpeg" maxCount={3}>
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
                    label="Mahsulot kodi"
                    name="code"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input className='w-full' placeholder='Kodi kiriting....' />
                </Form.Item>
                <Form.Item
                    label="Narxi"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <InputNumber className='w-full' placeholder='Narx kiriting....' />
                </Form.Item>
                <Form.Item
                    label="Pul birligi"
                    name="currency_id"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        <Option value={1}>Sum</Option>
                        <Option value={2}>Rubl</Option>
                        <Option value={3}>Dollor</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Mahsulot kilogrami"
                    name="nett_weight"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <InputNumber className='w-full' placeholder='Narx kiriting....' />
                </Form.Item>
                <Form.Item
                    label="Kilogram yoki gramm"
                    name="unit_id"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        <Option value={1}>Kilogramm</Option>
                        <Option value={2}>Gramm</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Kategoryasi"
                    name="category_id"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Select onFocus={() => dispatch(getCategory())} placeholder='Tanlang....'>
                        {
                            store.category?.categories?.map((item, key) => (
                                <Option key={key} value={item.id}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                {/* <Form.Item
                    label="Sub Kategoryasi"
                    name="sub_category_id"
                    rules={[{ required: true, message: 'Please input your Subcategory!' }]}
                >
                    <Select disabled={subs?.length === 0} placeholder='Tanlang....'>
                        {
                            subs?.map((item, key) => (
                                <Option key={key} value={item.id}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item> */}
                <Form.Item
                    label="Partner"
                    name="partner_id"
                    onFocus={() => dispatch(getPartner())}
                    rules={[{ required: true, message: 'Please input your Subcategory!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        {
                            store.partner?.partners?.map((item, key) => (
                                <Option key={key} value={item.id}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Mahfulot turi"
                    name="product_type"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                >
                    <Select placeholder='Tanlang....'>
                        <Option value={1}>Oddiy</Option>
                        <Option value={2}>Qimmat</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="specification"
                    label="Mahsulot haqida"
                    className="col-span-3"
                    valuePropName='data'
                    getValueFromEvent={(event, editor) => {
                        const data = editor.getData()
                        return data
                    }}
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <CKEditor name="specification" />
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