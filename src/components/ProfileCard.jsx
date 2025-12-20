import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './ProfileCard.css';

const ProfileCardComponent = ({
    avatarUrl = '',
    miniAvatarUrl,
    name = 'Title',
    title = 'Subtitle',
    handle = 'Handle',
    status = 'Year',
    contactText = 'Ver Detalles',
    contactLink,
    innerGradient,
    behindGlowColor,
    className = '',
    showUserInfo = true,
    onContactClick
}) => {

    // Simple inline styles for the glow/gradient backing
    const cardStyle = useMemo(() => ({
        '--inner-gradient': innerGradient || 'linear-gradient(145deg, #333 0%, #000 100%)',
        '--behind-glow-color': behindGlowColor || 'rgba(255, 255, 255, 0.2)',
    }), [innerGradient, behindGlowColor]);

    return (
        <div className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
            <div className="pc-card-simple">

                {/* Image Layer */}
                <div className="pc-image-container">
                    <img
                        src={avatarUrl}
                        alt={name}
                        className="pc-main-image"
                        loading="lazy"
                    />
                    {/* Gradient Overlay for text readability */}
                    <div className="pc-overlay-gradient" />
                </div>

                {/* Content Layer */}
                {showUserInfo && (
                    <div className="pc-content-simple">
                        <div className="pc-info-row">
                            <div className="pc-mini-avatar-simple">
                                <img src={miniAvatarUrl || avatarUrl} alt="mini" />
                            </div>
                            <div className="pc-text-block">
                                <span className="pc-handle-simple">@{handle}</span>
                                <span className="pc-status-simple">{status}</span>
                            </div>
                        </div>

                        {contactLink ? (
                            <Link to={contactLink} className="pc-btn-simple">
                                {contactText}
                            </Link>
                        ) : (
                            <button onClick={onContactClick} className="pc-btn-simple">
                                {contactText}
                            </button>
                        )}
                    </div>
                )}
            </div>
            {/* Glow effect behind */}
            <div className="pc-glow-simple"></div>
        </div>
    );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
