import { useEffect, useState } from "react";
import { fetcharticlePagination } from "../../../services/articleservice.js";
import Card from "./Card.jsx";
import Pagination from "./Pagination.jsx";
import { useNavigate, useParams } from "react-router-dom";
import ReactLoading from "react-loading";

const Listarticlescard = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // Current page
    const [limit,setLimit] = useState(6); // Number of items per page
    const [totalPages, setTotalPages] = useState(0); // Total number of articles
    const [error, setError] = useState(false);
    const navigate = useNavigate(); // For navigation

    const getArticles = async (page,limit) => {
        try {
            const res = await fetcharticlePagination(page, limit);
            setArticles(res.data.articles);
            setTotalPages(Math.ceil(res.data.tot/limit));
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(parseInt(localStorage.getItem('currentPage') ? localStorage.getItem('currentPage') : 1));
        getArticles(page, limit);
    }, [page, limit]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            navigate(`/articles/page/${page - 1}`);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
            navigate(`/articles/page/${page + 1}`);
        }
    };

    const handlePageChange = (newPage) => {
        navigate(`/articles/page/${newPage}`); // Navigate to the new page route
    };

    if (loading) {
        return (
            <>
                <br/><br/><br/><br/>
                <center>
                    <h1>
                        <b>LOADING...</b>
                    </h1>
                </center>
                <center>
                    <ReactLoading type="spinningBubbles" color="black" height={350} width={200}/>
                </center>
            </>
        );
    }

    if (error) {
        return (
            <div>
                <h2>Error loading articles. Please try again later.</h2>
            </div>
        );
    }

    return (
        <>
        <div className="card-container">
            {articles.map((art, index) => (
                <Card article={art} key={index} />
            ))}
        </div>
            <Pagination
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            </>
    );
};

export default Listarticlescard;
