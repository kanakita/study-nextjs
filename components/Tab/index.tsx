import {useState} from "react";

interface TabProps {
  tabItems: {
    label: string,
    id: string,
    panel: JSX.Element | JSX.Element[] | string;
  }[]
  initialOpen?: string // 初期状態で開いているタブのid
}

function Tab({ tabItems, initialOpen = tabItems[0].id }: TabProps) {
  const [activeItem, setActiveItem] = useState(initialOpen);
  console.log(activeItem)
  return (
    <>
      <TabButton
        items={tabItems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <TabContent
        items={tabItems}
        activeItem={activeItem}
      />
    </>
  )
}

interface TabButtonProps {
  items: Object[],
  activeItem: string
  setActiveItem: (value: string) => void
}
export function TabButton({items, setActiveItem, activeItem}: TabButtonProps) {
  // function handleClick (event) {
  //   onHandleClick(event)
  //   console.log(event)
  // }
  return (
    <nav>
      <div className="nav nav-tabs" role="tablist">
        {items.map(({label, id}) => (
          <TabButtonItem
            key={id}
            label={label}
            id={id}
            onHandleClick={function () {
              setActiveItem(id)
            }}
            activeItem={activeItem}
          />
        )
        // {
        //   return (
        //     <a
        //       key={id}
        //       className={`nav-link ${isActive ? 'active' : ''}`}
        //       id={`nav-tab-${id}`}
        //       href={`#nav-${id}`}
        //       aria-controls={`nav-${id}`}
        //       aria-selected="true"
        //       data-bs-toggle="tab"
        //       role="tab"
        //       onClick={handleClick}
        //     >
        //       {label}
        //     </a>
        //   )
        // }
        )}
      </div>
    </nav>
  )
}

interface TabButtonItemProps {
  label: string, // ボタンのラベル
  id: string, // ボタンのID
  onHandleClick: (value: string) => void　// ラベルをセットする関数
  activeItem: string
}

export function TabButtonItem({label, id, onHandleClick, activeItem}: TabButtonItemProps) {

  /**
   * ボタンを押した時
   */
  function handleClick () {
    onHandleClick(id)
    // console.log(id)
  }

  return (
    <a
      key={id}
      className={`nav-link ${activeItem === id ? 'active': ''}`}
      id={`nav-tab-${id}`}
      href={`#nav-${id}`}
      aria-controls={`nav-${id}`}
      aria-selected={activeItem === id ? 'true': 'false'}
      data-bs-toggle="tab"
      role="tab"
      onClick={handleClick}
    >
      {label}
    </a>
  )

}

interface TabContentProps {
  items: Object[],
  activeItem: string
}
export function TabContent({items, activeItem}:TabContentProps) {
  return (
    <div className="tab-content">
      {items.map(({id, panel}) => {
        return (
          <div
            key={id}
            className={`tab-pane fade ${activeItem === id ? 'show active' : ''}`}
            id={`tab-${id}`}
            role="tabpanel"
            aria-labelledby={`tab-${id}`}
          >
            {panel}
          </div>
        )
      })}

    </div>
  )
}


export default Tab
