"use client"
import gsap from "gsap"
import Link from "next/link"
import { useEffect, useState } from "react"

const FooterLune = () => {
  const [circleWidth, setCircleWidth] = useState(0)

  useEffect(() => {
    const updateCircleSize = () => {
      setCircleWidth(window.innerWidth * 2) // Double the screen width for a wider effect
    }

    updateCircleSize()
    window.addEventListener("resize", updateCircleSize)

    const footer = document.getElementById("footer")
    const circle = document.getElementById("circle")

    const handleScroll = () => {
      if (footer && circle) {
        const footerPosition = footer.getBoundingClientRect().top
        const screenHeight = window.innerHeight

        if (footerPosition < screenHeight && footerPosition > 0) {
          gsap.to(circle, { opacity: 1, y: 0, duration: 1 })
        } else {
          gsap.to(circle, { opacity: 0, y: 100, duration: 1 })
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateCircleSize)
    }
  }, [])

  return (
    <footer
      id="footer"
      className="relative overflow-hidden h-[50vh] md:h-[90vh] py-48   text-white text-center"
    >
      <div
        id="circle"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-amber-100 noise opacity-0 flex items-center justify-center z-10"
        style={{
          width: `${circleWidth}px`,
          height: `${circleWidth}px`,
          borderRadius: "50%",
        }}
      >
        {/* Bouton centré dans le cercle avec positionnement ajusté */}
        <div
          className="text-black z-50 absolute top-[10%] md:top-[10%]"
          style={{
            left: "50%",
            transform: "translate(-50%, -50%)", // Centrage exact du bouton
          }}
        >
          <h4 className="text-lune font-lune text-[10rem]">Céline rondot</h4>
          <p className="text-xl text-browny text-center w-1/2 justify-center flex item-center relative left-[25%]">
            Vous avez besoin de rénover un siège confectionner une pièce
            d&apos;expection, je suis là pour répondre à vos besoins.
          </p>
        </div>
        <div
          className=" absolute z-50 text-browny top-[23%] w-full h-[10vh]"
          style={{
            left: "34%",
            transform: "translate(-50%, -50%)", // Centrage exact du bouton
          }}
        >
          <div className="flex justify-center w-full py-10">
            <div className="relative left-5">
              <p className="txt-compact-small">
                © {new Date().getFullYear()} La Lune Curieuse. Tous droits
                réservés.{" "}
                <span className="relative left-5 font-bold">
                  crafted /// Leroll D+sign<sup className="size-2">©</sup>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className=" absolute z-50 text-browny top-[23%] w-full h-[10vh]"
          style={{
            left: "65%",
            transform: "translate(-50%, -50%)", // Centrage exact du bouton
          }}
        >
          <div className="flex justify-center text-[.85rem] text-center text-browny font-black gap-5 w-full py-10">
            <div className="flex gap-5 relative left-3 uppercase">
              <Link href="/documents/mentions-legales">mentions-legales</Link>
              <Link href="/documents/cgv">c.g.v</Link>
              <Link href="/documents/cgv">boutique</Link>
              <Link href="/documents/cgv">commande</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterLune
