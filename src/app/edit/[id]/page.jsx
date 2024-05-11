import AddPostForm from '@/components/addPostForm/AddPostForm'
import React from 'react'

async function getPost (id) {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`)
        return res.json();
    } catch (error) {
        console.log(error.message)
    }
}

const EditPage = async ({params}) => {
    const {id} = params
    const {post} = await getPost(id)
  return (
    <div>
        <AddPostForm post = {post} />
    </div>
  )
}

export default EditPage