
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
// h-20 bg-gradient-to-r from-white via-lime-50 to-white rounded-bl-[30px] rounded-br-[30px] shadow backdrop-blur-[20px]/
export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full bg-header shadow">
      <div className="container flex  items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
      </div>
    </header>
  )
}
