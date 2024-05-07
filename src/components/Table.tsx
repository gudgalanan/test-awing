import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Tên quảng cáo*',
        width: 270,
        renderCell: () => (
            <TextField
                id="standard-basic"
                required
                defaultValue='Tên chiến dịch con 1'
                variant="standard"
                fullWidth
            />
        ),
    },
    {
        field: 'amount',
        headerName: 'Số lượng',
        width: 230,
        renderCell: () => (
            <TextField
                id="standard-basic"
                defaultValue='0'
                required
                variant="standard"
                fullWidth
            />
        ),
    },
    {
        field: 'action',
        headerName: 'Thêm',
        width: 230,
        renderCell: () => (
            <Button>Delete</Button>
        ),
    },
];

const rows = [
    { id: 1, name: 'QC 1', amount: 0 },
];

export default function Table() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pagination
                checkboxSelection
            />
        </div>
    );
}
