const {useState} = React;
export const SuperheroForm = () => {
const [heroName, setHeroName] = useState('');
const [realName, setRealName] = useState('');
const [powers, setPowers] = useState([]);
const [powerSource, setPowerSource] = useState('');
  return(<div className="form-wrap">
    <h2>Superhero Application Form</h2>
    <p>Please complete all fields</p>
  </div>)
};
