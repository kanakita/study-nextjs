import {useState} from "react";

interface Props {
  labelOnInactive: string; // 初期状態のラベル
  labelOnActive: string; // オンにした時のラベル
  onClick: (status:boolean) => void // トグルボタンがクリックされたときに実行される関数
  defaultStatus: boolean;
}

function ToggleButton({labelOnInactive, labelOnActive, onClick, defaultStatus}:Props) {
  const [status, setStatus] = useState(defaultStatus)
  return (
    <button
      type="button"
      className={status ? 'btn btn-primary': 'btn btn-secondary' }
      onClick={() => {
        setStatus(! status);
        onClick(! status);
      }}
    >
      {status ? labelOnInactive: labelOnActive }

    </button>
  )
}

export default ToggleButton
