import { Suspense, lazy } from 'react'
import { Provider } from "react-redux"
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import reportWebVitals from './reportWebVitals'
import Loader from '@src/components/Loader'
import 'antd/dist/antd.less'
import "./index.css"

const LazyApp = lazy(() => import('./App'))

ReactDOM.render(
  <Provider store={store} >
    <Suspense fallback={<Loader />}>
      <LazyApp />
      <ToastContainer />
    </Suspense>
  </Provider>,
  document.getElementById('root')
)
reportWebVitals()
