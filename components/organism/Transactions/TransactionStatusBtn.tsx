import Link from "next/link"

interface TransactionStatusBtnProps {
    title: string;
    href: string;
    active?: boolean;
}

function TransactionStatusBtn({title, href='/', active}: TransactionStatusBtnProps) {
    const isActive = active ? 'btn-active' : ''
  return (
    <Link data-filter="*" href={href} className={`btn btn-status rounded-pill text-sm ${isActive} me-3`}>
        {title}
    </Link>
  )
}

export default TransactionStatusBtn