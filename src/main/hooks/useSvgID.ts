import { useUniqueID } from './useUniqueID'

export const useSvgID = (type: string): [string, string] => {
  const id = useUniqueID(type + '-')
  return [id, `url(#${id})`]
}
