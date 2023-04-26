import {useAppDispatch} from '../../hooks/useAppDispatch';
import {changeCity} from '../../store/action';
import {City} from '../../mocks/offers';
import {MouseEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../constants';

type TabLinkProps = {
  cityName: string;
  toMainPage?: boolean;
  className?: string;
}

function TabLink({cityName, toMainPage = false, className = ''}: TabLinkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(
      changeCity(City[cityName])
    );

    if (toMainPage) {
      navigate(AppRoute.Root);
    }
  };

  return (
    <a
      className={`locations__item-link ${className}`}
      href="#"
      onClick={handleClick}
    >
      <span>{cityName}</span>
    </a>
  );
}

export default TabLink;
