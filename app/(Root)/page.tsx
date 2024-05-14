import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 wrapper">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pl-4">
              Host,Connect,Celebrate: Your Events,Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24 ">
              Book and learn helpful tips form 1233+ mentors in world-class
              companies with our global community.
            </p>

            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Hero Img"
            width={1000}
            height={1000}
            className="max-h-[70v] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events "
        className=" wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands Of Events
        </h2>
        <div className=" flex w-full flex-col  gap-5 md:flex-row">
          Search 
          CategoryFilter

        </div>
      </section>
    </>
  );
}
