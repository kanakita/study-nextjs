import {useState} from "react";

interface AccordionProps {
  items: {
    label: string;
    children: JSX.Element | JSX.Element[] | string;
  }[] // アコーディオンの配列
  initialOpen: string
}
export function SingularAccordion({ items,initialOpen = '' }: AccordionProps) {
  const [openItem, setOpenItem] = useState(initialOpen);
  return (
    <div className="accordion">
      {items.map(({label, children}) => (
        <SingularAccordionItem
          key={label}
          label={label}
          isActive={openItem === label}
          onHandleClick={function () {
              setOpenItem(label);
            }
          }
          >
            {children}
        </SingularAccordionItem>
      ))}
    </div>
  )
}

interface AccordionItemProps {
  label: string,  // ボタンのラベル
  children: JSX.Element | JSX.Element[] | string; // アコーディオンの中身
  isActive: boolean;
  onHandleClick: () => void // ラベルをセットする関数
}
export function SingularAccordionItem({label, children, isActive, onHandleClick}: AccordionItemProps) {

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" aria-expanded={isActive} onClick={onHandleClick}>
          {label}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
        aria-labelledby="headingOne">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}
