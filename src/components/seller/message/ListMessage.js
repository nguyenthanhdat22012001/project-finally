import React from 'react';
// import PropTypes from 'prop-types';


import './ListMessage.scss';
import AvatarCircelShortText from "../../../components/avatar/AvatarCircelShortText";


function ListMessage(props) {
    return (
        <div className="ListMessage">
            <ul className="ListMessage__list">
                <li className="ListMessage__item" >
                    <div className="ListMessage__col-3" >
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="ListMessage__col-8" >
                        <div className="ListMessage__name-user" >
                            <span>nguyen dat</span>
                            <span>12:30pm</span>
                        </div>
                        <div className="ListMessage__desc" >
                               bạn đã giao hang chua? 
                        </div>
                    </div>
                </li>
                <li className="ListMessage__item" >
                    <div className="ListMessage__col-3" >
                        <AvatarCircelShortText name={'nguyen dat'} />
                    </div>
                    <div className="ListMessage__col-8" >
                        <div className="ListMessage__name-user" >
                            <span>nguyen dat</span>
                            <span>12:30pm</span>
                        </div>
                        <div className="ListMessage__desc" >
                               bạn đã giao hang chua? 
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

ListMessage.propTypes = {

}

export default ListMessage

