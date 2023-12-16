import React from "react";
import './Hero.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';
function Hero() {

    return <section className="hero-wrapper paddings" id="Home">

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="hero-container innerWidth">
            {/* upperElements  */}
            <div className="upperElements">
                <motion.span
                    variants={fadeIn("right", "tween", 0.2, 1)}
                    className="primaryText">Hey There <br /> i'm saiful</motion.span>
                <motion.span
                    variants={fadeIn("left", 'tween', 0.4, 1)}
                    className="secondaryText">i design beutiful simple <br /> things, and i love what i do</motion.span>
            </div>

            {/* person image  */}
            <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="person">
                <motion.img variants={fadeIn("up", "tween", 0.3, 1)} src="./person.png" alt="" />
            </motion.div>

            {/* person email  */}
            <div className="person-email">
                <a href="mailto:saifulislam66info@gmail.com">saifulislam66info@gmail.com</a>
            </div>
            {/* lowerElements  */}
            <div className="lowerElements">
                <motion.div
                    variants={fadeIn("right", "tween", 0.3, 1)}
                    className="experience">
                    <div className="primaryText">10</div>
                    <div className="secondaryText">
                        <div>Year</div>
                        <div>Experience</div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className="certificate">
                    <img certi-img src="./certificate.png" alt="" />
                    <span>CERTICATE PROFATIONAL</span>
                    <span>UI/UX DESIGNER</span>
                </motion.div>

            </div>
        </motion.div>
    </section >
}
export default Hero;

//

// 