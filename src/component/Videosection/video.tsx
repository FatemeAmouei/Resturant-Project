import React, { useState } from "react";
import "./Video.css";
import { FiPlay } from "react-icons/fi";

export default function Video(props: any) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };
  return (
    <section className="videoes-section">
      <div className="videosection-video-container relative shadow-lg bg-black-500">
        <iframe
          className=" w-Full h-full videosection-video-frame "
          title="پخش کننده ویدئو vimeo"
          src={props.src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          aria-label="پخش‌کننده ویدئوی Vimeo برای نمایش محتوای مرتبط"
        ></iframe>

        {!isPlaying && (
          <div
            className="videosection-video-cover absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer"
            style={{
              backgroundImage: `url(${props.imgcover})`,
            }}
            onClick={handlePlayVideo}
          >
            <button className="videosection-video-btn text-white p-10 border-4 border-white border-opacity-60 rounded-full text-5xl items-center">
              <FiPlay />{" "}
            </button>
            <div className=" videosection-video-divdark absolute inset-0 bg-black bg-opacity-10"></div>
          </div>
        )}
      </div>
    </section>
  );
}
