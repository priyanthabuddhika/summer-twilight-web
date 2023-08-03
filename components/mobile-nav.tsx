import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useLockBody } from "@/lib/use-lock-body"
import { NavItem } from "@/types/nav"
import { usePathname } from "next/navigation"

interface MobileNavProps {
  items: NavItem[],
  onClose: () => void
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  const pathname = usePathname();
  useLockBody()

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm gap-2">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center p-4 text-sm font-medium hover:bg-muted",
                pathname === item.href && "border-l-4 border-primary bg-secondary ",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}