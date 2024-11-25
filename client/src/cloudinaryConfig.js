import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,  // Vite environment variable
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,       // Vite environment variable
    apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET, // Vite environment variable
  },
});

export default cld;
