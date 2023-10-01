import FiltersIcon from '@/components/icons/filters'

type FilterSearchbarProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export default function FilterSearchbar({ ...props }: FilterSearchbarProps) {
  return (
    <div className="mx-4 flex items-center flex-1 overflow-hidden group/test">
      <div className="flex flex-1 justify-between border border-[#d6d6d6] rounded-[5px] overflow-auto">
        <input 
          placeholder="Let's find what you're looking for!" 
          className="p-2 w-full sm:w-[30rem] h-10 p-2 font-light" 
        />
        <button className="w-[44px] flex items-center justify-center border-[unset]">
          <FiltersIcon className="w-[24px] h-auto" />
        </button>
      </div>
    </div>
  )
}