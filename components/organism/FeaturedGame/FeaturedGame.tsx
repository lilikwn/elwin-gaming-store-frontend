import FeaturedGameItem from "@/components/molecules/FeaturedGameItem"

function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br/> Games This Year
            </h2>
            <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                data-aos="fade-up">
                <FeaturedGameItem title="Super Mechs" category="Mobile" image="Thumbnail-1"/>
                <FeaturedGameItem title="Call of Duty: Modern" category="Mobile" image="Thumbnail-2"/>
                <FeaturedGameItem title="Mobile Legends" category="Mobile" image="Thumbnail-3"/>
                <FeaturedGameItem title="Clash of Clans" category="Mobile" image="Thumbnail-4"/>
                <FeaturedGameItem title="Valorant" category="Desktop" image="Thumbnail-5"/>
            </div>
        </div>
    </section>
  )
}

export default FeaturedGame