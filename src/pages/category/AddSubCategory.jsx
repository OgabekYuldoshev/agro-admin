import { Modal, Input, Button, Table, Popconfirm, Tooltip, message, Form } from "antd"
import { useState } from 'react'
import { deleteSubCategory, createSubCategory, updateSubCategory } from "@store/reducers/Category"
// // import { useHistory, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
    EditOutlined,
    OrderedListOutlined,
    PlusSquareOutlined,
    DeleteOutlined
} from '@ant-design/icons'

const AddSubCategory = ({ open, onClose, item }) => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Name',
            dataIndex: '',
            key: '',
            width: '800px',
            render: row => <EditableComponent parentID={item?.id} item={row} />
        },
        {
            title: 'Action',
            dataIndex: '',
            width: '100px',
            key: 'x',
            render: (row) => <ActionComponent item={row} />
        }
    ]

    const handleCreate = (val) => {
        dispatch(createSubCategory({ category_id: item.id, ...val })).then(() => message.success("Sub Kategorya yaratildi!"))
    }

    return (
        <Modal title={item?.name} visible={open} onCancel={onClose} footer={null} width={800} centered>
            <Form onFinish={handleCreate} className="flex gap-2 w-full">
                <Form.Item rules={[{ required: true, message: 'Please input your name!' }]} name='name' className="w-full">
                    <Input placeholder="Sub Kategorya nomini kiriting..." />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Qo'shish</Button>
                </Form.Item>
            </Form>
            <Table
                columns={columns}
                dataSource={item?.sub_categories}
            />
        </Modal>
    )
}


const ActionComponent = ({ item }) => {
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    const handleDelete = () => {
        dispatch(deleteSubCategory({ id: item.id })).then(() => {
            message.success('Kategorya o\'chirildi')
        })
    }

    function cancel(e) {
        console.log(e)
        message.error('Click on No')
    }

    return (
        <>
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
            <AddSubCategory open={isModalVisible} onClose={showModal} data={item?.sub_category} />
        </>
    )
}

const EditableComponent = ({ parentID, item }) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const handleUpdate = (val) => {
        dispatch(updateSubCategory({ id: item?.id, value: { ...val, category_id: parentID, is_active: false } })).then(() => setEdit(false))
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
export default AddSubCategory