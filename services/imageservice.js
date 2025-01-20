import axios from "axios";
// il faut crier une methode pour gerer le process au lieux de cette methode
export const imageOptions = (article,setArticle) => {
    return {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'Z-Sofiene');
            data.append('cloud_name', 'dgsnxpms9');
            data.append('publicid', file.name);
            axios.post('https://api.cloudinary.com/v1_1/dgsnxpms9/image/upload', data)
                .then((response) => response.data)
                .then((data) => {
                    setArticle({ ...article, imageart: data.url });
                    load(data);
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                    error('Upload failed');
                    abort();
                });
        },
    };
};