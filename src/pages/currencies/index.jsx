import {Table} from 'antd'
import {useEffect} from 'react'
import {getCurrenciesList} from "@store/reducers/Units"
import {useDispatch, useSelector} from "react-redux"

const CurrenciesPage = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.units)

    useEffect(() => {
        dispatch(getCurrenciesList())
    }, [])

    const columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
            width: '30px'
        },
        {
            title: 'Nomi',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Tavsif',
            dataIndex: 'desc',
            key: 'desc'
        },
        {
            title: 'Ramzi',
            dataIndex: 'sign',
            key: 'sign'
        }
    ]

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold ">Pul birliklari</h1>
            </div>
            <Table
                loading={store.isLoading}
                columns={columns}
                dataSource={store.currencies}
            />
        </>
    )
}

export default CurrenciesPage
