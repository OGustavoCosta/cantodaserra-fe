'use client'

/* ANIMAÇÕES */
import * as motion from "motion/react-client"
import { defaultViewport, motionContainer, fadeLeftItem} from "@/lib/animation"

/* SWIPER */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

/* COMPONENTES */
import BedroomCard from "@/components/cards/BedroomCard";

type Bedroom = {
  id: number,
  name: string,
  excerpt: string
  images: string[],
  beds: {double: number, single: number},
  privateBathroom: boolean,
  privateBalcony: boolean,
}

function Bedrooms(){
  const bedrooms: Bedroom[] = [
    {
      id: 1,
      name: "Suíte Beija-flor",
      excerpt: "Até 3 hóspedes",
      images: [
        "https://picsum.photos/seed/bedroom1-1/800/600",
        "https://picsum.photos/seed/bedroom1-2/800/600",
        "https://picsum.photos/seed/bedroom1-3/800/600",
      ],
      beds: { double: 1, single: 1 },
      privateBathroom: true,
      privateBalcony: true,
    },
    {
      id: 2,
      name: "Quarto Tico-tico",
      excerpt: "Até 2 hóspedes",
      images: [
        "https://picsum.photos/seed/bedroom2-1/800/600",
        "https://picsum.photos/seed/bedroom2-2/800/600",
        "https://picsum.photos/seed/bedroom2-3/800/600",
      ],
      beds: { double: 0, single: 2 },
      privateBathroom: false,
      privateBalcony: true,
    },
    {
      id: 3,
      name: "Quarto Avoante",
      excerpt: "Até 2 hóspedes",
      images: [
        "https://picsum.photos/seed/bedroom3-1/800/600",
        "https://picsum.photos/seed/bedroom3-2/800/600",
        "https://picsum.photos/seed/bedroom3-3/800/600",
      ],
      beds: { double: 0, single: 2 },
      privateBathroom: false,
      privateBalcony: true,
    },
    {
      id: 4,
      name: "Suíte Sabiá",
      excerpt: "Até 3 hóspedes",
      images: [
        "https://picsum.photos/seed/bedroom4-1/800/600",
        "https://picsum.photos/seed/bedroom4-2/800/600",
        "https://picsum.photos/seed/bedroom4-3/800/600",
      ],
      beds: { double: 1, single: 1 },
      privateBathroom: true,
      privateBalcony: true,
    },
    {
      id: 5,
      name: "Suíte Graúna",
      excerpt: "Até 2 hóspedes",
      images: [
        "https://picsum.photos/seed/bedroom5-1/800/600",
        "https://picsum.photos/seed/bedroom5-2/800/600",
        "https://picsum.photos/seed/bedroom5-3/800/600",
      ],
      beds: { double: 1, single: 0 },
      privateBathroom: true,
      privateBalcony: false,
    },
    {
      id: 6,
      name: "Suíte João-de-barro",
      excerpt: "Até 2 hóspedes",
      images: [
        "https://picsum.photos/seed/bedroom6-1/800/600",
        "https://picsum.photos/seed/bedroom6-2/800/600",
        "https://picsum.photos/seed/bedroom6-3/800/600",
      ],
      beds: { double: 1, single: 0 },
      privateBathroom: true,
      privateBalcony: false,
    },
  ]

  return(
    <div id="quartos" className="bedrooms__background background-section px-0!">
      <section
        className="bedrooms w-full max-w-[1440px] py-16 flex flex-col justify-center gap-6"
        aria-labelledby="bedrooms-title"
      >
        <motion.header
          className="bedrooms__header flex flex-col gap-4 w-full max-w-134 px-4 md:px-8 min-[1440px]:px-0!"
          initial="hidden" whileInView="visible" viewport={defaultViewport} variants={motionContainer}
        >
          <motion.h2 className="bedrooms__title text-[1.75rem]/[110%] xs:text-[2rem]/[110%] mlg:text-4xl/[110%] text-ds-green-200 font-bold font-ds-cormorant" variants={fadeLeftItem}>Quartos Aconchegantes</motion.h2>
          <motion.p className="bedrooms__text text-sm/[120%] mlg:text-base/[120%] text-ds-neutral-400" variants={fadeLeftItem}>Cada quarto do Canto da Serra leva o nome de um pássaro do sertão baiano — e, como eles, foi feito com cuidado e leveza. De suítes com banheiro privativo a quartos aconchegantes, há o espaço certo para a sua estadia.</motion.p>
        </motion.header>

        <Swiper
          className="w-full"
          spaceBetween={16}
          slidesPerView={1}
          slidesOffsetBefore={16}
          slidesOffsetAfter={16}
          
          breakpoints={{
            748: {
              slidesPerView: "auto",
              spaceBetween: 32,
              slidesOffsetBefore: 32,
              slidesOffsetAfter: 32,
            },
            1440: {
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0
            }
          }}
        >
          {bedrooms.map((props) => (
            <SwiperSlide className="w-full md:max-w-130 mlg:max-w-140" key={props.id}>
              <BedroomCard className="min-h-150 xs:min-h-auto aspect-square" {...props}></BedroomCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

export default Bedrooms