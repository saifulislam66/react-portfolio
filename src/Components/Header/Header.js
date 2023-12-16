import React, { useRef, useState } from "react";
import './ht.css';
import { BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/motion';
import { getMenuStyles } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
function Header() {
    const [menuOpened, setMenuOpened] = useState(false)
    const headerShadow = useHeaderShadow()
    const menuRef = useRef()

    useOutsideAlerter({
        menuRef,
        setMenuOpened
        // setmenuOpend
    })
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={headerVariants}
            viewport={{ once: false, amount: 0.25 }}
            className="paddings  h-wrapper"
            style={{ boxShadow: headerShadow }}
        >

            <div className="flexCenter innerWidth h-container">
                <div className="h-name">
                    Saiful
                </div>
                <ul
                    ref={menuRef}
                    style={getMenuStyles(menuOpened)}
                    className="flexCenter menu">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Experiencec">Experiencec</a></li>
                    <li><a href="#Portfolio">portfolio</a></li>
                    <li><a href="#people">Testmonials</a></li>
                    <li className="phone flexCenter">  <p>+088 017260</p>
                        <BiPhoneCall size={"40px"} />
                    </li>
                </ul>
                <div className="menuicon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </motion.div >
    )
}
export default Header;

// setmenuOpend