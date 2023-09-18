import React, { useState } from "react";

function TwitterFollowCard({ formatUsername, username, name, isFollowing }) {
    const imgSrc = `https://unavatar.io/twitter/${username}`;
    const [isFollowingState, setIsFollowing] = useState(isFollowing);

    const text = isFollowingState ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowingState ? "tw-followCard-button is-following" : "tw-followCard-button";

    const handleClick = () => {
        setIsFollowing(!isFollowingState);
    };


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="Avatar" src={imgSrc} />
                <div className="tw-followCard-info">
                    <strong> {name} </strong>
                    <span className="tw-followCard-infoUserName">{formatUsername(username)}</span>
                </div>
            </header>

            <aside>
                <button onClick={handleClick} className={buttonClassName}>
									<span className='tw-followCard-text'>{text}</span>
                  <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}

export default TwitterFollowCard;
