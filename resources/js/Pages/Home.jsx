
import Hero from '@/Layouts/Hero';
import { Head } from '@inertiajs/react';
import FlashSale from '@/Layouts/FlashSale';
import Categories from '@/Layouts/Categories';

export default function Home({auth,user,children}) {
  
  return (
    <>
        <Head title="Home" />
        <Hero/>
        <FlashSale/>
        <Categories/>
    </>
  )
}
