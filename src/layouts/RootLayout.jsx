
import { Outlet } from 'react-router'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Blog from '../component/Blog'
import Cta from '../component/Cta'

export default function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}
