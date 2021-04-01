import { Component } from 'react';
import './JokeItem.scss';

class JokeItem extends Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
            updatedJoke: ''
        }
    }

    editJokeMode = () => {
        this.setState({ 
            editMode: true
        })
    }

    handleEditJokeSubmit = (e) => {
        e.preventDefault();
    }

    cancelEditJoke = () => {
        const { editMode, updatedJoke } = this.state;

        this.setState({
            editMode: false,
            updatedJoke: ''
        })
    }

    deleteJoke = () => {
        
    }

    render() {
        const { jokeObj } = this.props;
        const { editMode, updatedJoke } = this.state;

        return (
            <div className='joke-item' >
                <div className='jokes-list-joke'>
                    <p>{jokeObj.joke_text}</p>
                    <div>
                        {
                            editMode ? (
                                <button onClick={this.cancelEditJoke}>cancel</button>
                            ) : (
                                <>
                                    <button onClick={this.editJokeMode}>edit</button>
                                    <button onClick={this.deleteJoke}>X</button>
                                </>
                            )
                        }
                        
                    </div>
                </div>
                {
                    editMode ? (
                        <>
                            <form onSubmit={this.handleEditJokeSubmit} className='jokes-list-edit-joke'>
                                <input name='updatedJoke' onChange={this.handleChange} value={updatedJoke} />

                                <button type='submit'>submit</button>
                            </form>
                            
                        </>
                    ) : null
                }
            </div>
        )
    }
}

export default JokeItem;