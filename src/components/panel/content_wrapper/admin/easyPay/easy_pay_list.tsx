import { useEffect } from "react";
import { useInjection } from "../../../../../ioc.react";
import { AlertService } from "../../../../../services/alert_service";
import { GateService } from "../../../../../services/panel/gate_service";
import { DataGrid, GridColDef, GridRowsProp, faIR } from '@mui/x-data-grid';
import { Button, IconButton } from "@mui/material";
import { EasyPayService } from "../../../../../services/panel/user/easy_pay_service";
import { gates_wallets } from "../../../../../data/models/gates_wallets";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2'

const EasyPayList = () => {

    const easyPay_service = useInjection(EasyPayService)
    const alert_service = useInjection(AlertService)
    const gate_service = useInjection(GateService)

    let gates_wallets: gates_wallets;

    const loadGates = () => {
        gate_service.getGates("1").then(response => { }).catch(error => { });
    }

    const deleteEasyPay = () => {
        Swal.fire({
            title: "test",
            showCancelButton: true,
            cancelButtonText: "خیر",
            confirmButtonText: "بله"

        }).then((result) => {
            if (result.isConfirmed) {
                easyPay_service.deleteEasyPay("3", "5")
                    .then(resp=> console.log(resp+"ok"))
                    .catch(err => { console.log("error in delete easyPay" + err); })
            }
        });
    }


    useEffect(() => {
    }, [])

    const loadEasyPays = () => {
        easyPay_service.geteasyPays("3")
            .then(response => {

            }).then(error => {

            })
    }


    const rows: GridRowsProp = [
        { id: 1, name: 'Hello', price: 'World', link: 'lindjdjdjd' },
        { id: 2, name: 'DataGridPro', price: 'is Awesome', link: 'lindjdjdjd' },
        { id: 3, name: 'MUI', price: 'is Amazing', link: 'lindjdjdjd' }
    ];

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'شناسه', width: 150 },
        { field: 'name', headerName: 'نام', width: 150 },
        { field: 'price', headerName: 'مبلغ', width: 150 },
        { field: 'link', headerName: 'اتصال به', width: 150 },
        {
            field: 'action', headerName: 'ویرایش/حذف', width: 150, renderCell: (cellValues) => {
                return (
                    <>
                        <IconButton><EditIcon /></IconButton>
                        {/* <IconButton ><DeleteIcon onclick={()=>deleteEasyPay()} /></IconButton> */}
                    </>
                )
            }
        },
    ];





    return (
        <>


            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

        </>
    )
}

export default EasyPayList;