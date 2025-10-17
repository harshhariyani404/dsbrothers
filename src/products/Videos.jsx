import React, { useRef, useState } from "react";
import styles from "../style/Videos.module.css";

const videos = [
  { url: "/Videos/product1.mp4", description: "Demo of our first product." },
  { url: "/Videos/product3.mp4", description: "Demo of our third product." },
  { url: "/Videos/product5.mp4", description: "Demo of our fifth product." },
  { url: "/Videos/product6.mp4", description: "Demo of our sixth product." },
  { url: "/Videos/product7.mp4", description: "Demo of our seventh product." },
  { url: "/Videos/product8.mp4", description: "Demo of our eighth product." },
  { url: "/Videos/product9.mp4", description: "Demo of our ninth product." },
  { url: "/Videos/product10.mp4", description: "Demo of our tenth product." },
  { url: "/Videos/product11.mp4", description: "Demo of our eleventh product." }
];

const VideoCard = ({ video, index }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <>
    <div className={styles.card}>
      <h3>Video {index + 1}</h3>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={styles.video}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </div>
    </>
  );
};

const Videos = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // load 4 more each time
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Custumized Products</h1>
      <div className={styles.grid}>
        {videos.slice(0, visibleCount).map((video, idx) => (
          <VideoCard key={idx} video={video} index={idx} />
        ))}
      </div>
      {visibleCount < videos.length && (
        <button className={styles.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Videos;
