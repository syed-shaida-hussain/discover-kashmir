"use client";

import styles from "./carousel.module.css"
import Image from "next/image"
import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs"
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";


const Carousel = () => {
    const [slide , setSlide] = useState(0);
    const [slides , setSlides] = useState([])
    const getNextSlide = () => {
        setSlide((slide) => slide === slides.length-1 ? 0 : slide+1)
    }
    const getPreviousSlide = () => {
        setSlide((slide) => slide === 0 ? slides.length-1 : slide - 1)
    }
    const fetchSlides = async () => {
        const res = await axios.get("/api/carousel")
        setSlides(res?.data?.carouselPosts)
    }

    useEffect(() => {
        fetchSlides()
    },[])
    return (
        <div className= {styles.carousel}>
            <BsArrowLeftCircleFill className= {`${styles.arrow} ${styles.arrowLeft}`} onClick={getPreviousSlide} />
            {
                slides?.map(( {title,_id,image} , index) => <div key={index} className= {slide === index ? styles.slide : `${styles.slide} ${styles.hidden}`}>
                    <h1 className= {styles.title}>{title}</h1>
                    <div  className= {styles.imgContainer}><Image src={`/${image.split("/")[2]}`} alt= {title} fill className= {styles.carouselImage}/></div>
                    <Link href= {`/blogs/${_id}`} className= {styles.btn}>Know more</Link>
                </div>)
            }
            <BsArrowRightCircleFill className= {`${styles.arrow} ${styles.arrowRight}`} onClick={getNextSlide} />
            <span className= {styles.indicators}>
                {slides?.map((_,index) => <button key={index} className= {slide === index ? styles.indicator : `${styles.indicator} ${styles.inactive}`} onClick={() => setSlide(index)}></button>)}
            </span>
        </div>
    )
}

export default Carousel