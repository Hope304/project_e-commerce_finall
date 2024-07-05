import { useContext,useEffect } from 'react';
import Hero from '@/Layouts/Hero';

import { Head } from '@inertiajs/react';
import FlashSale from '@/Layouts/FlashSale';
import Categories from '@/Layouts/Categories';
import HomeLayout from '@/Layouts/HomeLayout';
import { UserContext } from '@/context/UserContext';

export default function Home({auth}) {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    if (auth.user) {
      setUser(auth.user);
    }
  }, [auth.user, setUser]);
  return (
    <>
      <HomeLayout user={auth.user} >
        <Head title="Home" />
        
        {/* <Hero/> */}
        <FlashSale/>
        {/* <Categories/> */}
      </HomeLayout>
    </>
  )
}
