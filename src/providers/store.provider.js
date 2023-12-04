// store.provider.js

import {previewReviewResponseDTO} from "../dtos/store.dto.js";
import {getPreviewReview} from "../models/store.dao.js";

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}