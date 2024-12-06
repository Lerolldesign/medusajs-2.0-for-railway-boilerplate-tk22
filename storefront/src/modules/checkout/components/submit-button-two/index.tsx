"use client"

// Corrected type definition for SubmitButton component
import { Button } from "@medusajs/ui"
import React from "react"
import { useFormStatus } from "react-dom"

interface SubmitButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" // Adjusted type to exclude null
  className?: string
}

export function SubmitButtonTwo({
  children,
  variant = "primary", // Provide a default value if variant is not specified
  className,
}: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button
      size="large"
      className={className}
      type="submit"
      isLoading={pending}
      variant={variant}
    >
      {children}
    </Button>
  )
}
