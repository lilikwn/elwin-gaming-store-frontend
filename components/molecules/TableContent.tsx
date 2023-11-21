import { IDRCurrencyFormatter } from "@/utils";
import Image from "next/image";
import Link from "next/link";

interface TableContentProps {
    gameImage: string;
    gameTitle: string;
    category: 'Desktop' | 'Mobile'
    item: number;
    price: number;
    status: 'Pending' | 'Success' | 'Failed' ;
    details?: string;
}

function TableContent(props: TableContentProps) {
    const {gameImage, gameTitle, category, item, price, status, details} = props;
  return (
    <tr className="align-middle">
        <th scope="row">
            <Image className="float-start me-3 mb-lg-0 mb-3" src={`/assets/img/${gameImage}`}
                width="80" height="60" alt=""/>
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">
                    {gameTitle}</p>
                <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
            <p className="fw-medium text-start color-palette-1 m-0">{IDRCurrencyFormatter(price)}</p>
        </td>
        <td>
            <div>
                <span className={`float-start icon-status ${status.toLowerCase()}`}></span>
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    {status}</p>
            </div>
        </td>
        {
            details && (
                <td>
                    <Link href="../member/transactions-detail.html"
                        className="btn btn-status rounded-pill text-sm">Details</Link>
                </td>
            )
        }
    </tr>
  )
}

export default TableContent