import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguagesSelect: React.FC<{currency: string}> = ({currency}) => {
    const [t] = useTranslation('translations');

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               {t('language')}
             </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href={`/${currency}`}>English</Dropdown.Item>
                <Dropdown.Item href={`/${currency}/ara`}>عربى</Dropdown.Item>
                <Dropdown.Item href={`/${currency}/zho`}>中文</Dropdown.Item>
                <Dropdown.Item href={`/${currency}/fra`}>Française</Dropdown.Item>
                <Dropdown.Item href={`/${currency}/deu`}>Deutsche</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default LanguagesSelect;