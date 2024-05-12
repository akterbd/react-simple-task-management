
const Button = ({children, ...props}) => {
  return (
    <button className="px-4 py-3 text-xs md:text-base rounded-md bg-teal-900 text-stone-100 hover:bg-teal-950 hover:text-stone-100" {...props}>{children}</button>
  )
}

export default Button