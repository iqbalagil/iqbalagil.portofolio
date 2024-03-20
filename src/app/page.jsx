import {React, Suspense} from "react";
import * as stylex from "@stylexjs/stylex";
import About from './about';
import Nav from './NavStyles';
import Loading from './loading';

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
  <Suspense fallback={<Loading/>}>
  <About/>
  </Suspense>
</div>
<div>

</div>
  </div>
);
}

