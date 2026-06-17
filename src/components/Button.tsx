import type { LucideIcon } from "lucide-react"
import type { IconProps } from "./Icons"

type Props = {
  icon?: LucideIcon | React.ComponentType<IconProps>;
  text: string;
  link: string;
  target?: "_self" | "_blank";
}

function Button({ icon: Icon, text, link, target}: Props){
  return(
    <a
      className="button group/button relative overflow-hidden flex gap-2 items-center shrink-0 text-ds-green-100 border border-ds-green-100 rounded-sm text-sm/[100%] py-3 px-6 w-fit transition-all duration-500 hover:text-white hover:scale-101 h-fit"
      href={link}
      target={target}
      rel="noopener noreferrer"
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[200%] rounded-full bg-ds-green-100 scale-0 transition-transform duration-500 ease-out group-hover/button:scale-100 pointer-events-none"
      />

      {Icon && <Icon className="relative z-10" size={16} strokeWidth={1.5}/>}
      <span className="relative z-10">{text}</span>
    </a>
  )
}

export default Button
