import { useEffect, useState } from "react"

import ArtListItem from "./ArtListItem"

function ArtList(){
    const [artworks, setArtworks] = useState([])
  
  useEffect(() => {
    fetch(`https://api.artic.edu/api/v1/artworks?fields=title,artist_title,image_id,classification_titles`)
    .then(res => res.json())
    .then(art => setArtworks(art.data))
  }, [] )


  return (
     <section>
            <h2>Arts Section</h2>
            <div className="scroll-container">
            <ul className="art-list">
                {artworks.map((artwork, index) =>
                    <ArtListItem 
                        index={index}
                        artwork={artwork}
                    />
                )}
            </ul>
            </div>
        </section>
    )
}


export default ArtList