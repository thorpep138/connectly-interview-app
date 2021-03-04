import React from 'react';
import ReviewSimulationButton from './ReviewSimulationButton/ReviewSimulationButton';
import styles from './styles.module.css';

function HomePage() {
    return (
        <section className={ styles.container }>
            <h1 className={ styles.headerText }>FB Messenger Bot Integration Test Site</h1>
            <div className={ styles.simulationButtonsContainer }>
                <ReviewSimulationButton 
                    text="Simulate order purchase"
                    chatWindowPrompt="Please kindly leave a review for your recent order." />
                <ReviewSimulationButton 
                    text="Simulate service completion"
                    chatWindowPrompt="Please kindly leave a review for your recent service completion." />
                <ReviewSimulationButton 
                    text="Simulate complaint call completion"
                    chatWindowPrompt="Please kindly leave a review for your recent complaint resolution." />
            </div>
        </section>
    );
}

export default HomePage;