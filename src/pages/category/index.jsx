import { Table, Popconfirm, Button, Input, Tooltip, Modal, message, Form } from 'antd'
import { useState, useEffect } from 'react'
import { getCategory, deleteCategory, createCategory, updateCategory } from "@store/reducers/Category"
// import { useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    EditOutlined,
    OrderedListOutlined,
    PlusSquareOutlined,
    DeleteOutlined
} from '@ant-design/icons'


const ProductsPage = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.category)

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    console.log(store.categories)

    const columns = [
        {
            title: 'Name',
            dataIndex: '',
            key: '',
            width: '800px',
            render: row => <EditableComponent item={row} />
        },
        {
            title: 'Action',
            dataIndex: '',
            width: '100px',
            key: 'x',
            render: (row) => <ActionComponent item={row} />
        }
    ]

    const handleCreate = (value) => {
        dispatch(createCategory(value)).then(() => message.success("Kategorya yaratildi!"))
    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold ">Categoryalar yaratish</h1>

                <Form name="basic" className='flex gap-2' onFinish={handleCreate}>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}>
                        <Input placeholder='Kategorya nomini kiriting....' />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">
                            Yaratish
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Table
                columns={columns}
                // expandable={{
                //     expandedRowRender: () => <p style={{ margin: 0 }}>hello</p>,
                //     rowExpandable: record => record.sub_categories
                // }}
                dataSource={store.categories}
            />
            {/* <ModalComponents isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} /> */}
        </>
    )
}

const ActionComponent = ({ item }) => {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const handleDelete = () => {
        dispatch(deleteCategory({ id: item.id })).then(() => {
            message.success('Kategorya o\'chirildi')
        })
    }

    function cancel(e) {
        console.log(e)
        message.error('Click on No')
    }

    return (
        <div className='flex gap-2'>
            <Tooltip title="Sub kategorya qo'shish!">
                <a>
                    <PlusSquareOutlined onClick={showModal} className='text-xl' />
                </a>
            </Tooltip>

            <Popconfirm
                title="Agar kategoryani o'chirsangiz unga tegilshli sub kategoryalar ham o'chadi!"
                onConfirm={handleDelete}
                onCancel={cancel}
                okText="Xa, o'chirish"
                cancelText="Bekor qilish"
            >
                <a>
                    <DeleteOutlined className='text-xl text-red-500' />
                </a>
            </Popconfirm>

            <Modal title="Sub kategorya Qo'shish" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Sub Kategorya nomini kiriting..." />

            </Modal>
        </div>
    )
}

const EditableComponent = ({ item }) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const handleUpdate = (val) => {
        dispatch(updateCategory({ id: item?.id, value: { ...val, is_active: false } })).then(() => setEdit(false))

    }
    return (
        <div>
            {
                edit ? (
                    <Form name="basic" onFinish={handleUpdate} className='flex items-center justify-between gap-2'>
                        <Form.Item
                            className='w-full'
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}>
                            <Input defaultValue={item.name} />
                        </Form.Item>
                        <Form.Item className='flex items-center justify-between gap-2'>
                            <Button htmlType="submit">Saqlash</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="button" onClick={() => setEdit(false)}>Bekor qilish</Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <div className='flex items-center justify-between gap-2'>
                        <span>{item.name}</span>
                        <Tooltip title="Kategoryani tahrirlash!">
                            <a>
                                <EditOutlined onClick={() => setEdit(true)} className='text-xl' />
                            </a>
                        </Tooltip>
                    </div>
                )
            }
        </div>
    )
}

export default ProductsPage