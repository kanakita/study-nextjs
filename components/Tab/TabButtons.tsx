interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

function TabButtons({children}: Props) {
  return (
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        {children}
      </div>
    </nav>
  )
}





export default TabButtons
