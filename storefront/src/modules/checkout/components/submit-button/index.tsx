"use client"

//import { Button } from "@medusajs/ui"
import React from "react"
import { useFormStatus } from "react-dom"
import { IoIosMoon } from "react-icons/io"

export function SubmitButton({
  children,
  variant = "primary",
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | null
  className?: string
  "data-testid"?: string
}) {
  const getClassNames = () => {
    let baseClass =
      "group relative inline-flex border focus:outline-none w-full sm:w-auto rounded-full"
    let spanClass =
      "w-full inline-flex items-center  justify-center self-stretch px-6 py-4 text-sm text-center font-semibold  ring-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1 rounded-full"

    if (variant === "primary") {
      baseClass += " border-lune"
      spanClass += " text-white bg-lune ring-lune ring-offset-lune"
    } else if (variant === "secondary") {
      baseClass += " border-lune "
      spanClass += " text-creamy bg-lune/5 hover:bg-lune ring-lune"
    }

    return { baseClass, spanClass }
  }
  const { pending } = useFormStatus()
  const { baseClass, spanClass } = getClassNames()

  return (
    <button className={baseClass} type="submit" disabled={pending}>
      <span className={spanClass}>
        {pending ? (
          <span className="animate-spin text-lg text-white">
            <IoIosMoon />
          </span>
        ) : (
          children
        )}
      </span>
    </button>
  )
}
