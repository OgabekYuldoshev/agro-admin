import { useState } from 'react'
import { Button } from 'antd'
import AddProducts from "./AddProducts"

const ProductsPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">Mahsulot yaratish</h1>
                <Button onClick={showModal}>Yangi mahsulot qo'shish</Button>
                <AddProducts open={isModalVisible} onClose={showModal} />
            </div>
            hello
        </>
    )
}

export default ProductsPage