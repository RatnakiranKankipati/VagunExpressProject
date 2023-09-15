

import * as THREE from 'three'
import React, { Suspense,useEffect,useRef,useState } from 'react'
import { Canvas, useLoader,useFrame } from '@react-three/fiber'
import { Stage, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { MTLLoader, OBJLoader } from 'three-stdlib'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import {Interface} from './Form'
import { useGlobalcontext } from './context'
const Scene = (props) => {
  const { obj, mtl, position, rotation, hexcolor }=props
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
      // console.log(node);
      node.material = material;
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
  return (
  <mesh position={position} rotation={rotation} >
<primitive object={clonedObj} scale={1} />
</mesh>  
  );
};


export default function App() {
  const {formData}=useGlobalcontext()
  return (
    <>
     <Canvas style={{height:"100vh",position:"relative"}}>
      <directionalLight
        position={[300, 160, -10]}
        intensity={0.1}
        shadow-mapSize={1024}
      />
      <directionalLight
        position={[-300, 100, -50]}
        intensity={0.1}
        shadow-mapSize={1024}
      />
      <color attach="background" args={['skyblue']} />
      <OrbitControls enableZoom={true} enablePan={true} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault minDistance={10} maxDistance={200} />
      <Model />
      <axesHelper args={[50]} />
      <OrbitControls />
    </Canvas>
    <Interface/>
    </>
    
  )
}
const Model = () => {
  const {formData,change}=useGlobalcontext()
  return (
    <Suspense fallback={null}>
      <Stage>  
<>

{/* Screw Length-2000 */}
{
  formData.length==2000&&
  <>
  {
  formData.diameter==200 ?<Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />:<Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
}
{
 formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -481.5]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-200]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-250]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-200]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-250]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-100]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
}

 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 1542.5]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105, 1580]} hexcolor={"0xC0C0C0"} />    
 }
  </>
}

{/* Screw Length-3000 */}
{
  formData.length==3000&&
  <>   
 
{
  formData.diameter==200 ?<Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />:<Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -445]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-200]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-250]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-200]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-250]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-100]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
}
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105, 2580]} hexcolor={"0xC0C0C0"} />    
 }
  </>
}

{/* Screw Length-4000 */}
{
  formData.length==4000&&
  <>  
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -2400]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -2400]} hexcolor={"0x838486"} />
  </>
  
}
{
  formData.diameter==200?<Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -430]} hexcolor="0xa38d72" />:<Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -2485]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -2615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-2200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-2200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-2200]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-2200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-2200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-2250]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-2200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-2200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-2150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-2200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-2150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-2150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-2200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-2200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-2200]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-2200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-2200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-2250]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-2200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-2200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-2150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-2200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-2150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-2150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
}
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 1540]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,1580]} hexcolor={"0xC0C0C0"} />    
 }
  </>
}

{/* Screw Length-5000 */}
{
  formData.length==5000&&
  <>  
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -2350]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -2400]} hexcolor={"0x838486"} />
  </> 
}
{
 formData.diameter==200?<Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -390]} hexcolor="0xa38d72" />:<Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -2430]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -2615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-2200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-2200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-2150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-2200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-2150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-2150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-2200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-2200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-2150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-2200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-2150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-2150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-2200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-2200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-2150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-2200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-2150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-2150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-2200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-2200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-2150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-2200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-2150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-2150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
} 
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}

{/* Screw Length-6000 */}
{
  formData.length==6000&&
  <>  
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3400]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x838486"} />
  </>
  
}
{
  formData.diameter==200?<Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0xa38d72" />:<Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -3445]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -3615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-3200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-3200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-3150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-3200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-3150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-3150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-3200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-3200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-3150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-3200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-3150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-3150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-3200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-3200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-3200]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-3200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-3150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-3150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-3200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-3150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-3200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-3150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-3150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
} 
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}

{/* Screw Length-7000 */}
{
  formData.length==7000&&
  <>
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -2365]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -4355]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -2400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -4400]} hexcolor={"0x838486"} />
  </>
}
{
  formData.diameter==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -2395]} hexcolor="0xa38d72" />
  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -2400]} hexcolor="0xa38d72" />
  </>
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -4440]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -4615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-4200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-4200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-4150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-4200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-4150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-4150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-4200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-4200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-4150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-4200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-4150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-4150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-4200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-4200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-4150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-4200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-4150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-4150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-4200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-4200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-4150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-4200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-4150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-4150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
} 
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}

{
  formData.length==8000&&
  <>
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -5360]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -5400]} hexcolor={"0x838486"} />
  </>
  
}
{
  formData.diameter==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0xa38d72" />
  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0xa38d72" />
  </>
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -5440]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -5615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-5200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-5200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-5150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-5200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-5150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-5150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-5200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-5200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-5150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-5200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-5150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-5150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-5200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-5200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-5150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-5200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-5150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-5150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-5200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-5200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-5150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-5200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-5150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-5150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
} 
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}

{/* Screw Length-9000 */}
{
  formData.length==9000&&
  <>
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -6400]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -6400]} hexcolor={"0x838486"} />
  </> 
}
{
  formData.diameter==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0xa38d72" />
  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0xa38d72" />
  </>
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -6445]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -6615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-6200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-6200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-6150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-6200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-6150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-6150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-6200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-6200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-6150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-6200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-6150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-6150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-6200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-6200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-6150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-6200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-6150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-6150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-6200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-6200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-6150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-6200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-6150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-6150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
}
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}

