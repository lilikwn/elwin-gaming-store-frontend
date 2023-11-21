interface InputTextProps {
    label: string;
    // nativeProps: any;
}

function InputText({label, ...nativeProps}: InputTextProps) {
  return (
    <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
        <input type="text" className="form-control rounded-pill text-lg"
            aria-describedby="name" {...nativeProps}/>
    </div>
  )
}

export default InputText