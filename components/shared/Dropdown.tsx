import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { countries } from "@/constants"

type DropdownProps = {
  value?: string,
  onChangeHandler?: () => void,
}

function Dropdown({ value, onChangeHandler }: DropdownProps) {
  return (
    <Select  onValueChange={onChangeHandler} defaultValue={value} >

      <SelectTrigger className="select-field">
        <SelectValue placeholder="Country" />
      </SelectTrigger>

      <SelectContent className="bg-white">
        {countries.map((name) => (
          <SelectItem value={name}> {name} </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default Dropdown
