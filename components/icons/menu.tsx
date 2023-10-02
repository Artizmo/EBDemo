type MenuIconProps = {
  className?: string
}

export default function MenuIcon({ className }: MenuIconProps) {
  return (
    <svg className={`w-[24px] h-[24px] ${className}`} viewBox="0 0 24 24">
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
    </svg>
  )
};