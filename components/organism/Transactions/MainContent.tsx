import TableContent from "@/components/molecules/TableContent"
import TransactionStatusBtn from "./TransactionStatusBtn"

function MainContent() {
  return (
    <main className="main-wrapper">
        <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
            <div className="mb-30">
                <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
                <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
            </div>
            <div className="row mt-30 mb-20">
                <div className="col-lg-12 col-12 main-content">
                    <div id="list_status_title">
                        <TransactionStatusBtn title="All Trx" href="/" active={true} />
                        <TransactionStatusBtn title="Success" href="/" />
                        <TransactionStatusBtn title="Pending" href="/" />
                        <TransactionStatusBtn title="Failed" href="/" />
                    </div>
                </div>
            </div>
            <div className="latest-transaction">
                <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                <div className="main-content main-content-table overflow-auto">
                    <table className="table table-borderless">
                        <thead>
                            <tr className="color-palette-1">
                                <th className="" scope="col">Game</th>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="list_status_item">
                            <TableContent gameTitle="Mobile Legends: The New Battle 2021" item={200} price={290000} status="Pending" gameImage="overview-1.png" category="Mobile" details="/"/>
                            <TableContent gameTitle="Call of Duty: Modern" item={550} price={740000} status="Success" gameImage="overview-2.png" category="Desktop" details="/"/>
                            <TableContent gameTitle="Clash of Clans" item={100} price={120000} status="Failed" gameImage="overview-3.png" category="Mobile" details="/" />
                            <TableContent gameTitle="The Royal Game" item={225} price={200000} status="Pending" gameImage="overview-4.png" category="Mobile" details="/"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  )
}

export default MainContent