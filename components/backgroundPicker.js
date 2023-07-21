import Image from "next/image";
import { getFiles } from "@/firebase/config";
import { useEffect, useState } from "react";
import styles from './backgroundPicker.module.scss';

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
          <div key={image} className={styles.imgBox}>
            <Image 
              priority
              src={image}
              width={300}
              height={300}
              alt="images"
            />
          </div>
        ));
      };
    return (
        <div className={styles.mainContainer}>
          <h3 className={styles.text}>Please pick your favourite background</h3>
          <div className={styles.imgContainer}>
            {renderImages()}
          </div>
        </div>
    )
};

export default BackgroundPicker;