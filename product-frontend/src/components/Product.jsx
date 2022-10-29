import './product.css';
import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/shoe.gltf')
    return (
        <group ref={group} {...props} dispose={null} scale={3}>
            <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.setStripes} />
            <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh} />
            <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.sole} />
            <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customColors.sole} />
            <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.sole} />
            <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes} />
            <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes} />
            <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.sole} />
        </group>
    )
}


const Product = () => {
    const [mesh, setMesh] = useState("blue")
    const [stripes, setStripes] = useState("red")
    const [sole, setSole] = useState("grey")

    return (
        <div>
            <div className="wrapper">
                <div className="card">
                    <h4>Product Name : Nike</h4>
                    <div className="product-canvas">
                        <Canvas>
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={0.9}
                                    angle={0.4}
                                    penumbra={1}
                                    position={[10, 15, 10]}
                                    castShadow />
                                <Model customColors={{ mesh: mesh, stripes: stripes, sole: sole }} />
                                <OrbitControls enablePan={true}
                                    enableZoom={true}
                                    enableRotate={true} />
                            </Suspense>
                        </Canvas>
                    </div> <br /> <br /> <br /> <br />
                    <h2>Color chooser</h2>
                    <div className='colors'>
                        <div>
                            <input type="color" id="mesh" name="mesh"
                                value={mesh}
                                onChange={(e) => setMesh(e.target.value)} />
                            <label for="mesh">Main</label>
                        </div>

                        <div>
                            <input type="color" id="stripes" name="stripes"
                                value={stripes}
                                onChange={(e) => setStripes(e.target.value)} />
                            <label for="stripes">Stripes</label>
                        </div>
                        <div>
                            <input type="color" id="sole" name="sole"
                                value={sole}
                                onChange={(e) => setSole(e.target.value)} />
                            <label for="sole">Sole</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product