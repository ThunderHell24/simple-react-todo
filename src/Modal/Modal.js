import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false,
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({ isOpen: true })}>
                    Help me!
                </button>

                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h1>Hello</h1>
                            <p>
                                To add an entry, enter it in the field and
                                press Enter
                            </p>
                            <button
                                onClick={() =>
                                    this.setState({ isOpen: false })
                                }>
                                OK I understood!
                            </button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
