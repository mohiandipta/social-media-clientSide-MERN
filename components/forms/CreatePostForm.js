import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';

const Createpostform = () => {
    return (
        <div className="card">
            <div className='card-body pb-1'>
                <form className='form-group'>
                    <textarea
                        className='form-control'
                        placeholder='Write something...'
                    ></textarea>
                </form>
            </div>

            <div className='card-footer'>
                <button className='btn btn-primary mt-1'>Post</button>
            </div>
        </div>
    );
}

export default Createpostform;
