import {useState} from "react";

interface Props {
  label: string // ボタンのラベル
  id: string
  active?: boolean
}

function TabButton({label, id, active = false}: Props) {
  const [isActive, setIsActive] = useState(active)
  function handleClick(event: any) {
    event.preventDefault();
    setIsActive(! isActive);
  }
  return (
    <a
      className={isActive ? 'nav-link active': 'nav-link'}
      id={'nav-tab-' + id}
      href={'#nav-' + id}
      aria-controls={'nav-' + id}
      aria-selected={ isActive ? 'true': 'false'}
      data-bs-toggle="tab"
      role="tab"
      onClick={handleClick}
    >
        {label}
    </a>
  )
}

export default TabButton
