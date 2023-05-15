import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <>
      <h2 className={styles.title}>Phonebook</h2>
      <Form />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
