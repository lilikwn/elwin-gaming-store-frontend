import Image from "next/image";

interface TransactionStepItemProps {
    image: 'transaction-step-1' | 'transaction-step-2' | 'transaction-step-3';
    title: string;
    desc1: string;
    desc2: string;
}

function TransactionStepItem({image, title, desc1, desc2}: TransactionStepItemProps) {
  return (
    <div className="col-lg-4">
        <div className="card feature-card border-0">
            <Image className="mb-30" src={`/assets/icon/${image}.svg`} width={80} height={80} alt={image} />
            <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
            <p className="text-lg color-palette-1 mb-0">{desc1}<br/>
                {desc2}</p>
        </div>
    </div>
  )
}

export default TransactionStepItem