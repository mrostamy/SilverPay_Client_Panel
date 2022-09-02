import React from 'react'
import { role } from '../../../../../../data/models/admin/role';

export default function UserRoles(props) {

    let userRoles:role[];
    
    function hasRole(role:any):boolean{

        if(userRoles.some(r=>r.hasRole))
        return true;

        return false;

    }

    function getRoleText(role:string){

        switch(role){
            
        }

    }

    return (
        <>
            
        </>
    )
}
