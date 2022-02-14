import { useEffect } from "react"
import { Table, Button } from "antd"
import { getPage, deletePage } from "@store/reducers/Units"
import { useSelector, useDispatch } from "react-redux"
import {
    DeleteOutlined
} from '@ant-design/icons'
import { Link } from "react-router-dom"

const Page = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.units)
    useEffect(() => {
        dispatch(getPage())
    }, [])

    const columns = [
        {
            title: 'Sarlovha',
            dataIndex: 'title',
            key: 'title',
            width: '300px'
        },
        {
            title: 'Nomi',
            dataIndex: 'content',
            key: 'content'
        },
        {
            dataIndex: '',
            key: '',
            render: (row) => <DeleteOutlined className="text-red-500" onClick={() => dispatch(deletePage(row.id))} />
        }
    ]
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mb-4">Sahifalar</h1>
                <Link to="/settings/page/new">
                    <Button >Yangi sahifa qo'shish</Button>
                </Link>
            </div>
            <Table
                loading={store.isLoading}
                columns={columns}
                // pagination={{ pageSize: store.per_page, defaultCurrent: store.current_page, onChange: paginateFunction, total: store.total }}
                dataSource={store.pages}
            />
        </>
    )
}
export default Page