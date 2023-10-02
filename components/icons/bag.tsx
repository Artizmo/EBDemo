type BagIconProps = {
  className?: string
}

export default function BagIcon({ className }: BagIconProps) {
  return (
    <svg className={`w-[24px] h-[24px] ${className}`} viewBox="0 0 24 24">
      <path d="M12.0049 0.999512C14.7663 0.999512 17.0049 3.23809 17.0049 5.99951V7.99951H20.0049C20.5572 7.99951 21.0049 8.44723 21.0049 8.99951V20.9995C21.0049 21.5518 20.5572 21.9995 20.0049 21.9995H4.00488C3.4526 21.9995 3.00488 21.5518 3.00488 20.9995V8.99951C3.00488 8.44723 3.4526 7.99951 4.00488 7.99951H7.00488V5.99951C7.00488 3.23809 9.24346 0.999512 12.0049 0.999512ZM17.0049 10.9995H15.0049V11.9995C15.0049 12.5518 15.4526 12.9995 16.0049 12.9995C16.5177 12.9995 16.9404 12.6135 16.9982 12.1161L17.0049 11.9995V10.9995ZM9.00488 10.9995H7.00488V11.9995C7.00488 12.5518 7.4526 12.9995 8.00488 12.9995C8.51772 12.9995 8.94039 12.6135 8.99815 12.1161L9.00488 11.9995V10.9995ZM12.0049 2.99951C10.4072 2.99951 9.10122 4.24843 9.00998 5.82324L9.00488 5.99951V7.99951H15.0049V5.99951C15.0049 4.40183 13.756 3.09585 12.1812 3.0046L12.0049 2.99951Z"></path>
    </svg>
  )
};