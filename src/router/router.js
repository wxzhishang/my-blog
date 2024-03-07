import { lazy } from "react" //组件懒加载
import { Suspense } from "react" //加载时插入组件

const Home = lazy(() => import('../pages/Home'))

const Routes = [
    {
        path: '/',
        mata: {
            title: '首页',
            name: 'home'
        },
        element: <Home />
    }
]

export default Routes;