import React from "react";
import './Footer.css'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from "../../utils/motion";

function Footer() {

    return <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="paddings footer-wrapper">


        <motion.div
            variants={footerVariants}
            initial="hidden"
            whileInView="show"
            className="footer-container innerWidth yPaddings flexCenter">

            <div className="f-left">

                <span className="primaryText">
                    Let's make something <br /> amazing together.
                </span>

                <span className="primaryText">
                    Start by <a href="mailto:saifulislam66info@gmail.com">saing hi</a>
                </span>
            </div>

            <div className="f-right">

                <div className="info">
                    <span className="secondaryText">Information</span>
                    <p className="secondaryText">145 Barisal Kalapara</p>
                </div>

                <div className="f-menu">
                    <li><a href="">Services</a></li>
                    <li><a href="">works</a></li>
                    <li><a href="">Exparieance</a></li>
                    <li><a href="">Contuct know</a></li>
                </div>
            </div>

        </motion.div>
    </motion.section>
}

export default Footer;