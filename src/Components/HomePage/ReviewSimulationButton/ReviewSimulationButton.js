import React from 'react';
import styles from './styles.module.css';

function ReviewSimulationButton({ text, chatWindowPrompt }) {
    return (
        <button 
            className={ styles.container }
            onClick={ () => {
                window.FB.CustomerChat.update({  
                    logged_in_greeting: chatWindowPrompt,
                  });
                window.FB.CustomerChat.showDialog();
            }}>
                { text }
        </button>
    );
}

export default ReviewSimulationButton;