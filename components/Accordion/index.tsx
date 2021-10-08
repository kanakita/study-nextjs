import {useState} from "react";

interface Props {
  title: string; // アコーディオンの見出し
  children: JSX.Element | JSX.Element[] | string; // アコーディオンの中身
  expanded?: boolean;
}

function Accordion({title, children, expanded = false}:Props) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  return (
    <div className="accordion" aria-expanded={ isExpanded ? 'true': 'false'} aria-hidden={ isExpanded ? "false" : "true"}>
      <h3>
        <button
          className="accordion__button"
          onClick={
            ()=> setIsExpanded(! isExpanded)
          }
        >{title}</button>
      </h3>
      <div
        className="accordion__body"
        style={
          {
            display: isExpanded ? "none": "block"
          }
        }
      >
        {children}
      </div>
    </div>
  )

}

export default Accordion
