
import Hero from '@/Layouts/Hero';
import { Head } from '@inertiajs/react';
import FlashSale from '@/Layouts/FlashSale';
import Categories from '@/Layouts/Categories';
import HomeLayout from '@/Layouts/HomeLayout';
import CartLayout from '@/Layouts/CartLayout';
export default function Cart({auth}) {
  return (
    <>
      <HomeLayout user={auth.user} >
        <Head title="Cart" />
        <CartLayout/>
      </HomeLayout>
    </>
  )
}
