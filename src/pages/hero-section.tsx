
import { Button } from "@/components/ui/button"
import { useActiveSection } from "@/hook/useActiveSection"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"

export function HeroSection() {
    const navigate=useNavigate()
    const redirectToGitRepo=()=>{
       window.location.assign("https://github.com/dev-heinhtetpaing/Portfolio")
    }

const {ref}=useActiveSection("Home",0.5)

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Available for new opportunities
          </motion.div>

          <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Crafting Modern
            <br />
            <span className="text-accent">Web Applications</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer specializing in TypeScript, React, and cutting-edge web technologies. Building
            scalable, performant applications with exceptional user experiences.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" onClick={()=>navigate("/mywork")} className="group">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={()=>redirectToGitRepo()} variant="outline" size="lg" className="group bg-transparent">
              <Code2 className="mr-2 w-4 h-4" />
              See My Code
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
