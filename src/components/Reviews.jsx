import { ReviewItem, AuthorName, Review } from '../styled-component/Revievs.styled';
import { useFetchFilmReviews } from '../Hooks/useFetchFilmReviews';


const Reviews = () => {
    const { reviews } = useFetchFilmReviews();


    return reviews.length > 0 ? (
        <ul>
            {reviews.map(({ author, content, id }) => (
                <ReviewItem key={id}>
                    <AuthorName>Author: {author}</AuthorName>
                    <Review>{content}</Review>
                </ReviewItem>
            ))}
        </ul>
    ) : (
        <Review> There are yet no reviews for this film.</Review>
    );
};
export default Reviews;