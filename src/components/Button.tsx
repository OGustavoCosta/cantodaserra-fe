type Props = {
  text: string;
  link: string;
  target?: "_self" | "_blank";
  rel?: string;
}

function Button({ text, link, target, rel }: Props){
  return(
    <a
      className="button group relative overflow-hidden block text-ds-green-100 border border-ds-green-100 rounded-sm text-sm/[100%] py-3 px-6 w-fit transition-all duration-500 hover:text-white hover:scale-101"
      href={link}
      target={target}
      rel={rel}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[200%] rounded-full bg-ds-green-100 scale-0 transition-transform duration-500 ease-out group-hover:scale-100 pointer-events-none"
      />
      <span className="relative z-10">{text}</span>
    </a>
  )
}

export default Button
