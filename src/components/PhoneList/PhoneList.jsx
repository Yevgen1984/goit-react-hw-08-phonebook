import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  updateContact,
} from 'redux/contacts/contactsOperations';
import {
  selectIsLoading,
  selectError,
  selectRenderContacts,
  selectContacts,
} from 'redux/contacts/contactsSelector';

import { useState } from 'react'; 
import { RotatingLines } from 'react-loader-spinner';
import s from './PhoneList.module.css';
import { UpdateForm } from 'components/UpdateContact/UpdateContact';

export const ContactList = () => {
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const renderContacts = useSelector(selectRenderContacts);
  
  const showUpdateForm = (contactId) => {
    const contact = contact.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null)
  }

  return (
    <>
      {isLoading && (
        <div className={s.loader}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}
      {/* {error && (
        <p>
          Sorry!The action was not completed, try again later.
        </p>
      )} */}
      <ul className={s.phoneList}>
        {!renderContacts.length && <p>There are no contacts found!</p>}
        {renderContacts.length > 0 &&
          renderContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <span className={s.phoneName}>{name} :</span>
                {number}
                <button
                  className={s.btnDelete}
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(updateContact(id))}
                >
                  Edit
                </button>
                {contactToUpdate && contactToUpdate.id === id && <UpdateForm contact={contactToUpdate} closeForm={closeForm} />}
              </li>
            );
          })}
      </ul>
    </>
  );
};
