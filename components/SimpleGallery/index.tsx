import {useState} from "react";

interface Props {
  items: {
    title: string,
    description: string,
    imgPath: string
  }[]
}

export function SimpleGallery({items}: Props) {
  const [isShow, setIsShow] = useState(false)
  const [index, setIndex] = useState(0)
  const [isFirst, setIsFirst] = useState(true)
  const [isLast, setIsLast] = useState(false)
  const allLength = items.length;

  // Prevボタンを押した時
  function handleClickPrev() {
    setIndex(index - 1)

    if (index - 1 === 0) {
      setIsFirst(true)
    }

    if (index - 1 !== allLength - 1) {
      setIsLast(false)
    }
  }

  // Nextボタンを押した時
  function handleClickNext() {
    setIndex(index + 1)

    if (index + 1 > 0) {
      setIsFirst(false)
    }

    if (index + 1 === allLength - 1) {
      setIsLast(true)
    }
  }

  // Show / Hideを切り替える
  function handleShowButton() {
    setIsShow(! isShow)
  }
  return (
    <div>
      {!isFirst && <button onClick={handleClickPrev}>Prev</button> }
      {!isLast && <button onClick={handleClickNext}>Next</button> }

      <h4>{items[index].title}</h4>
      <p>（ {index + 1} / {allLength}）</p>
      <button
        onClick={handleShowButton}
      >
        {isShow ? 'show' : 'hide'} detail
      </button>
      {isShow ? <p>{items[index].description}</p> : ''}

      <div><img src={items[index].imgPath} alt=""/></div>
    </div>
  )

}

