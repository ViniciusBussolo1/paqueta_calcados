import Header from '@/components/Header/Header'
import BannerMenu from '@/components/BannerMenu/BannerMenu'
import Infos from '@/components/Infos/Infos'
import Main from '@/components/Main/Main'
import Brands from '@/components/Brands/Brands'
import Footer from '@/components/Footer/Footer'
import Outlet from '@/components/Outlet/Outlet'

export default function Home() {
  return (
    <>
      <Header />
      <BannerMenu />
      <Infos />
      <Main />
      <Outlet />
      <Brands />
      <Footer />
    </>
  )
}
