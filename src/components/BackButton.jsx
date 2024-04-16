import Button from './Button';
import { useNavigate } from 'react-router-dom';
useNavigate;
function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={e => {
        e.preventDefault();
        navigate(-1);
      }}
      type="back"
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
