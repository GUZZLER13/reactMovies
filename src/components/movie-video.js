import React from "react";
const BASE_URL = "https://www.youtube.com/embed/";

const MovieVideo = ({ videoId }) => {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe
                className="embed-responsive-item"
                src={`${BASE_URL}${videoId}?fs=1&autoplay=1`}
            />
        </div>
    );
};

export default MovieVideo;
