import Image from "next/image";

/* ÍCONES */
import { Utensils, Wifi } from "lucide-react";
import { Netflix } from "@/components/Icons";
import type { LucideIcon } from "lucide-react"
import type { IconProps } from "@/components/Icons";


/* IMAGENS DO HERO */
import Banner from "#/public/hero-banner.jpg"
import BannerMobile from "#/public/hero-banner-mobile.png"

/* IMAGENS DO TURISMO */
import ChurchInRuins from "#/public/tourism/church-in-ruins.jpg"
import Church from "#/public/tourism/church.jpg"
import ChurchSeenFromAbove from "#/public/tourism/church-seen-from-above.jpg"
import Ounce from "#/public/tourism/ounce.jpg"
import ThreeBrothers from "#/public/tourism/three-brothers.jpg"
import MunicipalMarket from "#/public/tourism/municipal-market.jpg"
import Square from "#/public/tourism/square.jpg"

/* IMAGENS DA LOCALIZAÇÃO */
import BreakfastBanner1 from "#/public/location/breakfast-banner-1.jpg"
import BreakfastBanner2 from "#/public/location/breakfast-banner-2.jpg"
import TableInTheCorner from "#/public/location/table-in-the-corner.jpg"
import LivingRoom from "#/public/location/living-room.jpg"


/* COMPONENTES */
import BenefitCard from "@/components/BenefitCard";
import Button from "@/components/Button";

type Benefits = {
  id: number;
  icon:  LucideIcon | React.ComponentType<IconProps>;
  title: string;
  text?: string;
  className?: string;
}

