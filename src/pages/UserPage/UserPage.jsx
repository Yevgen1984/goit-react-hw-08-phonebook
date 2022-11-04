import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/contactsSelector';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from 'components/PhoneList/PhoneList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { selectName } from 'redux/auth/authSelectors';

export const UsersPage = () => {
  const error = useSelector(selectError);
  const userName= useSelector(selectName);
  const dispatch = useDispatch();
  useEffect(() => {
    if(userName.length === 0) return;
    dispatch(fetchContacts());
  }, [dispatch, userName]);

  return (
    <>
      <Form />
      <Filter />
      <ContactList />
      {error && <p>{error.message}</p>}
    </>
  );
};
