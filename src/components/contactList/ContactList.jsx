import { ContactItem } from "components/contactItem/ContactItem";
import { List } from "./ContactList.styled";

export const ContactList = ({ actual, onDelete }) => {
    return (
        <List>
            {actual.map(contact => (
                <li key={contact.id}>
                    <ContactItem item={contact} onDelete={onDelete}/>
                </li>
            ))}
        </List>
    );
};
