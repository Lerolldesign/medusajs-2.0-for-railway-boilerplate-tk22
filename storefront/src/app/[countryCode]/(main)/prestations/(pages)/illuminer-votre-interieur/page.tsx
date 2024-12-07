import ImageList from "@modules/pages/illuminer/components/ImageList"
import HeroIlluminer from "@modules/pages/illuminer/heroIlluminer"
import IntroIlluminer from "@modules/pages/illuminer/introIlluminer"
import Restauration from "@modules/pages/restauration"

export default function Illuminervotreinterieur() {
  return (
    <div>
      <HeroIlluminer />
      <IntroIlluminer />
      <ImageList />
      <Restauration />
    </div>
  )
}
