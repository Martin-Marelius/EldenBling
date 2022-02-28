import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ImageModal = (props) => {

    return (

        <div className="top-0 left-0 right-0 bottom-0 m-auto absolute">
            <button type="button" className="bg-zinc-200 w-screen h-screen opacity-10 absolute z-10" onClick={() => props.setShowModal(!props.showModal)} />
            <div className="bg-white flex flex-row absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <Image src={props.image} layout="intrinsic" width={200}height={400}/>
                <div className="flex flex-col">
                    <h1>
                        title
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



