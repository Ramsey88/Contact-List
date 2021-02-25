import React from "react";
import ListContact from "./ListContact";
class App extends React.Component {
  state = {
    contacts: [
      {
        id: "tyler",
        name: "Ahmad Ramzy",
        handle: "@amazingramzy",
        avatarURL: "http://localhost:5001/ramzy.jpg",
      },
      {
        id: "karen",
        name: "Rick & Morty",
        handle: "@rickandmorty",
        avatarURL: "http://localhost:5001/rickkkkkkkkkk.png",
      },
      {
        id: "richard",
        name: "Colossal titan",
        handle: "@BertholdtHoover",
        avatarURL: "http://localhost:5001/titan.png",
      },
    ],
  };
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
  };
  render() {
    return (
      <ListContact
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
      />
    );
  }
}
export default App;
