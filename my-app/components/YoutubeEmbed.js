import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ autoplay }) => (
    <div className="video-responsive">
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/E8gmARGvPlI?controls=0&autoplay=${autoplay}&loop=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
