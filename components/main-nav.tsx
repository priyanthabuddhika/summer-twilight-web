"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  return (
    <div className="flex items-center  md:justify-between gap-6 md:gap-10 w-full h-20">
      <Link href="/" className="flex-none h-12">
        <img src="/images/logo.svg" alt="" className="h-full" />
      </Link>
      <div className="hidden md:flex">
        {items?.length ? (
          <nav className="hidden md:flex h-full gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm text-header-foreground h-20 box-border hover:border-b-4 hover:border-header-border",
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
      <Button className="ml-auto" variant="header" size="lgr">
        Request a quote
      </Button>
      <button
        className="flex items-center space-x-2 md:hidden"
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
