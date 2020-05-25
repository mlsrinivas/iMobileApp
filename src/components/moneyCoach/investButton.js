import React from 'react';
import { Button, Icon, Text } from 'native-base';

const InvestButton = () => {
    return (
        <Button iconLeft light rounded style={{ width: 150, backgroundColor: '#942720' }}>
            <Icon type="FontAwesome5" name='money-bill-wave' style={{ color: "white" }} />
            <Text style={{ color: 'white', fontSize: 13 }}>Invest Now</Text>
        </Button>
    )
}
export default InvestButton;
