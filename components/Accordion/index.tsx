import {useState} from "react";

/**
 * <Accordion>で使う属性の型
 */
interface AccordionProps {
  children: JSX.Element | JSX.Element[] | string; // 子要素
}

/**
 * アコーディオンの親要素
 */
export function Accordion({children}: AccordionProps) {
  return (
    <div className="accordion">
     {children}
    </div>
  )
}


interface AccordionItemProps {
  label: string,  // ボタンのラベル
  initialOpen?: boolean, // 初期状態で開いてるか閉じているか
  children: JSX.Element | JSX.Element[] | string; // アコーディオンの中身
}

export function AccordionItem({label, children, initialOpen = false}:AccordionItemProps) {
  const [isOpened, setIsOpened] = useState(initialOpen)
  /**
   * ラベルをクリックした時
   */
  function handleClick() {
    setIsOpened(! isOpened)
  }
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" aria-expanded={isOpened} onClick={handleClick}>
          {label}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${isOpened && 'show'}`}
        aria-labelledby="headingOne">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}