{/* Screw Length-10000 */}
{
  formData.length==10000&&
  <>
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -5360]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -7350]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -5400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -7400]} hexcolor={"0x838486"} />
  </> 
}
{
  formData.diameter==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -5390]} hexcolor="0xa38d72" />

  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -5400]} hexcolor="0xa38d72" />
  </>
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 150, -7430]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -7615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-7200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-7200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-7150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-7200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-7150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-7150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-7200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-7200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-7150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-7200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-7150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-7150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-7200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-7200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-7150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-7200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-7150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-7150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-7200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-7200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-7150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-7200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-7150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-7150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
} 
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}

{/* Screw Length-11000 */}
{
  formData.length==11000&&
  <>
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -6390]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.2000.obj" mtl="models/200.69.51.2000.mtl" rotation={[0, 0, 0]} position={[0, 100, -8350]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -6400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.2000.obj" mtl="models/300.69.51.2000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -8400]} hexcolor={"0x838486"} />
  </> 
}
{
  formData.diameter==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -6390]} hexcolor="0xa38d72" />

  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -6400]} hexcolor="0xa38d72" />
  </>
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 140, -8430]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -8615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-8200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-8200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-8150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-8200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-8150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-8150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-8200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-8200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-8150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-8200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-8150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-8150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-8200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-8200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-8150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-8200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-8150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-8150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-8200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-8200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-8150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-8200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-8150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-8150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
} 
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}

{/* Screw Length-12000 */}
{
  formData.length==12000&&
  <>
{
  formData.diameter==200 ?
  <>
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -3395]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -6390]} hexcolor={"0x838486"} />
  <Scene obj="models/200.69.51.3000.obj" mtl="models/200.69.51.3000.mtl" rotation={[0, 0, 0]} position={[0, 100, -9390]} hexcolor={"0x838486"} />
  </>
  :
  <>
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -3400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -6400]} hexcolor={"0x838486"} />
  <Scene obj="models/300.69.51.3000.obj" mtl="models/300.69.51.3000.mtl" rotation={[Math.PI * 180/ 180,0,0]} position={[0, 100, -9400]} hexcolor={"0x838486"} />
  </> 
}
{
 formData.diameter==200?
  <>
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -3395]} hexcolor="0xa38d72" />
  <Scene obj="models/HangerBearing.obj" mtl="models/HangerBearing.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-60, -215, -6390]} hexcolor="0xa38d72" />

  </>
  :
  <>
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -3400]} hexcolor="0xa38d72" />
  <Scene obj="models/300.69.49.HangerBearing.obj" mtl="models/300.69.49.HangerBearing.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[20, 130, -6400]} hexcolor="0xa38d72" />
  </>
}
{
  formData.diameter==200?<Scene obj="models/Drivestation.obj" mtl="models/Drivestation.mtl" rotation={[0, Math.PI * 180 / 180, 0]} position={[-20, 140, -9440]} hexcolor=" 0x4e96ae" />:<Scene obj="models/300.69.48.Drivestation.obj" mtl="models/300.69.48.Drivestation.mtl" rotation={[ Math.PI * 180 / 180,0, 0]} position={[10, 120, -9615]} hexcolor=" 0x4e96ae" />
}
{
  formData.diameter==200?
  <>
  {
    formData.inletqty==1&&<Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-9200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-9200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-9150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260, formData.inletp1-9200]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp2-9150]} hexcolor={"0xffef00"} />
    <Scene obj="models/Inlet.obj" mtl="models/Inlet.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 260,formData.inletp3-9150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
  :
  <>
  {
    formData.inletqty==1&&<Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-9200]} hexcolor={"0xffef00"} />
  }
  {
    formData.inletqty==2&&
    <>
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-9200]} hexcolor={"0xffef00"} />
   <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-9150]} hexcolor={"0xffef00"} />
    </>
  }
  {
    formData.inletqty==3&&
    <>
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp1-9200]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp2-9150]} hexcolor={"0xffef00"} />
    <Scene obj="models/300.69.23.507.obj" mtl="models/300.69.23.507.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, 300, formData.inletp3-9150]} hexcolor={"0xffef00"} />
    </>
  }
  </>
}

{
  formData.diameter==200?
  <>
  {
    formData.outletqty==1&&<Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-9200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-9200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-9150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155,formData.outletp1-9200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp2-9150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/outlet.obj" mtl="models/outlet.mtl" rotation={[Math.PI * 270 / 180, 0, 300]} position={[0, -155, formData.outletp3-9150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
  :
  <>
  {
    formData.outletqty==1&&<Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp1-9200]} hexcolor={"0xb5a642"} />
  }
  {
    formData.outletqty==2&&
    <>
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-9200]} hexcolor={"0xb5a642"} />
   <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-9150]} hexcolor={"0xb5a642"} />
    </>
  }
  {
    formData.outletqty==3&&
    <>
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp1-9200]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0, -205, formData.outletp2-9150]} hexcolor={"0xb5a642"} />
    <Scene obj="models/300.69.23.508.obj" mtl="models/300.69.23.508.mtl" rotation={[Math.PI * 270 / 180, 0, 0]} position={[0,-205, formData.outletp3-9150]} hexcolor={"0xb5a642"} />
    </>
  }
  </>
} 
 {
   formData.diameter==200? <Scene obj="models/Endplate.obj" mtl="models/Endplate.mtl" rotation={[0, 0, 0]} position={[10, 105, 2580]} hexcolor={"0xC0C0C0"} />:<Scene obj="models/300.69.48.Endplate.obj" mtl="models/300.69.48.Endplate.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 180 / 180, 0]} position={[-10, 105,2585]} hexcolor={"0xC0C0C0"} />    
 }
 </>
}
</>
      {/* </Selection> */}

      </Stage>
     
    </Suspense>
   

  )


}
