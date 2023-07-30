"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-between gap-6 md:gap-10 w-full h-16">
      <Link href="/" className="flex items-center space-x-2">
        <div className="text-center text-white font-normal font-['marcellus'] capitalize leading-snug">
          Summer
          <br />
          Twilight
        </div>
      </Link>
      <div className="hidden md:block">
      {items?.length ? (
        <nav className="flex h-full gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm text-header-foreground h-16 hover:border-b-2 hover:border-white",
                    pathname === item.href && "border-b-2 border-white",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      </div>
      <Button variant="header" size="lgr">Request a quote</Button>
    </div>
  )
}
