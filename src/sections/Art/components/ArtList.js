import SubjectList from './SubjectList'

function ArtList({art, id}){
    return (
        <li key={id}>
          <div class="frame">
            <img
              src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
              alt={art.artwork}
            />
          </div>
          <h3>{art.title}</h3>
          <p>Artist: {art.artist_title}</p>
          <h4>Artistic Subjects:</h4>
          <ul>
            {art.subject_titles.map((subjectTitle, id) => (
              <SubjectList subect={subjectTitle} key={id}/>
            ))}
          </ul>
        </li>
      )
}



export default ArtList