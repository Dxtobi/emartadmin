import { useState, ChangeEvent } from 'react';
import axios, { AxiosResponse } from 'axios';

type ImageUploadFormProps = {
  setFiles: (files: string[]) => void;
  images: string[];
};

const ImageUploadForm = ({ setFiles, images }: ImageUploadFormProps) => {
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files) return;

    const formDataArray: FormData[] = Array.from(files).map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ecomadmin');

      return formData;
    });

    try {
      const uploadResponses: AxiosResponse<any>[] = await Promise.all(
        formDataArray.map((formData) =>
          axios.post('https://api.cloudinary.com/v1_1/dbymrf8v9/image/upload', formData)
        )
      );

      const uploadedImages: string[] = uploadResponses.map((response) => response.data.secure_url);

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
          <img
            key={index}
            src={imageUrl}
            width="60"
            height="60"
            className="bg-slate-600 rounded-lg"
            alt="Uploaded"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageUploadForm;
