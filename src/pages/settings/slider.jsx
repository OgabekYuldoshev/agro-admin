import { useEffect } from "react"
import { Button, Form, Input, Upload, message, Table } from "antd"
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import { createSlider, getSlider, deleteSlider } from "@store/reducers/Units"
import { useDispatch, useSelector } from "react-redux"
import { baseUrl } from "@utils"
// import { useSelector } from "react-redux"

const Page = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.units)
    console.log(store)
    useEffect(() => {
        dispatch(getSlider())
    }, [])
    const onFinish = (values) => {
        console.log(values)
        const formData = new FormData()
        for (const name in values) {
            formData.append(name, values[name])
        }
        dispatch(createSlider(formData))
    }

    const columns = [
        {
            title: 'Nomi',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Image',
            dataIndex: '',
            key: '',
            render: (row) => (<img alt={row.name} width={300} src={baseUrl + row.image} />)
        },
        {
            dataIndex: '',
            key: '',
            render: (row) => <DeleteOutlined className="text-red-500" onClick={() => dispatch(deleteSlider(row.id))} />
        }
    ]

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold mb-2">Sahifa</h1>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="flex gap-4"
                    layout="vertical">
                    <Form.Item
                        name="image"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                        getValueFromEvent={({ file }) => file.originFileObj}
                    >
                        <Upload className="w-full" beforeUpload={() => message.success("Image Selected!")} name="image"
                            accept=".png, .jpg, .jpeg">
                            <Button className="w-full" icon={<UploadOutlined className="text-xl" />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder='Nomini kiriting....' />
                    </Form.Item>

                    <Button htmlType="submit">
                        Qo'shish
                    </Button>
                </Form>
            </div>
            <Table
                loading={store.isLoading}
                columns={columns}
                dataSource={store.sliders}
            />
        </>
    )
}
export default Page