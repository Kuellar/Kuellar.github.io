import React from "react";
import { Canvas, extend } from "@react-three/fiber";
// import Camera from "three";
// import Scene from "three";
// import Clock from "three";
// import PlaneBufferGeometry from "three";
// import Vector2 from "three";
// import ShaderMaterial from "three";
// import Mesh from "three";
// import WebGLRenderer from "three";
import CellularNoiseMaterial from "./CellularNoiseMaterial.js";

// const uniforms = {
//   u_time: {
//     type: "f",
//     value: 1.0,
//   },
//   u_resolution: {
//     type: "v2",
//     value: new Vector2(),
//   },
//   u_mouse: {
//     type: "v2",
//     value: new Vector2(),
//   },
// };

extend({ CellularNoiseMaterial });

const CellularNoise = () => {
  // const camera = new Camera();
  // camera.position.z = 1;

  // var scene = new Scene();
  // var clock = new Clock();

  // var geometry = new PlaneBufferGeometry(2, 2);
  // var material = new ShaderMaterial({
  //   uniforms: uniforms,
  //   vertexShader: vsSource,
  //   fragmentShader: fsSource,
  // });

  // var mesh = new Mesh(geometry, material);
  // scene.add(mesh);

  // renderer = new WebGLRenderer();
  // renderer.setPixelRatio(window.devicePixelRatio);

  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[5, 5]} />
        <CellularNoiseMaterial />
      </mesh>
    </Canvas>
  );
};

export default CellularNoise;
