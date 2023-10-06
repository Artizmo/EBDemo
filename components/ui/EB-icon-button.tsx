type EBIconButtonProps = {
  icon: React.ReactElement,
  label: String,
  onClick: () => void
}

export default function EBIconButton({ icon, label, onClick }: EBIconButtonProps) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}