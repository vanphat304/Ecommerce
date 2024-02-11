import {  useCallback, useState } from 'react'
import { SetValue } from 'src/types/common'

export function useToggle(defaultValue?: boolean): [boolean, () => void, SetValue<boolean>] {
  const [value, setValue] = useState(!!defaultValue)

  const toggle = useCallback(() => setValue((x) => !x), [])

  return [value, toggle, setValue]

  
}
