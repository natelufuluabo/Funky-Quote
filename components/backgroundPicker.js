import Image from "next/image";
import Link from "next/link";
import { getFiles } from "@/firebase/config";
import { useEffect, useState } from "react";
import styles from './backgroundPicker.module.scss';
import { backgroundImageUrlAtom } from "@/recoilStore";
import { useRecoilState } from "recoil";
import { urlGenerator } from "@/utils-functions";

const BackgroundPicker = () => {
    const [imagesSrc, setImagesSrc] = useState([]);
    const [nextQuoteUrl, setNextQuoteUrl] = useState('');
    const [imageUrl, setImageUrl] = useRecoilState(backgroundImageUrlAtom);
    const handleClick = (imageLink) => {
      setImageUrl(imageLink);
    };
    useEffect(() => {
      const get_files = async () => {
        const files = await getFiles();
        setImagesSrc(files);
      }
      get_files();
    }, [imagesSrc]);
    useEffect(() => {
      const urlSetter = async () => {
        const url = await urlGenerator();
        setNextQuoteUrl(url);
      }
      urlSetter();
    }, []);
    const renderImages = () => {
        return imagesSrc.map((image) => (
          <Link href={nextQuoteUrl} key={image} className={styles.imgBox} onClick={() => handleClick(image)}>
            <Image 
              priority
              src={image}
              width={300}
              height={300}
              alt="background-image"
            />
          </Link>
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