import { useState } from 'react';
import { Image } from 'cloudinary-react';
import axios from 'axios';
 const ImageUploadForm = ({setFiles, images}) => {
   
  
    const handleImageUpload = async (e) => {
      const files = Array.from(e.target.files);
  
      const formDataArray = files.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ecomadmin');
  
        return formData;
      });
  
      const uploadedImages = [];
  
      try {
        const uploadResponses = await Promise.all(
          formDataArray.map((formData) =>
            axios.post('https://api.cloudinary.com/v1_1/dbymrf8v9/image/upload', formData)
          )
        );
  
        uploadResponses.forEach((response) => {
          const imageUrl = response.data.secure_url;
          uploadedImages.push(imageUrl);
        });
  
          setFiles([...images, ...uploadedImages]);
          
      } catch (error) {
        console.log('Error uploading images:', error);
      }
    };
  
    return (
      <div className="mb-4">
        {/* Image upload section */}
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="p-3 bg-gray-300 rounded-md w-full outline-none mb-2"
        />
  
        <div className="flex gap-2 items-center flex-wrap">
          {images.map((imageUrl, index) => (
            <Image
              key={index}
              cloudName="your_cloudinary_cloud_name"
              publicId={imageUrl}
              width="60"
              height="60"
              className="bg-slate-600 rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageUploadForm