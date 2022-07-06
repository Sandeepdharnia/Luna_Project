import CreateReview from "../components/CreateReview.js"
import CreateReviewImages from "../components/CreateReviewImage.js";

const ReviewCreatePages = () => {
    return(
        <main className="createreview">
            <CreateReviewImages />
            <CreateReview />
        </main>
    );
};

export default ReviewCreatePages;
