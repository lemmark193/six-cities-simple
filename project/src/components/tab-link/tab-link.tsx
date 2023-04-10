import classnames from 'classnames';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeCity} from '../../store/action';
import {City} from '../../mocks/offers';

type TabLinkProps = {
  cityName: string;
  isActive: boolean;
}

function TabLink({cityName, isActive}: TabLinkProps): JSX.Element {
  const dispatch = useAppDispatch();

  const tabClickHandler = () => {
    if (isActive) {
      return;
    }

    dispatch(
      changeCity(City[cityName])
    );
  };

  return (
    <a
      className={classnames(
        'locations__item-link',
        'tabs__item',
        {'tabs__item--active': isActive},
      )}
      href={`#${cityName.toLowerCase()}`}
      onClick={tabClickHandler}
    >
      <span>{cityName}</span>
    </a>
  );
}

export default TabLink;
