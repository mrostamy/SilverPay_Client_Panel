import { useEffect } from "react";
import { useInjection } from "../../../../../ioc.react";
import { AlertService } from "../../../../../services/alert_service";
import { GateService } from "../../../../../services/panel/gate_service";
import { DataGrid, GridColDef, GridRowsProp, faIR } from '@mui/x-data-grid';
import { Button, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const EasyPay = () => {

    const gate_service = useInjection(GateService)
    const alert_service = useInjection(AlertService)

    useEffect(() => {
    }, [])

    const rows: GridRowsProp = [
        { id: 1, name: 'Hello', price: 'World', link: 'lindjdjdjd' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome', link: 'lindjdjdjd' },
        { id: 3, col1: 'MUI', col2: 'is Amazing', link: 'lindjdjdjd' }
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
                        <IconButton><EditIcon/></IconButton>
                        <IconButton ><DeleteIcon/></IconButton>
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

export default EasyPay;