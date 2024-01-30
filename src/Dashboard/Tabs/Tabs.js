import { useState } from 'react';
import "./Tabs.css";

export default function Tabs({ setTabIndex }) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTabIndex(newValue);
    };

    return (
        <ul className="nav nav-tabs my-tabs">
            <li className="nav-item my-tab">
                <a
                    className={`nav-link ${value === '1' ? 'active active-tab-shadow' : ''}`}
                    href="#"
                    onClick={(e) => handleChange(e, '1')}
                >
                    Active
                </a>
            </li>
            <li className="nav-item my-tab">
                <a
                    className={`nav-link ${value === '2' ? 'active active-tab-shadow' : ''}`}
                    href="#"
                    onClick={(e) => handleChange(e, '2')}
                >
                    Link
                </a>
            </li>
            <li className="nav-item my-tab">
                <a
                    className={`nav-link ${value === '3' ? 'active active-tab-shadow' : ''}`}
                    href="#"
                    onClick={(e) => handleChange(e, '3')}
                >
                    Link
                </a>
            </li>
        </ul>
    );
}
