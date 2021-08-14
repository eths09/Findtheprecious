import '../styles/fellows.css'
import Profilhero from '../components/Profilhero';
import frodon from '../pictures/frodon.jpg'
import galadriel from '../pictures/galadriel.jpg'
import gandalf from '../pictures/gandalf.jpg'
const Fellows = () => {
    return (
        <>
            <h1>The Heroes Of Mordor</h1>
            <div className="herocontainer">
              <Profilhero name="frodon" secondname="saquet" Age="33" img={frodon}/>
              <Profilhero name="galadriel" secondname="lalinb" Age="40" img={galadriel} />
              <Profilhero name="gandalf" secondname="thewhite" Age='80' img={gandalf} /> <br/>
            </div>

        </>
    );
};

export default Fellows;