// ./deskStructure.js

export const structure = (S: any) =>
  S.list()
    .title("Contenu du site")

    .items([
      ...S.documentTypeListItems("galerie"),
      //.filter
      // Remove the "assist.instruction.context" and "settings" content  from the list of content types
      // (listItem: any) =>
      // !["settings", "assist.instruction.context"].includes(listItem.getId())
      // (),
      //  S.listItem()
      // .title("Site Settings")
      // .child(S.document().schemaType("settings").documentId("siteSettings"))
      // .icon(CogIcon),
    ])
