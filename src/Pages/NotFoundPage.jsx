import BackButton from 'components/BtnBack';
import { MainTitle } from 'components/Title/Title.styled';
import paths from 'Routs/path';

const NotFoundPage = () => {
  return (
    <div>
      <BackButton to={paths.home}>back to home</BackButton>
      <MainTitle>Oops page not found</MainTitle>
    </div>
  );
};

export default NotFoundPage;
