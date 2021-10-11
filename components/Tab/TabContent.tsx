import {useState} from "react";

interface Props {
  id: string
  active?: boolean
  children: JSX.Element | JSX.Element[] | string;
}

function TabContent({children, id, active = false}: Props) {
  const [isActive, setIsActive] = useState(active)
  return (
    <div
      className={isActive ? 'tab-pane fade show active': 'tab-pane fade'}
      id={'tab-' + id}
      role="tabpanel"
      aria-labelledby={'tab-' + id}
    >
      {children}
    </div>
  )
}

export default TabContent
