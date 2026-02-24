import { FlipWords } from "./Flipword";
import { motion } from "motion/react";

const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable", "Efficient", "Build it. Launch it. Grow it.", "Code that Performs", "Marketing that Delivers", "Creative Development", "Strategic Marketing", "Design. Develop. Dominate.", "Code & Craft", "Fast & Found", "Tech & Traffic", "Development & Distribution", "Backend to Brand Awareness", "Let’s Scale", "Get Visible", "Start Building", "Launch Now", "Boost ROI", "Data-Driven Design", "Pixel Perfect", "Typography", "Composition", "Aesthetic", "Visual", "Creative", "Vector", "Pixel", "Communication", "Design", "Identity", "Website interfaces", "Posters and flyers", "Social media posts", "Logos and branding"];
    const variants = { 
        hidden:{ opacity: 0, x:-50 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* DesktopView */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-5xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>Hi I'm Nipun</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl fomnt-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
                        A Developer <br/>
                        Dedicated to Crafting
                    </motion.p>
                    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
                        <FlipWords words={words} className="font-black text-white text-4xl" />
                    </motion.div>
                    <motion.p className="text-5xl fomnt-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.8 }}>Web Solutions</motion.p>
                </div>
            </div>
            {/* MobileView */}
            <div className="flex flex-col space-y-6 md:hidden">
                <motion.p className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>Hi I'm Nipun</motion.p>
                <div>
                    <motion.p className="text-3xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>Building</motion.p>
                    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
                        <FlipWords words={words} className="font-bold text-white text-2xl" />
                    </motion.div>
                    <motion.p className="text-2xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.8 }}>Web Applications</motion.p>
                </div>
            </div>
        </div>
    )
}

export default HeroText;