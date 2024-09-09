import css from './ContactsPage.module.css'
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div className={css.home}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactsPage