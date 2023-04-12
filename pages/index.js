import BlackNavigation from "@/components/BlackNavigation"
import Hero from "@/components/Hero"
import NavigationBar from "@/components/NavigationBar"

export default function Home() {
  return (
    <div className="bg_banner w-full min-h-[100vh]">
      <BlackNavigation />
        <NavigationBar />
        <Hero />
    </div>
  )
}
