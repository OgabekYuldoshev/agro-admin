import { Watch } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className="bg-black bg-opacity-90 h-screen w-full flex items-center justify-center">
            <Watch
                heigth="100"
                width="100"
                color='white'
                ariaLabel='loading'
            />
        </div>
    )
}
export default Loader