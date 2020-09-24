import React from 'react';
import Select from 'react-select'
import { useNavigate } from "@reach/router";

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
    const history: any = useNavigate();
    return (
      <Select
        onChange={(e: any) => history(`/${e.value}`)}
        placeholder="Search..."
        styles={selectStyles}
        defaultValue={{ label: "Currency", options: [] }}
        options={[{ label: "Currencies", options: countries }]}
        formatGroupLabel={formatGroupLabel}
      />
    );
}

export default CountrySelect;