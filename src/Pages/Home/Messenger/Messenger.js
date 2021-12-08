import React from 'react';
import MessengerCustomerChat from "react-messenger-customer-chat";

const Messenger = () => {
    return (
      <div style={{marginLeft: "400px"}}>
          <h2>Hello</h2>
        <MessengerCustomerChat
          pageId="576527832797687"
          appId="606145124041843"
        />
      </div>
    );
};

export default Messenger;