import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="fixed z-50 w-full rounded-b-xl bg-header shadow backdrop-blur-sm">
      <div className="container flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  )
}
