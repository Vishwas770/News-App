
//import image2 from '../assets/image2.avif';
import image from '../assets/news.avif';



const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img src={src ? src : image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text text-info-emphasis">{description ? description.slice(0, 50) : "News description is not available."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>

    )
}

export default NewsItem
