import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="fixed top-2 z-50 w-full bg-header shadow backdrop-filter backdrop-blur-sm rounded-full">
      <div className="container flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  )
}
