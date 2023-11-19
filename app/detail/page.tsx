import Footer from "@/components/organism/Footer/Footer"
import TopUpForm from "@/components/organism/TopUpPage/TopUpForm"
import TopUpItem from "@/components/organism/TopUpPage/TopUpItem"
import Navbar from "@/components/organism/navbar/Navbar"

function Detail() {
  return (
    <>
        <Navbar />
        <section className="detail pt-lg-60 pb-50">
            <div className="container-xxl container-fluid">
                <div className="detail-header pb-50">
                    <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
                    <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-4">
                                <img src="/assets/img/Thumbnail-3.png" width="280" height="380" className="img-fluid" alt=""/>
                            </div>
                            {/* Mobile: Game title */}
                            <TopUpItem device="mobile" />
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                        {/* Desktop: Game title */}
                        <TopUpItem device="desktop" />
                        <hr/>
                        <TopUpForm />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Detail