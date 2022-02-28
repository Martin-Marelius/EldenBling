import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageModal from "./ImageModal";

const DisplayImage = (props) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="">
            <button type="button" onClick={() => setShowModal(!showModal)} >
                <Image src={props.image} width="200" height="200" />
            </button>

            {showModal ? (
                <ImageModal image={props.image} setShowModal={setShowModal} showModal={showModal}/>
            ) : null}
        </div>
    );

}

export default DisplayImage



