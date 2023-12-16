import React from "react";
import './Portfolio.css'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren } from "../../utils/motion";

function Portfolio() {

    return <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="paddings p-wrapper" id="Portfolio">

        <div className="p-container flexCenter innerWidth">

            <div className="heading flexCenter">
                <div>
                    <span className="primaryText">My Letest Works</span>
                    <p style={{ marginTop: "10px" }}>perfect solution for degital exrience</p>
                </div>

                <span className="secondaryText">
                    Explore More Works
                </span>
            </div>

            {/* images  */}

            <div className="showCase flexCenter">
                <motion.img
                    variants={fadeIn("up", "tween", 0.5, 0.6)}
                    src="./showCase1.png"
                    alt=""
                />
                <motion.img
                    variants={fadeIn("up", "tween", 0.7, 0.6)}
                    src="./showCase2.png"
                    alt=""
                />
                <motion.img
                    variants={fadeIn("up", "tween", 0.9, 0.6)}
                    src="./showCase3.png"
                    alt=""
                />
            </div>

        </div>
    </motion.section>
}
export default Portfolio;