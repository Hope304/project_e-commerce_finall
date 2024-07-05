import { useContext,useEffect } from 'react';
import Hero from '@/Layouts/Hero';
import { Head } from '@inertiajs/react';
import FlashSale from '@/Layouts/FlashSale';
import Categories from '@/Layouts/Categories';
import HomeLayout from '@/Layouts/HomeLayout';
import CartLayout from '@/Layouts/CartLayout';
import { UserContext } from '@/context/UserContext';
export default function Cart({auth}) {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    if (auth.user) {
      setUser(auth.user);
    }
  }, [auth.user, setUser]);
  return (
    <>
      <HomeLayout user={auth.user} >
        <Head title="Cart" />
        <CartLayout/>
      </HomeLayout>
    </>
  )
}
