import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import "./TableAxios.css"

export const  TableAxios = () => {

    const [instancias, setInstancias] = useState([])

    const url = ("http://127.0.0.1:8000/transactions/")

    const getData =  async () => {
        await axios.get(url).then((response) => {
            const data = response.data
            console.log(data)
            setInstancias(data)
        }
    )}

    useEffect(()=>{
        getData()
    }, [] )

    const columns = [
        {
            name:"id",
            label: "ID",
        },
        {
            name:"date",
            label: "FECHA",
        },
        {
            name:"amount",
            label: "MONTO",
        },
        {
            name:"origin",
            label: "ORIGEN",
        },
        {
            name:"destination",
            label: "Destino",
        },
        {
            name:"responsable",
            label: "RESPONSABLE"
        },
    ]

    return(
        <Box className="tablero">
            <MUIDataTable
            title= "Transacciones"
            data={instancias}
            columns={columns}/>
        </Box>
        
    )

    
}








/*
const columns = ["id", "fecha", "monto", "origen", "destino", "responsable"];
const data = [["1","2","3","3","3","3","3","3"]];
const options = [{filterType: 'checkbox'}];

export const TableBasic = () => {
    return (
        <MUIDataTable
        title={"Transacciones"}
        data={data}
        columns={columns}
        options={options}
        
        />

    )
}
*/