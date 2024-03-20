'use client'

import React, { useState, useEffect } from "react";
import "./about";
import * as stylex from "@stylexjs/stylex";
import Button from './exwidget/button';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { usePathname } from "next/navigation";
import {FaArrowDown} from "react-icons/fa6"
import path from "path";

const styles = stylex.create({
  navbar: {
    position: 'fixed',
    left: 630,
    right: 630,
  },

  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  navbarContainer : {
    backgroundColor: "#000000",
    zIndex: 1,
    opacity: 1,
    padding: 20,
    borderRadius: 10,
  },

  navbarContainer2 : {
    backgroundColor: "#272829",
    zIndex: 1,
    opacity: 1,
    borderRadius: 10,
    paddingRight: 0,
    paddingLeft: 0,
    gap: -5,
    display: 'flex',
    justifyContent: 'space-between'
  },

  lir: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  lid: {
    backgroundColor: "#3D3B40",
    borderRadius: 20,
    opacity: 0.9,
    top:5,
    width: '100%',
    bottom:5,
    position: 'absolute',
    zIndex: -10
    
  },
  text: {
    textDecorationLine: "none",
    textDecoration: "none",
    color: 'white',
    fontWeight: 200,
    fontSize: 16,
    padding: 15,
    margin: 5,
    borderRadius: 20,
  },

  unactive : {
    color: {
      default: '#B4B4B8',
      ':hover': '#FFFFFF'
    },
  },

  active: {
    backgroundColor : "#FBF9F1",
    opacity: 1,
    borderColor: 'white'
  },

  borderNav: {
    borderStyle: 'solid',
    borderColor: {
      default: '#3D3B40',
      ':hover': '#ffffff'
    },
    borderRadius: 10,
    textAlign: "initial",
    zIndex: -99,
    borderWidth: 3,

  },

  logoText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 300
  },

  pr: {
    fontSize: 14,
    margin:10
  },

  spanStyle: {
    color: '#F9E897',
  }


});

export default function Nav() {
  const pathname = usePathname();
  const [isActive, SetisActive] = useState(false);
  
  useEffect(() => {
    SetisActive(pathname == 'work')
  },[pathname])

  return (
    <div {...stylex.props(styles.navbar)}>
              <div {...stylex.props(styles.lid)}></div>
      <nav {...stylex.props(styles.nav)}>
        <ul {...stylex.props(styles.lir,styles.text)}>  
          <li {...stylex.props(styles.navbarContainer)}>
            <Link  href="/" {...stylex.props(styles.text,styles.logoText)}>iqbal<span {...stylex.props(styles.spanStyle)}>.Portofolio</span></Link>
            </li>
            <li {...stylex.props(styles.navbarContainer2)}>
              <p {...stylex.props(styles.text,styles.pr)}>
              HOME</p>
            <Link href="#" {...stylex.props(styles.text,styles.borderNav,styles.unactive)}><FaArrowDown></FaArrowDown>_CV</Link>

            <Link href="work" className={isActive ? 'active' : 'unactive'} {...stylex.props(styles.text,styles.borderNav, isActive ? styles.active : styles.unactive)}>Work</Link>
          </li>
          <li>
          <Button></Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
