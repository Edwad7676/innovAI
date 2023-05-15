import React from 'react';
import "./imagelinkform.css";
class Imagelinkform extends React.Component {
    render() {
        return (
            <div>
                <p className='f3'>This magic will detect faces in your pictures. Give it a try.</p>
                <div className='center'>
                    <div className='form pa4 br3 shadow-3 center'>
                        <input type='text' className='f4 pa2 w-70 center' onChange={this.props.onInputChange} />
                        <button className='button w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={this.props.onSubmit}>detect</button>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Imagelinkform;