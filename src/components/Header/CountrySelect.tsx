import React from 'react';
import Select from 'react-select'
import { useHistory } from 'react-router';

type CountrySelect = {
    countries: []
}

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const formatGroupLabel = (data: any) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span>{data.options.length}</span>
    </div>
);

const selectStyles = {
    control: (provided: any) => ({ ...provided, minWidth: 120 }),
};

const CountrySelect: React.FC<CountrySelect> = ({ countries }) => {
    const history: any = useHistory();
    return (
        <Select
            onChange={(e: any) => history.push(e.value)}
            placeholder="Search..."
            styles={selectStyles}
            defaultValue={{ label: 'Countries', options: [] }}
            options={[{ label: "Countries", options: countries }]}
            formatGroupLabel={formatGroupLabel} />
    );
}

export default CountrySelect;