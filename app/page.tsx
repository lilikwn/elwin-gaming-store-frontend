import MainBanner from "@/components/organism/MainBanner/MainBanner"
import TransactionStep from "@/components/molecules/TransactionStep"
import Navbar from "@/components/organism/navbar/Navbar"
import FeaturedGame from "@/components/organism/FeaturedGame/FeaturedGame"
import Reached from "@/components/organism/Reached/Reached"
import Story from "@/components/organism/Story/Story"
import Footer from "@/components/organism/Footer/Footer"

export default function Home() {

  return (
    <>
      <Navbar />

      <MainBanner />

      <TransactionStep />

      <FeaturedGame />

      <Reached />

      <Story />

      <Footer />
    </>
  )
}
