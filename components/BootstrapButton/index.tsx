interface Props {
  label: string;
}

function BootStrapButton({label}:Props) {
  return <button type="button" className="btn btn-primary">{label}</button>
}

export default BootStrapButton;
