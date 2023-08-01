import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

// h-20 bg-gradient-to-r from-white via-lime-50 to-white rounded-bl-[30px] rounded-br-[30px] shadow backdrop-blur-[20px]/
export function SiteHeader() {
  return (
    <header className="fixed top-2 z-50 w-full bg-header backdrop-filter backdrop-blur-sm shadow rounded-full">
      <div className="container flex items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  )
}
