type EBIconButtonProps = {
  icon: React.ReactElement,
  label: String,
  onClick: () => void
}

export default function EBIconButton({ icon, label, onClick }: EBIconButtonProps) {
  return (
    <section>
      {icon}
      <button onClick={onClick}>{label}</button>
    </section>
  )
}