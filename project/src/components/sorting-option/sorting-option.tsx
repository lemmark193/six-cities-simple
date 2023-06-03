import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {SortType} from '../../data/constants';
import {setSortType} from '../../store/data-main-process/data-main-process';
import classnames from 'classnames';

type SortingOptionProps = {
  sortType: SortType;
  currentSortType: SortType;
  text: string;
  onClick: () => void;
}

function SortingOption({sortType, currentSortType, text, onClick}: SortingOptionProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    onClick();
    dispatch(setSortType(sortType));
  };

  return (
    <li
      className={classnames(
        'places__option',
        {'places__option--active': sortType === currentSortType},
      )}
      tabIndex={0}
      onClick={handleClick}
    >
      {text}
    </li>
  );
}

export default SortingOption;
