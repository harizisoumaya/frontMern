import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Form, Col, Row } from "react-bootstrap";
import ReactLoading from "react-loading";
import {fetchscategories} from "../../../../services/scategorieservice.js";
import {addarticle} from "../../../../services/articleservice.js";
import { FilePond,registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import axios from "axios";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Insertarticle({Savearticle}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [article, setArticle] = useState({});
    const [scategories, setScategories] = useState([]);
    const [loading,setLoading] = useState(true);
    const [files, setFiles] = useState([]);

    // Methode serveroptions
    const serverOptions = () => { console.log('server pond');
        return {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                console.log(file)
                const data = new FormData();
                data.append('file', file);
                data.append('upload_preset', 'Z-Sofiene');
                data.append('cloud_name', 'dgsnxpms9');
                data.append('publicid', file.name);
                axios.post('https://api.cloudinary.com/v1_1/debph61bu/image/upload',
                    data)

                    .then((response) => response.data)
                    .then((data) => {
                        console.log(data);
                        setArticle({...article,imageart:data.url}) ;
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

    const getScategorie = async () => {
        try {
            const res = await fetchscategories()
            setScategories(res.data);
            setLoading(false);
        } catch (error) {
            console.log("Error loading sub categories:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getScategorie();
    }, []);

    if (loading) {
        return (
            <>
                <br /><br /><br /><br />
                <center>
                    <h1><b>LOADING...</b></h1>
                    <ReactLoading type="spinningBubbles" color="black" height={350} width={200} />
                </center>
            </>
        );
    }
    const vider = () => {
        setArticle({});
        setScategories([]);
    }

    const handleSave = async (e) => {
        try {
            e.preventDefault();
            await addarticle(article)
            .then(res=>{
                handleClose()
                Savearticle(res.data)
                vider()
            })
        } catch (error) {
            console.error("Error adding article:", error);
        }
    };


    return (
        <div>
            <a className="btn btn-outline-light bg-primary " onClick={handleOpen}><b><u>Add Article</u></b></a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div>
                        <h1>Add Article</h1>
                        <Form>
                            <Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Référence</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Référence"
                                        value={article.reference}
                                        onChange={(e) => setArticle({...article, reference: e.target.value})}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Désignation</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Désignation"
                                        value={article.designation}
                                        onChange={(e) => setArticle({...article, designation: e.target.value})}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Marque</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Marque"
                                        value={article.marque}
                                        onChange={(e) => setArticle({...article, marque: e.target.value})}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Prix</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Prix"
                                        value={article.prix}
                                        onChange={(e) => setArticle({...article, prix: e.target.value})}
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Stock"
                                        value={article.qtestock}
                                        onChange={(e) => setArticle({...article, qtestock: e.target.value})}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Sub Category</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={article.scategorieID}
                                        onChange={(e) => setArticle({...article, scategorieID: e.target.value})}
                                    >
                                        <option>----Select a Sub Category----</option>
                                        {scategories.map((scat) => (
                                            <option value={scat._id} key={scat._id}>
                                                {scat.nomscategorie}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>

                            </Row>
                            <Row>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>Image</Form.Label>
                                    <div style={{width: "80%", margin: "auto", padding: "1%"}}>
                                        <FilePond

                                            files={files}
                                            acceptedFileTypes="image/*"
                                            onupdatefiles={setFiles}
                                            allowMultiple={true}
                                            server={serverOptions()}
                                            name="file"

                                        />
                                    </div>
                                </Form.Group>
                            </Row>

                        </Form>
                        <center><button className="btn btn-success btn-sm mt-3" onClick={(e) => handleSave(e)}>Save</button>
                        <button className="btn btn-danger btn-sm mt-3 ml-2" onClick={handleClose}>Cancel</button></center>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
