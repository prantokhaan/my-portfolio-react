import React from 'react';
import MessengerCustomerChat from "react-messenger-customer-chat";

const Messenger = () => {
    return (
      <div style={{textAlign: 'right'}}>
        <MessengerCustomerChat
          pageId="576527832797687"
          appId="606145124041843"
        />
      </div>
    );
};

export default Messenger;