import { Canvas } from "@react-three/fiber";
import Blob from "../components/Blob";


export default function Home() {
  return (
    <>      <canvas class="webgl"></canvas>
    <div className="container">
      <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
        <Blob />
      </Canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js" integrity="sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/CSSRulePlugin.min.js" integrity="sha512-zaTjCyJwbhpd8V594wpmUStv6Dy/SnmP7jR+XXnE49z2ayHkSirlNiP4XQc15Zgk+p5gXGe5ZUQYu4yRtShqkQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </div>
    </>
  );
}
