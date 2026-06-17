'use client'

import Image from "next/image";
import { useState } from "react"
import type { Swiper as SwiperClass } from 'swiper'

/* ÍCONES */
import { Bath, BedSingle, BedDouble, Armchair, ChevronLeft, ChevronRight } from "lucide-react"
import { Whatsapp } from "@/components/Icons"

/* SWIPER */
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

/* COMPONENTES */
import Button from "@/components/Button"

type Props = {
  name: string;
  excerpt: string
  images?: string[];
  beds: {double: number; single: number};
  privateBathroom: boolean;
  privateBalcony: boolean;
  className?: string;
}

function BedroomCard({ name, excerpt, images, beds, privateBathroom, privateBalcony, className}: Props){
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)

  return(
    <article className={`BedroomCard w-full flex flex-col rounded-xl bg-ds-neutral-100 relative text-ds-neutral-400 text-sm/[110%] overflow-hidden group/card ${className}`}>
      <div className="BedroomCard__carousel bg-ds-neutral-200 shrink-0 h-[70%] mlg:h-full relative">
        {images && images.length > 0 && (
          <>
            <Swiper
              className="w-full h-full"
              onSwiper={setSwiper}
              slidesPerView={1}
              loop
              allowTouchMove={false}
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <Image src={src} alt="" className="w-full h-full object-cover" width={1000} height={1000}/>
                </SwiperSlide>
              ))}
            </Swiper>

            <button onClick={() => swiper?.slidePrev()} className="absolute left-4 top-2/5 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition-colors rounded-full p-1.5">
              <ChevronLeft size={22} strokeWidth={2}/>
            </button>
            <button onClick={() => swiper?.slideNext()} className="absolute right-4 top-2/5 -translate-y-1/2 z-10 bg-white/80 hover:bg-white transition-colors rounded-full p-1.5">
              <ChevronRight size={22} strokeWidth={2}/>
            </button>
          </>
        )}
      </div>

      <div className="BedroomCard__content @container @container/card absolute left-0 bottom-0 mlg:translate-y-full group-hover/card:translate-y-0 transition-transform w-full flex flex-col gap-6 p-6 rounded-xl bg-ds-neutral-0 z-5">
        <div className="BedroomCard__wrapper flex justify-between gap-4 flex-col @md:flex-row">
          <div className="BedroomCard__header flex flex-col">
            <h3 className="BedroomCard__title font-medium text-xl/[110%] text-ds-neutral-900">{name}</h3>
            <p className="BedroomCard__excerpt">{excerpt}</p>
          </div>

          <Button icon={Whatsapp} text="Verificar Disponibilidade" link="#" target="_blank"/>
        </div>
        <div className="BedroomCard__wrapper flex gap-8 gap-y-4 flex-wrap">
          {/* CAMA DE CASAL */}
          {beds.double > 0 ? (
            <div className="BedroomCard__badge BedroomCard__badge--doubleBed flex gap-2 items-center shrink-0">
              <BedDouble className="shrink-0" strokeWidth={1.5}/>
              <p className="BedroomCard__text">{beds.double > 1 ? `${beds.double}x Camas de casal` : 'Cama de casal'}</p>
            </div>
          ) : ''}

          {/* CAMA DE SOLTEIRO */}
          {beds.single > 0 ? (
            <div className="BedroomCard__badge BedroomCard__badge--singleBed flex gap-2 items-center">
              <BedSingle className="shrink-0" strokeWidth={1.5}/>
              <p className="BedroomCard__text">{beds.single > 1 ? `${beds.single}x Camas de solteiro` : 'Cama de solteiro'}</p>
            </div>
          ) : ''}

          {/* BANHEIRO */}
          <div className="BedroomCard__badge BedroomCard__badge--bathroom flex gap-2 items-center">
            <Bath className="shrink-0" strokeWidth={1.5}/>
            <p className="BedroomCard__text">Banheiro {privateBathroom ? 'privativo' : 'social'}</p>
          </div>

          {/* VARANDA */}
          {privateBalcony && (
            <div className="BedroomCard__badge BedroomCard__badge--balcony flex gap-2 items-center">
              <Armchair className="shrink-0" strokeWidth={1.5}/>
              <p className="BedroomCard__text">Varanda privativa</p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default BedroomCard
