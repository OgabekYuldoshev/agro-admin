import { Table, Modal, Button, Input, Menu, Dropdown } from 'antd'
// import { useState } from 'react'
// import { useHistory, useLocation } from "react-router-dom"
import {
    DeleteOutlined
} from '@ant-design/icons'

const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park'

    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
    }
]

const ProductsPage = () => {

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => (
                <div>
                    <Button type="danger">
                        O'chirish
                    </Button>
                </div>
            )
        }
    ]

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold ">Categoryalar yaratish</h1>
                <div className='flex gap-1'>
                    <Input placeholder="Kategorya nomini kiriting..." />
                    <Button >Qo'shish</Button>
                </div>
            </div>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                    rowExpandable: record => record.description
                }}
                dataSource={data}
            />
            {/* <ModalComponents isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} /> */}
        </>
    )
}

// const ModalComponents = ({ isModalVisible, handleOk, handleCancel }) => {
//     const footer = [
//         <Button key="back" type="success" onClick={handleCancel}>
//             Bekor Qilish
//         </Button>,
//         <Button key="submit" type="secondary" onClick={handleOk}>
//             Saqlash
//         </Button>
//     ]
//     return (
//         <Modal title="Categorya yaratish" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={footer}>
//             <Input placeholder="Kategorya nomini kiriting..." />
//         </Modal>
//     )
// }
export default ProductsPage