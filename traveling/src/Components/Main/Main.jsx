import React, { useEffect } from 'react'
import './main.scss'
import {GrLocation} from 'react-icons/gr';
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from '../../media/img/1.jpg';
import img2 from '../../media/img/2.jpeg';
import img3 from '../../media/img/3.jpg';
import img4 from '../../media/img/4.jpg';
import img5 from '../../media/img/5.jpg';
import img6 from '../../media/img/6.jpg';
import img7 from '../../media/img/7.jpg';
import img8 from '../../media/img/8.jpg';
import img9 from '../../media/img/9.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [
{ id:1,
  imgSrc:img1,
  destTitle:"Norway",
  location:"Oslo",
  grage:"Kings Custel",
  fees:"$1200",
  description:"Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums. Preserved 9th-century Viking ships are displayed at Oslo’s Viking Ship Museum. Bergen, with colorful wooden houses, is the starting point for cruises to the dramatic Sognefjord. Norway is also known for fishing, hiking and skiing, notably at Lillehammer’s Olympic resort."

},
{ id:2,
  imgSrc:img2,
  destTitle:"United Kindem",
  location:"Nottingham",
  grage:"River flows",
  fees:"$1000",
  description:"The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge."

},
{ id:3,
  imgSrc:img3,
  destTitle:"Switzerland",
  location:"Zurich",
  grage:"Oldest Train",
  fees:"$900",
  description:"Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern’s Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country is also known for its ski resorts and hiking trails. Banking and finance are key industries, and Swiss watches and chocolate are world renowned."

},
{ id:4,
  imgSrc:img4,
  destTitle:"Greenland",
  location:"Freeland",
  grage:"Snow Feel",
  fees:"$3500",
  description:"Greenland is an island country in North America that is part of the Kingdom of Denmark. It lies between the Arctic and Atlantic oceans, east of the Canadian Arctic Archipelago. Greenland is the world's largest island."

},
{ id:5,
  imgSrc:img5,
  destTitle:"IceLand",
  location:"Urug",
  grage:"Meet Place",
  fees:"$1450",
  description:"Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history."

},
{ id:6,
  imgSrc:img6,
  destTitle:"Germany",
  location:"Kazthan",
  grage:"Streat Foods",
  fees:"$3200",
  description:"Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank. "

},
{ id:7,
  imgSrc:img7,
  destTitle:"Netherland",
  location:"Ice City",
  grage:"Green Lands",
  fees:"$2300",
  description:"The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes. Amsterdam, the capital, is home to the Rijksmuseum, Van Gogh Museum and the house where Jewish diarist Anne Frank hid during WWII. Canalside mansions and a trove of works from artists including Rembrandt and Vermeer remain from the city's 17th-century "

},
{ id:8,
  imgSrc:img8,
  destTitle:"France",
  location:"Clock Land",
  grage:"Old Culture",
  fees:"$3400",
  description:"France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."

},
{ id:9,
  imgSrc:img9,
  destTitle:"Arctic",
  location:"Skyviews",
  grage:"Beautiful Sky",
  fees:"$4000",
  description:"The Arctic Ocean is the smallest and shallowest of the world's five major oceans. It spans an area of approximately 14,060,000 km² and is known as one of the coldest of oceans. The International Hydrographic Organization recognizes it as an ocean, although some oceanographers call it the Arctic Mediterranean Sea."

}

];


const Main=()=> {

  useEffect
  (()=>{
    Aos.init({duration:2000})
  
  },[])




  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>
      <div  className="secContent grid">
        {Data.map(({id,imgSrc,destTitle,location,grage,fees,description})=>{
         return(
            <div data-aos="fade-up" key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle}/>
              </div>
              <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="countinent flex">
                   <GrLocation className="icon"/>   
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                      <div className="grade">
                          <span>{grage}<small>+1</small></span>
                      </div>
                      <div className="price">
                          <h5>{fees}</h5>
                      </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    Details<HiOutlineClipboardCheck className="icon"/>

                  </button>
              </div>

            </div>
            

         ) 

        })
      }
      </div>
    </section>
  )
}

export default Main
