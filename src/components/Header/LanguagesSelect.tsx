import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguagesSelect: React.FC<RouteComponentProps> = ({ location }) => {
    const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/", "");
    const [t] = useTranslation('translations');

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               {t('language')}
             </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href={`/${currency}?en`}>English</Dropdown.Item>
                <Dropdown.Item href={`/${currency}?ara`}>عربى</Dropdown.Item>
                <Dropdown.Item href={`/${currency}?zho`}>中文</Dropdown.Item>
                <Dropdown.Item href={`/${currency}?fra`}>Française</Dropdown.Item>
                <Dropdown.Item href={`/${currency}?deu`}>Deutsche</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default withRouter(LanguagesSelect);