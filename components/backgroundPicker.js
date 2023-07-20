import Image from "next/image";
import { getFiles } from "@/firebase/config";
import { useEffect, useState } from "react";

const BackgroundPicker = () => {
    const [imagesSrc, setImagesSrc] = useState([]);
    useEffect(() => {
        const get_files = async () => {
            const files = await getFiles();
            setImagesSrc(files);
            console.log(imagesSrc);
        }
        get_files();
    }, [imagesSrc]);
    const renderImages = () => {
        return imagesSrc.map((image) => (
          <Image 
            priority
            src={image}
            width={300}
            height={300}
            alt="images"
            key={image}
          />
        ));
      };
    return (
        <div>{renderImages()}</div>
    )
};

export default BackgroundPicker;