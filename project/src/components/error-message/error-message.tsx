import {useAppSelector} from '../../hooks/use-app-selector';
import {getError} from '../../store/data-main-process/selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return error
    ? <p className="error-message">{error}</p>
    : null;
}

export default ErrorMessage;
