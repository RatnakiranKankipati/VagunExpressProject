// import { memo } from 'react'
// import { AccumulativeShadows, RandomizedLight,Environment as EnvironmentImpl  } from '@react-three/drei'

// export const Environment = memo(({ direction = [10, 10, 10] }) => (
//   <>
//     <directionalLight position={direction} intensity={0.5} shadow-mapSize={3000}  />
//     <directionalLight position={[-50, 35, 0]} intensity={0.1} shadow-mapSize={3000} castShadow/>
//     <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={3000} />
//     <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={3000} />
//     <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.3} scale={2000} position={[0, -100, 0]}>
//       <RandomizedLight amount={8} radius={2.5} ambient={0.5} intensity={5} position={direction} bias={0.001} />
//     </AccumulativeShadows>
//     <EnvironmentImpl preset="city" />
//   </>
// ))
// import { memo } from 'react';
// import { AccumulativeShadows, RandomizedLight, Environment as EnvironmentImpl } from '@react-three/drei';

// export const Environment = memo(({ direction = [100, 100, 100] }) => (
//   <>
//     {/* <directionalLight position={direction} intensity={0.5} shadow-mapSize={1024} castShadow /> */}
//     <directionalLight position={[-5, 5, 5]} intensity={0.1} shadow-mapSize={128} castShadow />
//     <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={128} castShadow/>
//     <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={128} castShadow/>
//     <AccumulativeShadows frames={100} alphaTest={0.1} opacity={0.7} scale={2000} position={[0, -100, 0]}>
//       <RandomizedLight amount={20} radius={2.5} ambient={0.5} intensity={5} position={direction} bias={0.001} />
//     </AccumulativeShadows>
//     <EnvironmentImpl preset="city" />
//   </>
// ));
import { memo } from 'react'
import { AccumulativeShadows, RandomizedLight, Environment as EnvironmentImpl } from '@react-three/drei'

export const Environment = memo(({ direction = [5, 5, 5] }) => (
  <>
    {/* <directionalLight position={[125,125,125]} intensity={1} shadow-mapSize={1024} shadow-camera-top={10} castShadow />
    <directionalLight position={[-5, 5, 5]} intensity={0.1} shadow-mapSize={128} shadow-camera-left={-10} castShadow />
    <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={128} shadow-camera-right={10} castShadow />
    <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={128} shadow-camera-top={10} castShadow /> */}
    <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.5} scale={2500} position={[0, -150, 0]} color="red">
      <RandomizedLight  amount={10}  position={direction}  />
    </AccumulativeShadows>
    <EnvironmentImpl preset="city" />
  </>
))
       