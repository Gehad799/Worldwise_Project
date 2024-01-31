import styles from "./CountryList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
