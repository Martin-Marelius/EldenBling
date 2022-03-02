import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageModal from "./ImageModal";

const DisplayImage = (props) => {

    const [showModal, setShowModal] = useState(false);
    const [url, setUrl] = useState(props.data.download_url);
    const [width, setWidth] = useState(props.data.width);
    const [height, setHeight] = useState(props.data.height);

    return (
        <>
            <button className="-mt-[5px]" type="button" onClick={() => setShowModal(!showModal)} >
                <Image src={url} width={(width / height) * 200} height="200" />
            </button>


            {showModal ? (
                <ImageModal image={url} width={width} height={height} author={props.data.author} setShowModal={setShowModal} showModal={showModal} />
            ) : null}
        </>
    );

}

export default DisplayImage



