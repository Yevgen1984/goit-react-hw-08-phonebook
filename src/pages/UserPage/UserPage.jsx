import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelector';

import { Button } from 'components/Button/Button';
import { ContactList } from 'components/PhoneList/PhoneList';
import { Form } from 'components/Form/Form';

export const UsersPage = () => {
  // const [isListShown, setIsListShown] = useState(false);
  const [isFormShown, setIsFormShown] = useState(false);
  // const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const changeVisibility = () => {
  //   setIsListShown(true);
  //   dispatch(fetchContacts());
  // };

  // const showForm = () => {
  //   setIsFormShown(true);
  // };

  // const closeForm = () => {
  //   setIsFormShown(false);
  // };

  return (
    <>
      {isLoading && <h1>LOADING...</h1>}
     
      {/* {!isLoading && <Button text="Add user" clickHandler={showForm} />} */}
      {/* {isFormShown && <Form closeForm={closeForm} />} */}
      <Form /> 
      <ContactList />
      {error && <p>{error.message}</p>}
    </>
  );
};
