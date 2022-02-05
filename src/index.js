import { Suspense, lazy } from 'react'
import { Provider } from "react-redux"
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import reportWebVitals from './reportWebVitals'
import Loader from '@src/components/Loader'
import 'antd/dist/antd.less'
import "./index.css"
// import axios from 'axios'

const LazyApp = lazy(() => import('./App'))
// axios.defaults = {
//   baseURL: 'https://guarded-cliffs-29944.herokuapp.com/api',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json; charset=utf-8'
//   }
// }
ReactDOM.render(
  <Provider store={store} >
    <Suspense fallback={<Loader />}>
      <LazyApp />
      <ToastContainer newestOnTop autoClose={3000} position='top-center' hideProgressBar />
    </Suspense>
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
