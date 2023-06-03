import SortingOption from '../sorting-option/sorting-option';
import {SortType} from '../../data/constants';
import {useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import classnames from 'classnames';
import {getSortType} from '../../store/data-main-process/selectors';

const SortTypeText: Record<SortType, string> = {
  [SortType.Popular]: 'Popular',
  [SortType.PriceLow]: 'Price: low to high',
  [SortType.PriceHigh]: 'Price: high to low',
  [SortType.Rating]: 'Top rated first',
};

function Sorting(): JSX.Element {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const currentSortType = useAppSelector(getSortType);

  const handleClick = () => setIsOpened(!isOpened);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleClick}
      >
        &nbsp;{SortTypeText[currentSortType]}

        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={classnames(
        'places__options',
        'places__options--custom',
        {'places__options--opened': isOpened},
      )}
      >
        {Object.values(SortType).map((type) => {
          const text = SortTypeText[type];
          return (
            <SortingOption
              key={`${type}: ${text}`}
              sortType={type}
              currentSortType={currentSortType}
              text={text}
              onClick={handleClick}
            />
          );})}
      </ul>
    </form>
  );
}

export default Sorting;
