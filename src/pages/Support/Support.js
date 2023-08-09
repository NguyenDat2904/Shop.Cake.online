import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomerCare } from './customerCare/customerCare';
import { Freight } from './freight/freight';
import { SupportCurtomer } from './SupportCurtomer/SupportCurtomer';

function Support() {
    return (
        <div>
            <Routes>
                <Route path="/support-customerCare" element={<SupportCurtomer />} />
                <Route path="/customerCare" element={<CustomerCare />} />
                <Route path="/freight" element={<Freight />} />
            </Routes>
        </div>
    );
}

export default Support;
