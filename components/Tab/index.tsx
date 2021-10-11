import {useState} from "react";

interface Props {
  activeId: string
  children: JSX.Element | JSX.Element[] | string;
}

function Tab({children, activeId}: Props) {
  const [activeItem, setActiveItem] = useState({activeId})
  console.log(activeItem)
  return (
    <>
      {children}
    </>
  )
}

function changeTabButton() {

}

export default Tab
