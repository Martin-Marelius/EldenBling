import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ImageModal = (props) => {

    const[width, setWidth] = useState(0)
    const[height, setHeight] = useState(0)

    useEffect(() => {

    })


    return (

        <div className="top-0 left-0 h-screen w-screen fixed z-50">
            <button type="button" className="bg-zinc-200 w-screen h-screen opacity-10 absolute z-10" onClick={() => props.setShowModal(!props.showModal)} />
            <div className="bg-zinc-900 flex flex-row top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 fixed max-w-full min-w-0 min-h-0 max-h-screen">
                <Image src={props.image} layout="intrinsic" width={props.width}height={props.height}/>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300">
                        {props.author}
                    </h1>
                    <p>
                        paragraph
                    </p>

                </div>

            </div>
        </div>

    );

}

export default ImageModal



