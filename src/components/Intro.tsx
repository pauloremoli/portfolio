import { Text, TrackballControls, useProgress, Html, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import Typewriter from "typewriter-effect";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 8, radius = 20 }) {


  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          "nodejs",
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

const Intro = () => {
  return (
    <section className="w-full h-full bg-slate-900 flex flex-col md:flex-row items-start md:items-center snap-start justify-center">
      <div id="left" className="w-full md:w-1/3 h-full flex flex-col justify-around p-2 md:p-20">
        <div className="p-4 flex flex-col">
          <h1 className="text-2xl md:text-4xl text-blue-200 font-[Sora]">
            Hi there, I'm
          </h1>
          <h1 className="text-3xl md:text-8xl text-red-400 font-bold font-[Sora]">
            Paulo Remoli
          </h1>
        </div>
        <div className="text-xl md:text-2xl text-gray-100 font-light p-4">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .changeDeleteSpeed(40)
                .typeString("After 10 years as C++ software engineer")
                .pauseFor(200)
                .start();
              typewriter
                .typeString("<br/>It's time to flip the switch")
                .start();
            }}
          />
        </div>
      </div>
      <div id="right" className="w-full md:w-2/3 h-full relative ">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <Suspense fallback={null}>
            <fog attach="fog" args={["#202025", 0, 80]} />
            <Cloud count={8} radius={18} />
            <TrackballControls noZoom={true} />
          </Suspense>
          <OrbitControls autoRotate={true} enableZoom={false} autoRotateSpeed={2}/>
        </Canvas>
      </div>
    </section>
  );
};

export default Intro;
