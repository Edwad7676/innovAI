import React from 'react';
import "./facerecognition.css";

class facerecognition extends React.Component{
    render() {
        return (
            <div className='center'>
                <div className='absolute mt2'>
                    <img id="inputimage" alt='' src={this.props.img_url} width='500px' height='auto' />
                    {this.props.bounding_box.map((item) =>
                        <div className='bounding-box' style={{ top: item.toprow , right: item.rightcol, left: item.leftcol, bottom: item.bottomrow }}></div>
                    )}

                </div>

            </div>
        );
    }
   
}

export default facerecognition;