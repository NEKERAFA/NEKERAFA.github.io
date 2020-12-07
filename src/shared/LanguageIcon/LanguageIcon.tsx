import React from 'react';

type LanguageIconProps = {
    variant : string
};

const LanguageIcon : React.FunctionComponent<LanguageIconProps> = (props) => {
    let icon = 'galician';

    if (props.variant === 'en') {
        icon = 'english';
    } else if (props.variant === 'es') {
        icon = 'spanish';
    }

    return <img src={`images/icons/translate-${icon}.svg`} alt={props.variant} />;
}

export default LanguageIcon;