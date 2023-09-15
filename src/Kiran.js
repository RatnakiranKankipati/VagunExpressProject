
import * as THREE from 'three'
import React, { Suspense,useRef,useState } from 'react'
import { Canvas, useLoader,useFrame } from '@react-three/fiber'
import { Stage, OrbitControls, OrthographicCamera, Environment } from '@react-three/drei'
import { MTLLoader, OBJLoader } from 'three-stdlib'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Form from './Form'
const Scene = (props) => {
  const { obj, mtl, position, rotation, hexcolor }=props
  const ref = useRef()
  const [hovered, hover] = useState(null)
  const materials = useLoader(MTLLoader, mtl);
  const objModal = useLoader(OBJLoader, obj, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const clonedObj = objModal.clone();
  clonedObj.traverse((node) => {
    if (node.isMesh) {
      const material = new THREE.MeshStandardMaterial({
        color: node.material.color.setHex(hexcolor),
        roughness: 0.3,
        metalness: 0.4,
      });
      console.log(node);
      node.material = material;
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return (
    <Select enabled={hovered}>
      <mesh position={position} rotation={rotation} ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>

<primitive object={clonedObj} scale={1} />
</mesh>
    </Select>
    
  );
};
// const Scene = ({ obj, mtl, position, rotation, hexcolor }) => {
//   const materials = useLoader(MTLLoader, mtl);
//   const objModal = useLoader(OBJLoader, obj, (loader) => {
//       materials.preload();
//       loader.setMaterials(materials);
//   });

//   // Clone the object here
//   const clonedObj = objModal.clone();

//   clonedObj.traverse((node) => {
//       if (node.isMesh) {
//           const material = new THREE.MeshStandardMaterial({
//               color: node.material.color.setHex(hexcolor),
//               roughness: 0.1,
//               metalness: 0.9,
//           });
//           node.material = material;
//           node.castShadow = true;
//           node.receiveShadow = true;
//       }
//   });

//   return (
//       <mesh position={position} rotation={rotation}>
//           <primitive object={clonedObj} scale={1} />
//       </mesh>
//   );
// };

//Red - X
//Green - Y
//Blue - Z



export default function App() {


  return (
    <>
    <Canvas style={{height:"100vh",position:"relative"}}>
      <directionalLight
        position={[300, 160, -10]}
        intensity={0.1}
        shadow-mapSize={1024}
      />
      <color attach="background" args={['skyblue']} />
      <OrthographicCamera makeDefault position={[200, 300, 100]} zoom={1} />
      <Model />

      <axesHelper args={[50]} />
      {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr" /> */}

      <OrbitControls />
    </Canvas>
    <Form/>
    </>
    
  )
}
const Model = () => {
  // 2000
  let ScrewLength=2000;
let ScrewDia=200;
  return (
    <Suspense fallback={null}>
      <Stage>
        
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
        </EffectComposer>
<>

{/* Screw Length-2000
{
  ScrewDia==200 ?<Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />:<Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -481.5]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -100]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, 1350]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 1350]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 1542.5]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105, 1580]} hexcolor={"0xC0C0C0"} />    
 } */}
      
      {/* Screw Length-3000
{
  ScrewDia==200 ?<Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />:<Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -445]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -100]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2400]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105, 2580]} hexcolor={"0xC0C0C0"} />    
 } */}

{/* Screw Length-4000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -2400]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -2400]} hexcolor={"0x777777"} />
  </>
  
}
{
  ScrewDia==200?<Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -430]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -2485]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -2615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -2200]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -2100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,1300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 1300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 1540]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,1580]} hexcolor={"0xC0C0C0"} />    
 } */}

{/* Screw Length-5000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -2350]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -2400]} hexcolor={"0x777777"} />
  </>
  
}
{
  ScrewDia==200?<Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -390]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -2485]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -2615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -2200]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -2100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 } */}

{/* Screw Length-6000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3400]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x777777"} />
  </>
  
}
{
  ScrewDia==200?<Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -3445]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -3615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -3100]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -3000]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 } */}

Screw Length-7000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -2365]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -4355]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -2400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -4400]} hexcolor={"0x777777"} />
  </>
  
}
{
  ScrewDia==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -2395]} hexcolor="0x1167b1" />
  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -2400]} hexcolor="0x1167b1" />
  </>
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -4440]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -4615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -4200]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -4100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }

{/* Screw Length-8000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -5360]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -5400]} hexcolor={"0x777777"} />
  </>
  
}
{
  ScrewDia==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0x1167b1" />
  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0x1167b1" />
  </>
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -5440]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -5615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -5100]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -5100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 } */}

{/* Screw Length-9000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -6400]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -6400]} hexcolor={"0x777777"} />
  </> 
}
{
  ScrewDia==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0x1167b1" />
  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0x1167b1" />
  </>
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -6445]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -6615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -6200]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -6100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 } */}

{/* Screw Length-10000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -5360]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -7350]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -5400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -7400]} hexcolor={"0x777777"} />
  </> 
}
{
  ScrewDia==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -5390]} hexcolor="0x1167b1" />

  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -5400]} hexcolor="0x1167b1" />
  </>
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -7430]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -7615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -7200]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -7100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 } */}

{/* Screw Length-11000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -6390]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -8350]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -6400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -8400]} hexcolor={"0x777777"} />
  </> 
}
{
  ScrewDia==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -6390]} hexcolor="0x1167b1" />

  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -6400]} hexcolor="0x1167b1" />
  </>
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 140, -8430]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -8615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -8200]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -8100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 } */}

{/* Screw Length-12000
{
  ScrewDia==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -6390]} hexcolor={"0x777777"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -9390]} hexcolor={"0x777777"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -6400]} hexcolor={"0x777777"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -9400]} hexcolor={"0x777777"} />
  </> 
}
{
  ScrewDia==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0x1167b1" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -6390]} hexcolor="0x1167b1" />

  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0x1167b1" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -6400]} hexcolor="0x1167b1" />
  </>
}
{
  ScrewDia==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 140, -9440]} hexcolor="0x1167b1" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -9615]} hexcolor="0x1167b1" />
}
{
  ScrewDia==200?<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, -9200]} hexcolor={"0x7FFF7F"} />:<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, -9100]} hexcolor={"0x7FFF7F"} />
}
 {
  ScrewDia==200?<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,2300]} hexcolor={"0xffc40c"} />:<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 90 / 180, Math.PI * 180/ 180,Math.PI * 180/ 180]} position={[0, -205, 2300]} hexcolor={"0xffc40c"} />
 } 
 {
   ScrewDia==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 } */}
</>
      </Selection>

      </Stage>
    </Suspense>
  )


}