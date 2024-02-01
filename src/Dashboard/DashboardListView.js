import * as React from 'react';
import ApplicationHeader from "../Headers/ApplicationHeader";

export default function DashboardListView({data,tabIndex}) {

    return (
        data.map((card, index) => {
            return (
                <ApplicationHeader key={index} ApplicationHeader={card} tabIndex={tabIndex} />
            );
        })
    );

}
