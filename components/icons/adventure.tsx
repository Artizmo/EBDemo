type AdventureIconProps = {
  className?: string
};

export default function AdventureIcon({ className }: AdventureIconProps) {
  return (
    <svg className={className} viewBox="0 0 48 32">
      <path d='M30 14 16.753 0 0 32l17-17 8 5 5-6zM0 32h48H0z' fill='#CFB66B' />
      <path fill='#B16550' d='m25 20 23 12-18-18z' />
      <path fill='#0099A8' d='M0 32h16l9-12-8-5z' />
      <path fill='#005F69' d='M16 32h32L25 20z' />
      <path fill='#F27A6F' d='m30 14 18 18L34.858 8z' />
    </svg>
  )
};