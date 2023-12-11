import { ContactCard, DelBtn } from "./ContactItem.styled";

export const ContactItem = ({ item, onDelete }) => {
    return (
        <ContactCard>
            <p>{item.name}: {item.number}</p>
            <DelBtn>
                <button onClick={() => onDelete(item.id)}>Delete</button>
            </DelBtn>
        </ContactCard>
    );
};