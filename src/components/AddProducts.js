import React,{useState} from "react";
import { storage, db } from '../config/Config';

export const AddProducts = () => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState('null');
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg' ] //image types

    //product image handler
    const productImgHandler = (e) =>{
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setImg(selectedFile);
            setError('');
        }
        else{
            setImg(null);
            setError('Please select a valid image type png or jpeg');
        }
    }
    
    //add product form submit event
    const addProduct = (e) =>{
        e.preventDefault();
        //console.log(name, price, img);
        //storing the image
        const uploadTask = storage.ref('product-images/${img.name}').put(img);
        uploadTask.on('state_changed', snapshot=>{
            const progress = (snapshot.bytesTransferred/ snapshot.totalBytes) * 100;
            console.log(progress);
        },err=>{
            setError(err.message)
        },()=>{
            //getting product url and if success then storing the product in db
            storage.ref('product-images').child(img.name).getDownloadURL().then(url=>{
                db.collection('Products').add({
                    name: name,
                    price: Number(price),
                    img: url
                }).then(()=>{
                    setName('');
                    setPrice(0);
                    setImg('');
                    setError('');
                    document.getElementById('file').value = '';
                }).catch(err=>setError(err.message));
            })
        })
    }

    return (
        <div className="container">
            <br/>
            <h2>ADD PRODUCTS</h2>
            <hr/>
            <form autoComplete="off" className="form-group" onSubmit={addProduct}>
                <label htmlFor="product-name">Name</label>
                <br/>
                <input type="text" className="form-control" required
                onChange={(e) => setName(e.target.value)} value={name} />
                <br/>
                <label htmlFor="product-price">Price</label>
                <br/>
                <input type="number" className="form-control" required
                onChange={(e) => setPrice(e.target.value)} value={price} />
                <br/>
                <label htmlFor="product-img">Image</label>
                <br/>
                <input type="file" className="form-control" onChange={productImgHandler} id="file"/>
                <br/>
                <button className="btn btn-success btn-md mybtn">ADD</button>
            </form>
            {error &&<span>{error}</span>}
        </div>
    )
}