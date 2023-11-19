interface ReachedItemProps {
    value: string;
    desc: string
}

function ReachedItem({value, desc}: ReachedItemProps) {
  return (
    <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{value}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
    </div>
  )
}

export default ReachedItem