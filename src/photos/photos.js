import React, { useState } from "react";
import PhotosApi from "../Apis/PhotosApi";
import axios from "axios";

export default function Photos() {
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);

    const uploadAndDisplayImage = async () => {
        // try {
        // const formData = new FormData();
        // formData.append('image', imageFile);

        let body = new FormData()
        body.set('key', '009c2e2d0b0020235da85697cf777339')
        setImageFile("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
        // setUploadedImage("https://i.ibb.co/1r7GrXc/b8a28f1e78eb.gif")
        body.append('image', imageFile)

        const response = await axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        })
        console.log(response.data.data.display_url)
        setUploadedImage(response.data.data.display_url)
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImageFile(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <button onClick={uploadAndDisplayImage}>Upload Image</button>

            <img
                src={uploadedImage}
                style={{ display: 'block', maxWidth: '100%' }}
                alt="Uploaded Image"
            />
        </div>
    );
}
