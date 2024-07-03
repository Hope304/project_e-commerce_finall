
import Hero from '@/Layouts/Hero';
import { Head } from '@inertiajs/react';
import FlashSale from '@/Layouts/FlashSale';
import Categories from '@/Layouts/Categories';
import HomeLayout from '@/Layouts/HomeLayout';
export default function Home({auth}) {
  
  return (
    <>
        <Head title="Home" />
        <Hero/>
        <FlashSale/>
        <Categories/>
    </>
  )
}
