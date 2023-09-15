import React from 'react'

const Floor = () => {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
    <circleGeometry args={[1000]} />
    <meshStandardMaterial />
  </mesh>
  )
}

export default Floor