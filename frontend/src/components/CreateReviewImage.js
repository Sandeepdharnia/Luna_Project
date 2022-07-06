import "../styles/CreateReviewImage.scss";
import overviewImg from "../assets/restaurant_overview.jpg";
import star from "../assets/star.svg";

const CreateReviewImages = () => {
    return (
        <main className="reviewimage">
            <div className="reviewimage__bImage">
                <img src={overviewImg} alt="" />
                <div className="reviewimage__content">
                    <div className="reviewimage__important">
                        <h2 className="reviewimage__title">Läderach Chocolatier Suisse</h2>
                        <div className="reviewimage__rest">
                            <h4 className="reviewimage__genre">Chocolatiers & Shop</h4>
                            <div className="reviewimage__rating">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <h5>68 reviews</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CreateReviewImages;
