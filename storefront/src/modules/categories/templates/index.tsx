import { notFound } from "next/navigation"
import { Suspense } from "react"

import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
//import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"

export default function CategoryTemplate({
  categories,
  sortBy,
  page,
  countryCode,
}: {
  categories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)

  if (!category || !countryCode) notFound()

  return (
    <div
      className="flex flex-col small:flex-row small:items-start  content-container py-32"
      data-testid="category-container"
    >
      {/**<RefinementList sortBy={sort} data-testid="sort-by-container" /> */}

      <div className="w-full ">
        <div className="flex flex-row mb-8 text-2xl-semi gap-4">
          {parents &&
            parents.map((parent) => (
              <span key={parent.id} className="text-ui-fg-subtle">
                <LocalizedClientLink
                  className="mr-4 hover:text-black"
                  href={`/categories/${parent.handle}`}
                  data-testid="sort-by-link"
                >
                  {parent.name}
                </LocalizedClientLink>
              </span>
            ))}
          {/**  <h1
            className="text-[#C87E53] font-lune text-[2.2rem]/[2.2rem] items-center text-center  xl:text-[4rem]/[4rem] max-w-xs   medium:max-w-lg"
            data-testid="category-page-title "
          >
            {category.name}
          </h1> */}
        </div>

        <div className="mb-8 flex flex-col items-center justify-center ">
          {category.metadata && Object.keys(category.metadata).length > 0 && (
            <div>
              <p className="font-lune text-[3.4rem] text-neutral-400 max-w-[60vw]">
                {String(Object.keys(category.metadata)[0])}
              </p>
              <p className="text-lg text-[#C87E53]">
                - {String(Object.values(category.metadata)[0])}
              </p>
              <p className="text-[1.2rem] max-w-[50vw]">
                {category.description}
              </p>
            </div>
          )}
        </div>

        {category.category_children && (
          <div className="mb-8 text-base-large">
            <ul className="grid grid-cols-1 gap-2">
              {category.category_children?.map((c) => (
                <li key={c.id}>
                  <InteractiveLink href={`/categories/${c.handle}`}>
                    {c.name}
                  </InteractiveLink>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            categoryId={category.id}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
