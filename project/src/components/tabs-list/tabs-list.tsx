import TabLink from '../tab-link/tab-link';
import {City} from '../../mocks/offers';
import {CityInfo} from '../../types/offers';

type TabsListProps = {
  city: CityInfo;
}

function TabsList({city}: TabsListProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(City).map((cityName) => (
            <li className="locations__item" key={cityName}>
              <TabLink
                cityName={cityName}
                isActive={cityName === city.name}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TabsList;
