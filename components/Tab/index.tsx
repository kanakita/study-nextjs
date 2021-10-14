import {MouseEvent, useState} from "react";

interface TabProps {
  tabItems: {
    label: string,
    id: string,
    panel: JSX.Element | JSX.Element[] | string;
  }[] // タブの配列
  initialOpen?: string // 初期状態で開いているタブのid。指定が無い場合は1つ目のタブのidが入る
}

/**
 * タブの親要素
 * @param {Object} tabItems タブの配列
 * @param initialOpen
 * @constructor
 */
function Tab({ tabItems, initialOpen }: TabProps) {

  const [activeItem, setActiveItem] = useState(initialOpen ?? tabItems[0]?.id ?? '' );

  return (
    <>
      <TabButtonInline
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

interface TabButtonInlineProps {
  items: {
    label: string, // ボタンのラベル
    id: string // ID
  }[],
  activeItem: string // 表示状態のタブのid
  setActiveItem: (value: string) => void // 表示状態のタブのidをセットする関数
}

/**
 * タブボタン
 * @param {Object[]} items タブの配列
 * @param {(value: string) => void} setActiveItem 表示状態のタブのidをセットする関数
 * @param {string} activeItem 表示状態のタブのid
 */
export function TabButtonInline({items, setActiveItem, activeItem}: TabButtonInlineProps) {
  return (
    <nav>
      <div className="nav nav-tabs" role="tablist">
        {items.map(({label, id}) => {
          return (
            <a
              key={id}
              className={`nav-link ${activeItem === id ? 'active' : ''}`}
              id={`nav-tab-${id}`}
              href={`#nav-${id}`}
              aria-controls={`nav-${id}`}
              aria-selected="true"
              data-bs-toggle="tab"
              role="tab"
              onClick={(event) => {
                event.preventDefault();
                setActiveItem(id)
              }}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  )
}

interface TabContentProps {
  items: {
    id: string, // タブのID
    panel: JSX.Element | JSX.Element[] | string; // タブの中身
  }[],
  activeItem: string // 表示状態のタブのid
}

/**
 * タブパネル
 * @param {Object[]} items タブの配列
 * @param {string} activeItem 表示状態のタブのid
 */
export function TabContent({items, activeItem}:TabContentProps) {
  return (
    <div className="tab-content">
      {items.map(({id, panel}) => {
        return (
          <div
            key={id}
            className={`tab-pane fade ${activeItem === id ? 'show active' : ''}`}
            id={id}
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
