import TabLink from '../tab-link/tab-link';
import { City } from '../../data/cities';
import {CityInfo} from '../../types/offers';
import classnames from 'classnames';

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
                className={classnames(
                  'locations__item-link',
                  'tabs__item',
                  {'tabs__item--active': cityName === city.name},
                )}
                cityName={cityName}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TabsList;