function Home() {
  const benefits: Benefits[] = [
    {
      id: 1,
      icon: Utensils,
      title: "Café da Manhã",
      text: "Comece o dia do jeito certo: café passado na hora, pão quentinho e frutas da estação, servidos com o cuidado de quem recebe como em casa."
    },
    {
      id: 2,
      icon: Wifi,
      title: "Wi-Fi",
      text: "Fique conectado sempre que precisar. Internet disponível em todos os ambientes da pousada, sem complicação."
    },
    {
      id: 3,
      icon: Netflix,
      title: "Netflix",
      text: "Porque descanso também se faz em frente à tela. Netflix incluso no seu quarto — um mimo a mais para tornar sua estadia ainda mais especial."
    },
  ]

  return (
    <>
      {/* HERO */}
      <div className="hero__background background-section">
        <section
          className="hero w-full max-w-[1440px] h-svh min-h-svh py-16 pb-8 flex"
          aria-labelledby="hero-title"
        >
          <div className="hero__banner w-full h-full bg-ds-neutral-100 rounded-2xl overflow-hidden">
            <Image className="w-full h-full object-cover hidden md:block" src={Banner} alt=""></Image>
            <Image className="w-full h-full object-cover md:hidden" src={BannerMobile} alt=""></Image>
          </div>
        </section>
      </div>

      {/* BENEFÍCIOS */}
      <div className="banefits__background background-section">
        <section
          className="banefits w-full max-w-[1280px] py-16 flex flex-col justify-center"
          aria-labelledby="benefits-title"
        >
          <div className="banefits__header">
            <h2 id="benefits-title" className="banefits__title sr-only">Benefícios</h2>
          </div>
          <div className="banefits__content flex flex-col items-center sm:items-start sm:flex-row w-full gap-8 justify-center flex-wrap">
            {benefits.map(({id, ...props}) => (
              <BenefitCard className="max-w-70" key={id} {...props}/>
            ))}
          </div>
        </section>
      </div>

      {/* LOCALIZAÇÃO */}
      <div className="location__background background-section">
        <section
          className="location w-full max-w-[1440px] py-8 grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1.5fr] mlg:grid-cols-3 md:grid-rows-[20rem_min-content_20rem] gap-4 md:gap-6"
          aria-labelledby="location-title"
        >
          <Image className="location__image md:min-w-0 rounded-sm w-full h-full object-cover col-span-2" src={BreakfastBanner1} alt=""/>
          <Image className="location__image md:min-w-0 rounded-sm w-full h-full object-cover" src={BreakfastBanner2} alt=""/>
          <Image className="location__image md:min-w-0 rounded-sm w-full h-full object-cover md:row-span-2" src={TableInTheCorner} alt=""/>
          <div className="location__wrapper row-start-2 md:row-auto col-span-2 flex flex-col gap-4 p-4 mlg:p-8">
            <div className="location__content flex flex-col gap-1">
              <h2 className="location__title text-[1.75rem]/[110%] xs:text-[2rem]/[110%] mlg:text-4xl/[110%] text-ds-green-200 font-bold font-ds-cormorant">Onde o tempo tem outro ritmo</h2>
              <p className="location__text text-sm/[120%] mlg:text-base/[120%] text-ds-neutral-400">No coração de Palmas de Monte Alto, o Canto da Serra é uma pausa na correria. Pousada pequena, acolhedora e com aquele jeitinho de interior baiano que faz a gente se sentir em casa desde a chegada. Ficamos a poucos passos da Praça Central e das principais atrações históricas da cidade — o ponto de partida perfeito para descobrir o charme autêntico desse pedaço da Bahia.</p>
            </div>

            <Button text="Localização no Maps" link="https://maps.app.goo.gl/dPUvK5CPZEWcCMws7" target="_blank" rel="noopener noreferrer"/>
          </div>
          <Image className="location__image md:min-w-0 rounded-sm w-full h-full object-cover col-span-2" src={LivingRoom} alt=""/>
        </section>
      </div>

      {/* TURISMO */}
      <div className="tourism__background background-section">
        <section
          className="tourism w-full max-w-[1440px] py-8 pb-0 grid grid-cols-2 md:grid-cols-3 md:grid-rows-[1fr_repeat(6,10rem)] gap-4 md:gap-6"
          aria-labelledby="tourism-title"
        >
          <div className="tourism__wrapper col-span-2 md:col-span-1 md:col-start-1 md:row-start-1 flex flex-col gap-1 p-2 mlg:p-4">
            <h2 id="tourism-title" className="tourism__title text-[1.75rem]/[110%] xs:text-[2rem]/[110%] mlg:text-4xl/[110%] text-ds-green-200 font-bold font-ds-cormorant">Turismo em PMA</h2>
            <p className="tourism__text text-sm/[120%] mlg:text-base/[120%] text-ds-neutral-400">Palmas de Monte Alto tem uma história guardada em cada pedra. A Igreja Matriz, as ruínas centenárias, a Pedra dos Três Irmãos e o Mercado Municipal contam capítulos de uma cidade que ainda não foi descoberta pelo turismo de massa — e é exatamente isso que a torna tão especial. Uma experiência genuína do interior da Bahia, para quem aprecia o que é verdadeiro.</p>
          </div>

          <Image className="tourism__image rounded-sm w-full h-full object-cover col-span-2 md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2" src={ChurchInRuins} alt="Ruínas de igreja histórica"/>
          <Image className="tourism__image rounded-sm w-full h-full object-cover md:col-start-1 md:row-start-2 md:row-span-2" src={Church} alt="Igreja"/>
          <Image className="tourism__image rounded-sm w-full h-full object-cover md:col-start-2 md:row-start-3 md:row-span-3" src={ChurchSeenFromAbove} alt="Vista aérea da igreja"/>
          <Image className="tourism__image rounded-sm w-full h-full object-cover col-span-2 md:col-start-1 md:col-span-2 md:row-start-6 md:row-span-2" src={MunicipalMarket} alt="Mercado municipal"/>
          <Image className="tourism__image rounded-sm w-full h-full object-cover md:col-start-3 md:row-start-3 md:row-span-2" src={Ounce} alt="Estátua da onça"/>
          <Image className="tourism__image rounded-sm w-full h-full object-cover md:col-start-1 md:row-start-4 md:row-span-2" src={Square} alt="Praça"/>
          <Image className="tourism__image rounded-sm w-full h-full object-cover col-span-2 md:col-span-1 md:col-start-3 md:row-start-5 md:row-span-3" src={ThreeBrothers} alt="Pedra dos Três Irmãos"/>
        </section>
      </div>
    </>
  );
}

export default Home