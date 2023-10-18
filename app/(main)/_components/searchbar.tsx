type SearchBarProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function SearchBar({ ...props }: SearchBarProps) {
  return (
    <div className="flex items-center justify-center flex-1">
      <input placeholder="Let's find what you're looking for!" className="w-[30rem] h-10 p-2 rounded-[5px] border border-[#b6b6b6]" {...props} />
    </div>
  )
}