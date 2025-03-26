import IMenuItem from '../../../types/menu-item'

interface IProps {
  menu: IMenuItem
}

export default function MenuItem(props: IProps) {
  return (
    <div>
      <p>{props.menu.name}</p>
    </div>
  )
}
