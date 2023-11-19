interface TopUpItemProps {
    device: 'mobile' | 'desktop';
}

function TopUpItem({device}: TopUpItemProps) {
  return (
    device === 'mobile' ? (
        <div className="col-md-12 col-8 d-md-none d-block">
            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">Mobile Legends:<br/>
                The New Battle 2021</h2>
            <p className="text-sm color-palette-2 text-start mb-0">Category: Mobile</p>
        </div>
    ) : (
        <div className="pb-50 d-md-block d-none">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">Mobile Legends:<br/>
                The New Battle 2021</h2>
            <p className="text-lg color-palette-2 mb-0">Category: Mobile</p>
        </div>
    )
  )
}

export default TopUpItem