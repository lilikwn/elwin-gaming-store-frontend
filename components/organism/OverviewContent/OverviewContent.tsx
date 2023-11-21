import CategoryCard from "./CategoryCard"
import TableContent from "./TableContent"

function OverviewContent() {
  return (
    <main className="main-wrapper">
        <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
            <div className="top-up-categories mb-30">
                <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                <div className="main-content">
                    <div className="row">
                        <CategoryCard nominal={18000500} icon="overview-category-icon-1">
                            Game <br/> Desktop
                        </CategoryCard>
                        <CategoryCard nominal={8455000} icon="overview-category-icon-2">
                            Game <br/> Mobile
                        </CategoryCard>
                        <CategoryCard nominal={5000000} icon="overview-category-icon-3">
                            Other <br/> Categories
                        </CategoryCard>
                    </div>
                </div>
            </div>
            <div className="latest-transaction">
                <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                <div className="main-content main-content-table overflow-auto">
                    <table className="table table-borderless">
                        <thead>
                            <tr className="color-palette-1">
                                <th className="text-start" scope="col">Game</th>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableContent gameTitle="Mobile Legends: The New Battle 2021" item={200} price={290000} status="Pending" gameImage="overview-1.png" category="Mobile" />
                            <TableContent gameTitle="Call of Duty: Modern" item={550} price={740000} status="Success" gameImage="overview-2.png" category="Desktop" />
                            <TableContent gameTitle="Clash of Clans" item={100} price={120000} status="Failed" gameImage="overview-3.png" category="Mobile" />
                            <TableContent gameTitle="The Royal Game" item={225} price={200000} status="Pending" gameImage="overview-4.png" category="Mobile" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  )
}

export default OverviewContent