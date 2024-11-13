"use client"
import Button from "@modules/elements/button"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel" // Assurez-vous que ce chemin est correct
import Image from "next/image"
import Link from "next/link"
import { client } from "../../../lib/sanity/client"
import { urlForImage } from "../../../lib/sanity/image"
import { Galerie } from "../../../lib/util/interface"

// Fetch data from Sanity
async function getGaleries() {
  const query = `
    *[_type == "galerie"] {
      title,
      slug,
      publishedAt,
      excerpt, 
      "image1": image1.asset->url,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
  `
  const data = await client.fetch(query)
  return data
}

export const revalidate = 60

export default async function CarouselProject() {
  const galeries: Galerie[] = await getGaleries()

  return (
    <div className="p-10">
      <div className=" mb-16">
        <h1 className="flex text-[2.8rem] md:text-[3.5rem] leading-[2.5rem] lg:text-[5rem] 2xl:text-[8rem] font-lune uppercase text-lune pt-52">
          Réalisations
        </h1>
      </div>

      {/* Carousel Component */}
      <Carousel>
        <CarouselContent>
          <div className=" justify-between flex flex-row gap-10 top-[20vw] px-20 w-full absolute z-40 ">
            <div>
              <CarouselPrevious className="text-white" />
            </div>
            <div>
              <CarouselNext className="text-white" />
            </div>
          </div>
          {galeries.map((galerie, index) => (
            <CarouselItem key={index} className="flex flex-col mb-10">
              <Link href={`/projets/${galerie?.slug?.current}`}>
                <Image
                  src={urlForImage(galerie?.image1)}
                  alt={galerie.title}
                  width={2880}
                  height={1620}
                  className="md:rounded-[2vw] rounded-[15vw] object-cover w-full h-auto md:h-auto md:max-h-[50vh] hover:opacity-40 transition duration-150 ease-out hover:ease-in"
                />
              </Link>
              <div className="mx-5 mt-3">
                <h2 className="font-semibold text-[1.4rem] md:text-[1.30rem] lg:text-[1.6rem] 2xl:text-[2rem] py-1 text-lune font-lune uppercase">
                  {galerie.title}
                </h2>
                <h3 className="text-[.85rem] md:text-[.75rem] lg:text-[.85rem] 2xl:text-[.95rem] pb-5">
                  {galerie.excerpt}
                </h3>
                <Button
                  href={`/projets/${galerie?.slug?.current}`}
                  variant="primary"
                >
                  Découvrir le projet
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
