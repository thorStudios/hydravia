
import { Outlet } from 'react-router'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
