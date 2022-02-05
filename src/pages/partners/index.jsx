import { Table, Popconfirm, Button, Input, Tooltip, Modal, message, Form } from 'antd'
import { useState, useEffect } from 'react'
import { getPartner, deletePartner, createPartner, updatePartner } from "@store/reducers/Partners"
// import { useHistory, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import AddPartner from './AddPartner'


const PartnerPage = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.partner)
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(val => !val)
    useEffect(() => {
        dispatch(getPartner())
    }, [])
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '500px'
        },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link'
        },
        {
            title: 'Status',
            dataIndex: '',
            key: '',
            render: (row) => <span className={`px-2 rounded ${row?.is_active ? "bg-green-500" : 'bg-red-500'} text-white`}>{row?.is_active ? "Active" : 'Unactive'}</span>
        },
        {
            title: 'Action',
            dataIndex: '',
            width: '100px',
            key: 'x',
            render: (row) => <ActionComponent item={row} />
        }
    ]

    const handleCreate = (values) => {
        // console.log(value)
        const formData = new FormData()
        for (const name in values) {
            formData.append(name, values[name])
        }
        dispatch(createPartner(formData)).then(() => toggle())
    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold ">Partnerlarni Qo'shish</h1>
                <Button onClick={toggle}>
                    Partner Qo'shish
                </Button>
                <AddPartner createPartner={handleCreate} onClose={toggle} open={open} />
            </div>
            <Table
                columns={columns}
                dataSource={store.partners}
            />
        </>
    )
}

const ActionComponent = ({ item }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deletePartner(item.id))
    }

    function cancel() {
        message.error("O'chirish bekor qilindi")
    }

    return (
        <div className='flex gap-2'>
            <Popconfirm
                title="Rostdan ham o'chirishni istaysizmi?"
                onConfirm={handleDelete}
                onCancel={cancel}
                okText="Xa, o'chirish"
                cancelText="Bekor qilish"
            >
                <a>
                    <DeleteOutlined className='text-xl text-red-500' />
                </a>
            </Popconfirm>
        </div>
    )
}

const EditableComponent = ({ item }) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const handleUpdate = (val) => {
        dispatch(updatePartner({ id: item?.id, value: { ...val, is_active: false } })).then(() => setEdit(false))

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

export default PartnerPage