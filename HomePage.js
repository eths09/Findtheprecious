import Cards from '../components/Cards';
import Form from '../components/Form';
import galadriel from "../pictures/galadriel.jpg";
import gandalf from "../pictures/gandalf.jpg";
import gothmog from "../pictures/Gothmog.jpg";


const HomePage = () => {

    const lordsOfTheRingsCharacters = [
      {
        "name": "gandalf",
        "name2": "you will not pass!!!",
        "reward":"reward 1000 gold coins",
        "img": gandalf
      },
      {
        "name": "gothmog",
        "name2": "???",
        "reward":"DEAD",
        "img": gothmog
      },
      {
        "name": "elfe",
        "name2": "whoman elf",
        "reward":"reward 250 gold coins",
        "img": galadriel
      }
    ];

    return (
      <>
        <div className="allcards">
          {
            lordsOfTheRingsCharacters.map((character) => {
              const { name, name2, reward, img } = character;
              return (
                <>
                  <Cards
                    name={name} 
                    name2={name2} 
                    reward={reward} 
                    img={img} 
                  />
                </>
              )
            })
          }
        </div>
        <Form />
      </>
    );
};

export default HomePage;
