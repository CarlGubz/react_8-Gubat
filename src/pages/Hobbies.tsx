import HobbyCard from '../components/HobbyCard';

function Hobbies() {
  //HOBBIES PAGE 
  return (
    <div  id="zenbu-hobbies" >
       <h1 id="digital-t-light"> Hobbies</h1>
      <div className="d-flex flex-wrap justify-content-around" id="hobby-card">
      {/* HOBBIES PAGE  */}
          {/* HOBBIES CARD 1 */}
            <HobbyCard 
              title="Watching Kdrama"
              description="
              K-dramas are like a captivating symphony of emotions, blending intricate storytelling with vibrant visuals. With a unique blend of romance, humor, and intense plot twists, these dramas take you on a rollercoaster of feelings."
              imageSrc="https://static0.moviewebimages.com/wordpress/wp-content/uploads/2023/11/every-korean-drama-releasing-in-december-2023.jpg"
            />
            {/* HOBBIES CARD 2 */}
            <HobbyCard
              title="Reading"
              description="Reading is a passport to countless worlds, where imagination takes flight on the wings of words. In the pages of a book, we discover not only stories but the untapped realms of our own minds."
              imageSrc="https://img.emg-services.net/HtmlPages/HtmlPage17411/patrick-tomasso-oaqk7qqnh_c-unsplash-1.jpg"
            />
            {/* HOBBIES CARD 3 */}
            <HobbyCard
              title="Sleeping"
              description="Sleep is the nightly balm that heals the weariness of the day, a sanctuary where dreams whisper tales of the subconscious. In the embrace of slumber, we find renewal, preparing us for the dawn of a new day with the promise of refreshed vitality."
              imageSrc="https://raisingchildren.net.au/__data/assets/image/0023/49280/Sleep-FAQs.jpg"
            />
    
      </div>
    </div>
  );
}

export default Hobbies;