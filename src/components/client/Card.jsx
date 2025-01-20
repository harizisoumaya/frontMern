import { useShoppingCart} from 'use-shopping-cart';

const Card = ({article}) => {
    const { addItem } = useShoppingCart();
    const handleAddToCart = (article) => {

       try {
           const item ={
               id: article._id,
               title: article.designation,
               price: article.prix,
               image: article.imageart,
               quantity: 1,
               qtestock: article.qtestock
           }
           if (article.qtestock === 0) {
               console.log("article epuisé");
           } else {
               addItem(item);
               console.log("article add successfully : \n", item);
           }
       } catch (error) {
           console.log("error while adding to cart : " + error);
       }
    }
    return (
        <div className='card'>
            {article.imageart && <img src={article.imageart} alt={article.reference}
            />}
            <div className="card-content">
                <h1 className="card-title">{article.reference}</h1>
                <p className="card-description">{article.designation.substr(0, 20)}</p>
                <h1 className="card-title">Prix : {article.prix} TND</h1>
                <button className="card-button" onClick={() => handleAddToCart(article)}><i className="fa-solid fa-basket-shopping"></i>Add to cart
                </button>
            </div>
        </div>
    );
};
export default Card