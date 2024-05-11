"use client"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from "axios"
import styles from './eventIcons.module.css'
import { useRouter } from "next/navigation";
import action from "@/app/actions";
import Link from "next/link";


export const EventIcons = ({user , post}) => {
    const router = useRouter();
    async function deletePost () {
        try {
            const res = await axios.delete(`/api/posts/${post._id}`);
            action();     
            router.push('/')
        } catch (error) {
            console.log(error.message)
        }

    }
  return (
    user._id === post?.authorId && <div className= {styles.iconContainer}>

            <Link href={`/edit/${post._id}`}><FaEdit className= {styles.icon}  /></Link>
            <MdDelete className= {styles.icon} onClick={deletePost} />
    </div>
  )
}
