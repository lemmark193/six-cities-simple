import {useAppSelector} from '../../hooks/useAppSelector';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return error
    ? <p className="error-message">{error}</p>
    : null;
}

export default ErrorMessage;
