import React from "react";
import './People.css'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from "../../utils/motion";
import Slider from 'react-slick'
import { comments, sliderSettings } from "../../utils/data";




function People() {

    return <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

        className="paddings people-wrapper" id="people">
        <motion.div
            variants={footerVariants}
            className="yPaddings innerwidth people-container">
            <div className="flexCenter people-heading">
                <span className="primaryText">
                    People talk about us
                </span>
                <p style={{ marginTop: "2rem" }}>
                    I got a job that was in accordance with the salary and field of work
                </p>
                <p>The process of submitting an application was quite cosy</p>
            </div>

            {/* carisel  */}
            <div className="comments">
                <Slider
                    {...sliderSettings}
                    className="slider"
                >
                    {
                        comments.map((comment, i) => {
                            return (
                                <div className="comment">
                                    <img src={comment.img} alt="" />
                                    <p className="secondaryText">{comment.comment}</p>

                                    <div className="p-line"></div>

                                    <div className="bio">
                                        <span>{comment.name}</span>
                                        <span>{comment.post}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </motion.div>
    </motion.section>
}
export default People;