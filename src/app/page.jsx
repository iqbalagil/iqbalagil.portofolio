import {React, Suspense} from "react";
import * as stylex from "@stylexjs/stylex";
import About from './component/about/about';
import Nav from './component/nav/navbar-main';

const style = stylex.create({
  main : {
    padding: 20,
    color : 'black',
    fontFamily: 'PP Neue Montreal'
  },
});

export default function Home() {
return (
  
  <div {...stylex.props(style.main)}>
<div>
  <About/>
</div>
<div>

</div>
  </div>
);
}

