import { Grid } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Table from './Table'

const ChienDichDetail = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField id="standard-basic" label="Tên chiến dịch con" required defaultValue='Tên chiến dịch con 1' variant="standard" fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Đang hoạt động" />
                </Grid>
            </Grid>
            <p>DANH SÁCH QUẢNG CÁO</p>
            <Table />
        </>
    )
}

export default ChienDichDetail