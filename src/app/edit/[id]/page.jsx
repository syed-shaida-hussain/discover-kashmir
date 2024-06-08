import dynamic from 'next/dynamic';
const AddPostForm = dynamic(() => import("@/components/addPostForm/AddPostForm"), {
    ssr: false,
  });
import React from 'react'

async function getPost (id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/posts/${id}`)
        return res.json();
    } catch (error) {
        console.log(error.message)
    }
}

const EditPage = async ({params}) => {
    if(!process.env.NEXT_PUBLIC_DOMAIN) {
        return null;
    }
    const {id} = params
    const {post} = await getPost(id)
  return (
    <div>
        <AddPostForm post = {post} isEditForm={true} />
    </div>
  )
}

export default EditPage