import Image from "next/image";
import Link from "next/link";
import { getFiles } from "@/firebase/config";
import { useEffect, useState } from "react";
import styles from './backgroundPicker.module.scss';
import { backgroundImageUrlAtom, currentPathNameAtom } from "@/recoilStore";
import { useRecoilState, useRecoilValue } from "recoil";
import { urlGenerator } from "@/utils-functions";
import { LoadingComponent } from "./LoadingComponent";

const BackgroundPicker = () => {
  const [imagesSrc, setImagesSrc] = useState([]);
  const [nextQuoteUrl, setNextQuoteUrl] = useState('');
  const [imageUrl, setImageUrl] = useRecoilState(backgroundImageUrlAtom);
  const currentPathName = useRecoilValue(currentPathNameAtom);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const get_files = async () => {
      const files = await getFiles();
      setImagesSrc(files);
      setIsLoading(false);
    }
    get_files();
  }, [imagesSrc, setIsLoading]);
  useEffect(() => {
    const urlSetter = async () => {
      const url = await urlGenerator();
      if (currentPathName.length > 0) {
        setNextQuoteUrl(currentPathName);
        return;
      }
      setNextQuoteUrl(url);
    }
    urlSetter();
  }, [currentPathName]);
  const renderImages = () => {
    return imagesSrc.map((image) => (
      <Link href={nextQuoteUrl} key={image} className={styles.imgBox} onClick={() => setImageUrl(image)}>
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
  const renderPage = () => {
    return (
      <div className={styles.mainContainer}>
        <h3 className={styles.text}>Please pick your favourite background</h3>
        <div className={styles.imgContainer}>
          {renderImages()}
        </div>
      </div>
    )
  }
  return isLoading ? <LoadingComponent /> : renderPage();
};

export default BackgroundPicker;