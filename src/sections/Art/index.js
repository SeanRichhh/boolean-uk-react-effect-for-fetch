import { useEffect, useState } from "react";
import ArtList from './components/ArtList'

function ArtsSection() {
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id`
    )
      .then((res) => res.json())
      .then((data) => setArtwork(data.data));
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul class="art-list">
          {artwork.map((art, id) => (
            <ArtList art={art} key={id}/>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;

