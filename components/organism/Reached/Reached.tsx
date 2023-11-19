import ReachedItem from '@/components/molecules/ReachedItem'

function ReachedItemSpacer() {
  return (
    <>
        <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
        <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
    </>
  )
}


function Reached() {
  return (
    <section className="reached pt-50 pb-50">
        <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                <ReachedItem value='290M+' desc='Players Top Up'/>
                <ReachedItemSpacer />
                <ReachedItem value='12.500' desc='Games Available'/>
                <ReachedItemSpacer />
                <ReachedItem value='99,9%' desc='Happy Players'/>
                <ReachedItemSpacer />
                <ReachedItem value='4.7' desc='Rating Worldwide'/>
            </div>
        </div>
    </section>
)
}

export default Reached