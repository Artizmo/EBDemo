type EBMenuProps = {
  children: React.ReactElement
  show: boolean
  onClose: () => void
}

export default function EBMenu({ children, show = false, onClose }: EBMenuProps) {
  if (!show) return null

  return (
    <div className="fixed bg-red min-w-[80%] flex flex-col right-0 inset-y-0">
      {children}
      <button onClick={onClose}>close</button>
    </div>
  )
}