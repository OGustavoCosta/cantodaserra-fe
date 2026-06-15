import type { LucideIcon } from "lucide-react"
import type { IconProps } from "@/components/Icons";

type Props = {
  icon: LucideIcon | React.ComponentType<IconProps>;
  title: string;
  text?: string;
  className?: string;
}

function BenefitCard({icon: Icon, title, text, className}: Props){
  return(
    <article className={`benefitCard flex flex-col items-center gap-3 flex-1 ${className}`}>
      <div className="benefitCard__iconWrapper py-6 px-4 rounded-4xl text-ds-green-200 border-ds-green-200 border-[3px] w-fit">
        <Icon size={36} strokeWidth={2}/>
      </div>
      <div className="benefitCard__content flex flex-col items-center gap-1">
        <h3 className="benefitCard__title text-2xl/[110%] font-ds-cormorant font-bold text-center text-ds-green-200">{title}</h3>
        {text && (<p className="benefitCard__text text-center text-sm/[120%] text-ds-400">{text}</p>)}
      </div>
    </article>
  )
}

export default BenefitCard