import { FC, useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import { ReviewItem } from "../models/ReviewItem";
import { apiFetch } from "../api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

const Reviews: FC<{ id: string }> = ({ id }) => {
  const [items, setItems] = useState<ReviewItem[]>([]);

  useEffect(() => {
    apiFetch<ReviewItem[]>(`${BASE_URL}/reviews?product_id=${id}`)
      .then((data) => setItems(data))
      .catch(() => setItems([]));
  }, [id]);

  return (
    <div className="px-2">
      <h1 className="text-2xl font-semibold mb-2">Reviews</h1>
      <div className="space-y-2">
        {items?.map(({ username, rating, review }) => (
          <div key={username} className="leading-4" data-test="review-item">
            <h3 className="font-semibold text-md">{username}</h3>
            <RatingStar rating={rating} />
            <p className="text-sm leading-4">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
