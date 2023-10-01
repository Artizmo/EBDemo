type FiltersIconProps = {
  className?: string
}

export default function FiltersIcon({ className }: FiltersIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"></path>
    </svg>
  )
};