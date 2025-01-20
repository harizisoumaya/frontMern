import React, {useEffect, useState} from "react";
import {deletearticle, fetcharticles} from "../../../../services/articleservice.js";
import Displayarticles from "./Displayarticles.jsx";
import ReactLoading from "react-loading";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Insertarticle from "./Insertarticle.jsx"; //Import CSS

const Listarticles = () => {

    const [articles,setArticles] = useState([]);
    const [article, setArticle] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    const getArticles = async () => {
        try {
            const res = await fetcharticles()
            setArticles(res.data)
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = (id,ref) => {
        confirmAlert({
            title: "Confirm delete...",
            message: " supprimer l' article: " + ref,
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => deletearticle(id)
                        .then(res=>
                            setArticles(articles.filter((article)  => article._id !== id)))
                        .catch(error=>console.log(error))
                },
                {
                    label: 'Non',
                }
            ]
        });
    }


    useEffect(() => {
        localStorage.setItem('currentPage', 1);
        getArticles();
    }, [])
    if (loading) {
        return <>
            <br/><br/><br/><br/>
            <center><h1><b> LOADING...</b></h1></center>
            <center><ReactLoading type="spinningBubbles" color="black" height={350} width={200}/></center>
        </>;
    }

    const updateArt = (article) => {
        setArticle(articles.map((art) => art._id === article._id ? article : art));
    }





    const Savearticle=(article)=>{
        setArticles([article,...articles]);
    }

    return (
        <div className="container">
            <Insertarticle Savearticle={Savearticle}/>
           <Displayarticles articles={articles} handleDelete={handleDelete} modifArticle={updateArt}/>
        </div>
    );
};

export default Listarticles;
