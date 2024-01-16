"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import MaterialIcon from "@/components/material-icon"
import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const router = useRouter()

  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex h-16 w-full items-center gap-6 md:h-20 md:justify-between md:gap-10">
      <Link href="/" className="h-10 flex-none md:h-12">
        <img src="/images/logo.svg" alt="" className="h-full" />
      </Link>
      <div className="hidden md:flex">
        {items?.length ? (
          <nav className="hidden h-full gap-6 md:flex">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "box-border flex h-20 items-center text-sm text-header-foreground hover:border-b-4 hover:border-header-border",
                      pathname === item.href &&
                        "border-b-2 border-header-border ",
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
      <Button
        className="hidden max-md:ml-auto md:block"
        variant="header"
        size="lgr"
        onClick={() => router.push("/request-a-quote")}
      >
        Request a Quote
      </Button>
      <button
        className="ml-auto flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          <MaterialIcon className="text-primary-foreground" icon="close" />
        ) : (
          <MaterialIcon className="text-primary-foreground" icon="menu" />
        )}
      </button>
      {showMobileMenu && items && (
        <MobileNav
          items={items}
          onClose={() => {
            setShowMobileMenu(false)
          }}
        ></MobileNav>
      )}
    </div>
  )
}
