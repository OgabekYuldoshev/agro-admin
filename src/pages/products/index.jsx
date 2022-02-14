import { useEffect } from 'react'
import { Button, Table, Popconfirm, Badge } from 'antd'
import { getProducts, deleteProduct } from "@store/reducers/Products"
import { useDispatch, useSelector } from "react-redux"
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

const ProductsPage = () => {
    const history = useHistory()
    const store = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts(1))
    }, [dispatch])

    const columns = [
        {
            title: 'Mahsulot raqami',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Nomi',
            dataIndex: 'name',
            key: 'name',
            width: '300px'
        },
        {
            title: 'Narxi',
            dataIndex: '',
            key: '',
            render: (row) => <span>{row.price}{' '}{row.currencies?.name}</span>
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

    const paginateFunction = (pageNumber) => {
        dispatch(getProducts(pageNumber))
    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mb-4">Mahsulot yaratish</h1>
                <Button onClick={() => history.push('/products/new')}>Yangi mahsulot qo'shish</Button>
            </div>
            <Table
                loading={store.isLoading}
                columns={columns}
                pagination={{ pageSize: store.per_page, defaultCurrent: store.current_page, onChange: paginateFunction, total: store.total }}
                dataSource={store.products}
            />
        </>
    )
}

const ActionComponent = ({ item }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProduct(item?.id))
    }

    function cancel() {
        message.error("O'chirish bekor qilindi!")
    }

    return (
        <div className='flex gap-2'>
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
        </div>
    )
}

export default ProductsPage