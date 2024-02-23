import management from './management'
import overview from './overview'

const menuItems = [overview, management]

export type TMenuItem = typeof overview | typeof management

export default menuItems
