import Link from "next/link"
import React from "react"
import Accordion from "../../common/components/accordeon"

const StepRestaurer: React.FC = () => {
  return (
    <div className="bg-creamy noise px-3 md:px-24 lg:px-40 pb-32 relative top-36 md:top-52">
      <div className="flex flex-col items-center">
        <h3 className="text-lune  px-[10vw] text-center font-lune text-[2.1rem] leading-9 mb:text-[3.5rem] xl:text-6xl 2xl:text-8xl relative flex flex-col">
          Vous aimeriez restaurer un objet
        </h3>
        <p
          className="text-gray-600 md:px-5 lg:px-28 2xl:left-10 mx-10 md:mx-10 xl:mx-24 2xl:px-32 py-10 md:py-20  relative
         leading-6 2xl:leading-7 
         text-[.85rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem] text-center "
        >
          L&apos;atelier vous propose la réfection de sièges selon une technique
          semi-traditionnelle, où la mousse remplace le crin. Le garnissage
          contemporain suit de nombreuses étapes identiques aux méthodes
          traditionnelles, tout en appliquant des techniques spécifiques à la
          mousse d&apos;une grande technicité. Nous réalisons également toutes
          sortes de restaurations, que ce soit pour abats-jour, sièges, ou
          textiles. Chaque pièce est traitée avec soin et expertise pour lui
          redonner son éclat d&apos;antan tout en respectant les méthodes
          modernes.
        </p>
      </div>

      <Accordion title="Prise de contact ">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Téléphone (visio) ou mail déterminer la nature de votre projet je vous
          accueille pour un 1erRDV soit à l&apos;atelier soit à votre domicile
          pour discuter de votre projet, il est préférable de venir avec votre
          siège, une photo peut également nous permettre de faire une 1ère
          évaluation
        </p>
      </Accordion>

      <Accordion title="Proposition d'un devis et délai">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Mon tarif varie en fonction du type de projets et des choix de tissus.
          Pour un fauteuil Voltaire, comptez environ 350€ + achat du tissu et
          des finitions pour le changement de la couverture et environ 750€ +
          achat du tissu et des finitions pour une réfection complète. Si vous
          fournissez le tissu, le coût de la façon sera majoré et le tissu ne
          sera bien sûr pas garanti.
        </p>
      </Accordion>
      <Accordion title="Dépôt de l’objet à l’atelier">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Vous pouvez venir déposer vos objets une fois restauré directement à
          l&apos;atelier. Un enlévement est également envisageable des frais de
          déplacement seront facturés
        </p>
      </Accordion>
      <Accordion title="Réalisation">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Vous disposerez d&apos;un suivi dans les étapes de réalisation de
          votre projet.
        </p>
      </Accordion>
      <Accordion title="Retrait ou livraison">
        <p className="text-[.70rem] xl:leading-6  xl:text-[.85rem] 2xl:text-[.98rem]  px-[20vw] pb-10">
          Vous pouvez venir retirer votre objet une fois restauré directement à
          l&apos;atelier. Une livraison est également envisageable toutefois au
          delà de 40km de mon atelier, des frais de déplacement seront facturés.
        </p>
      </Accordion>
      <div>
        <Link href={"/contact"}>
          <button
            className="mt-5 ml-5 relative rounded-full border-2 border-solid border-lune bg-white/0 px-6 py-3 font-bold  text-lune text-[.85rem] transition-all 
                            duration-400 hover:translate-y-[-6px] hover:text-creamy hover:rounded-full hover:bg-lune hover:shadow-[4px_4px_4px_lune] active:translate-x-[0px] 
                            active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          >
            Prendre rendez-vous
          </button>
        </Link>
      </div>
    </div>
  )
}

export default StepRestaurer
