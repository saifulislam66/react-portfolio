import React from "react";
import './Works.css'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import { workExp } from '../../utils/data'

function Works() {

    {/* <a className="ancor" id="Experiencec"></a> */ }
    return <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}

        className="exp-wrapper paddings" id="Experiencec">


        <div className=" exp-container flexCenter  innerWidth">
            <span className="primaryText yPaddings">My Works Experince</span>

            <div className="Experinces flexCenter">
                {
                    workExp.map((exp, i) => {
                        return <motion.div variants={textVariant2} className="expri flexCenter" key={i}>
                            <div className="post">
                                <h1>{exp.place}</h1>
                                <p>{exp.tenure}</p>
                            </div>

                            <div className="role">
                                <h1>{exp.role}</h1>
                                <p>{exp.detail}</p>
                            </div>
                        </motion.div>
                    })
                }

                <motion.div variants={zoomIn(1, 1)} className="progressbar">
                    <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className="line flexCenter">
                        <div className="saif"><div className="circle" style={{ background: "#286F6C" }}></div></div>
                        <div className="saif"><div className="circle" style={{ background: "#f73214" }}></div></div>
                        <div className="saif"><div className="circle" style={{ background: "#f7e014" }}></div></div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    </motion.section>





    // return <motion.section
    //     variants={staggerChildren}
    //     initial="hidden"
    //     whileInView="show"
    //     viewport={{ once: false, amount: 0.25 }}

    //     className="w-wrapper">

    //     <div className="w-container flexCenter innerWidth">
    //         <span className="primaryText yPaddings">My Works Experince</span>

    //         <div className="expariences flexCenter">

    //             {
    //                 workExp.map((exp, i) => {
    //                     return <motion.div
    //                         variants={textVariant2}
    //                         className="experi flexCenter" key={i}>

    //                         <div className="post">
    //                             <h1>{exp.place}</h1>
    //                             <p>{exp.tenure}</p>
    //                         </div>

    //                         <div className="role">
    //                             <h1>{exp.role}</h1>
    //                             <p>{exp.detail}</p>
    //                         </div>

    //                     </motion.div>
    //                 })
    //             }
    //             <div className="progressbar">
    //                 <div className="line">
    //                     <dir><div className="circle" style={{ background: "#286F6C" }}></div></dir>
    //                     <dir><div className="circle" style={{ background: "#286h4C" }}></div></dir>
    //                     <dir><div className="circle" style={{ background: "#286F6C" }}></div></dir>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    // </motion.section>
}
export default Works;




