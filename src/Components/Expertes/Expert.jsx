import React from "react";
import './Expert.css';
import { projectExperience } from '../../utils/data'
import { WhatDoIHelp } from '../../utils/data'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { textVariant } from '../../utils/motion'

function Expert() {

    return (
        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}

            className="e-wrapper">

            <div className="paddings ypaddings flexCenter innerWidth e-container">
                <div className="leftside">

                    {
                        projectExperience.map((exp, i) => {
                            return <motion.div
                                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}

                                className="exp" key={i}>

                                <div className="flexCenter exp-icon" style={{ background: exp.bg }}>
                                    <exp.icon size={25} color="white" />

                                </div>
                                <div className="exp-desc">
                                    <span>{exp.name}</span>
                                    <span className="seconderyText">{exp.projects} Projects</span>
                                </div>
                            </motion.div>
                        })
                    }
                </div>
                <motion.div
                    variants={textVariant(0.5)}
                    className="rightside">
                    <span className="primaryText">Whai do I help?</span>

                    {
                        WhatDoIHelp.map((para, i) => {
                            return <span className="secondaryText" key={i}>{para}</span>
                        })
                    }
                    <div className="flexCenter stats">
                        <div className="flexCenter stat">
                            <span className="primaryText">85+</span>
                            <span className="secondaryText">Projects</span>
                        </div>
                        <div className="flexCenter stat">
                            <span className="primaryText">190+</span>
                            <span className="secondaryText">Happy Clints</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
export default Expert;