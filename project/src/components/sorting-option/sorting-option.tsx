import {useAppDispatch} from '../../hooks/useAppDispatch';
import {SortType} from '../../constants';
import {setSortType} from '../../store/action';
import classnames from 'classnames';

type SortingOptionProps = {
  sortType: SortType;
  currentSortType: SortType;
  text: string;
}

function SortingOption({sortType, currentSortType, text}: SortingOptionProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li
      className={classnames(
        'places__option',
        {'places__option--active': sortType === currentSortType},
      )}
      tabIndex={0}
      onClick={() => dispatch(setSortType(sortType))}
    >
      {text}
    </li>
  );
}

export default SortingOption;
