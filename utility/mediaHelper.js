const mediaHelper = (() => {
    const YOUTUBE_EMBED_BASE_URL = "https://www.youtube.com/embed/";
    const YOUTUBE_THUMBNAIL_BASE_URL = "https://img.youtube.com/vi/";

    function buildYouTubeEmbedUrl(videoId, parameters = {}) {
        if (!videoId) {
            return "";
        }

        const searchParams = new URLSearchParams();

        Object.entries(parameters).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.set(key, value);
            }
        });

        const queryString = searchParams.toString();
        const embedUrl =
            `${YOUTUBE_EMBED_BASE_URL}${encodeURIComponent(videoId)}`;

        return queryString
            ? `${embedUrl}?${queryString}`
            : embedUrl;
    }

    function buildYouTubeThumbnailUrl(videoId, quality = "hqdefault") {
        if (!videoId) {
            return "";
        }

        return `${YOUTUBE_THUMBNAIL_BASE_URL}${encodeURIComponent(videoId)}/${quality}.jpg`;
    }

    return Object.freeze({
        buildYouTubeEmbedUrl,
        buildYouTubeThumbnailUrl
    });
})();
