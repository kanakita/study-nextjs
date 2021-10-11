interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

function TabContents({children}: Props) {
  return (
    <div className="tab-content">
      {children}
    </div>
  )
}

export default TabContents
