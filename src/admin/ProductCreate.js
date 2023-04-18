import React  from 'react'
import Wrapper from './Wrapper'
import { useState } from 'react';
import { useHistory,useNavigate } from 'react-router-dom';
function ProductCreate() {
    const [title,setTitle]=useState("");
    const[image,setImage]=useState("")
    const history=useNavigate()
    const submit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3004/products', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({ title, image })
        }).then(() => history.push('/admin/products'));
    }
  return (
<Wrapper>
<form onSubmit={submit}>
                <label>Title</label>
                <input type="text" name="title" 
                onChange={e => setTitle(e.target.value)}
                 />
                <label>Image</label>
                <input type="text" name="image"
                onChange={e => setImage(e.target.value)}
                
                />
                <button type="submit">Add Product</button>
            </form>
</Wrapper>
  )
}

export default  ProductCreate