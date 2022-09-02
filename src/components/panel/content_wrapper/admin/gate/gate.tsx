import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { gate_wallets } from "../../../../../data/models/gateWallets";
import GateActive from "./gate_active";
import { gate } from "../../../../../data/models/gate";
import wallet from "../../../../../data/models/wallet";
const Gate = () => {

    const [exit, setExit] = useState(false)

    let gate:gate;
    let wallets:wallet[]

    // let gateWallet:gate_wallets={gate:gate,wallets:wallets};


    const onActive=(data:any)=>{
        gate.isActive=true;
    }

    return (
        <>
            <IconButton onClick={()=>setExit(p=>!p)}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                open={exit}
            >
                <MenuItem key={1} onClick={() => { setExit(p=>!p)}}>
                    exit
                </MenuItem>
            </Menu>
            <Button onClick={onActive} >{gate!!.isActive ? "deactivate" : "activate"}</Button>
            <GateActive/>
        </>
    )
}

export default Gate;