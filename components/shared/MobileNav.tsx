"use client"
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from '@radix-ui/react-separator';
import NavItems from './NavItems';



const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image
            src="/assets/icons/menu.svg" // Assuming menu.svg is in the public folder
            alt="Menu"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <Image 
            src="/assets/images/logo.svg"
            alt='Logo'
            width={128}
            height={38}
          />
          <Separator  className="border , border-gray-200"/>
          <NavItems/>
          
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
