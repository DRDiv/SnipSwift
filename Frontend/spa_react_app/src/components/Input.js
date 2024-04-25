import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../assets/scss/input.css'; // Import the CSS file
import TextDisplay from '../contents/TextDisplay'; // Import TextDisplay component
import { Spinner } from 'react-bootstrap'; // Import Spinner component from react-bootstrap

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            texts: [], // Added state to store fetched texts
            submitted: false, // Added state to track whether the form is submitted
            loading: false // Added state to track loading state
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // var FinalURL = `http://127.0.0.1:5000/?url=${this.state.value}`;

        // // Set loading state to true when starting the fetch
        // this.setState({ loading: true });

        // fetch(FinalURL)
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log(result);
        //         // Assuming result.texts is an array containing texts in different languages
        //         this.setState({ texts: result.texts, submitted: true, loading: false });
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //         // Handle errors here
        //         this.setState({ loading: false });
        //     });
    }

    render() {
        const { texts, submitted, loading } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label className="input-field">
                        <input type="text" value={this.state.youtubeLink} onChange={this.handleChange} className="input-field" placeholder="Enter YouTube link" />
                    </label>
                    <button type="submit" className="submit-button" style={{ marginTop: '10px' }}>Generate</button>
                </form>
                {/* Conditionally render Spinner component based on the 'loading' state */}
                {loading && (
                    <div style={{ marginTop: '120px', textAlign: 'center',color:"#C85946"}}>
                        <Spinner animation="border" role="status" style={{ width: '100px', height: '100px' }}>
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                )}
                {/* Conditionally render TextDisplay based on the 'submitted' state */}
                {submitted && !loading && <TextDisplay texts={texts} />}
            </div>
        );
    }
}

export default withRouter(InputField);
