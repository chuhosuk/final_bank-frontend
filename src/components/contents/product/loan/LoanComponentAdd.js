import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { TextField, Typography} from "@mui/material";
class LoanComponentAdd extends Component{
    render(){
        return(
            <div align="center" >
                <Typography variant='h4' align="center" style={style}>대출상품등록</Typography>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="상품이름 :"
                 placeholder="Input your l_pdName"
                /><br/>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="상품설명 :"
                 placeholder="Input your l_content"
                /><br/>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="신청자격 :"
                 placeholder="Input your l_grade"
                /><br/>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="대출가능최장기간 :"
                 placeholder="Input your l_maxPeriod"
                /><br/>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="대출가능최고금액 :"
                 placeholder="Input your l_max"
                /><br/>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="대출이자 :"
                 placeholder="Input your l_rate"
                /><br/>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="대출상환방법 :"
                 placeholder="Input your l_type"
                /><br/>
                <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="대출상환방법 :"
                 placeholder="Input your l_type"
                /><br/>
                  <TextField 
                 required
                 id="standard-required"
                 variant="standard"
                 label="중도상환수수료율 :"
                 placeholder="Input your l_cxlRate"
                /><br/>
                <button color="light"><Link to="/product/loan">상품등록</Link></button>

            </div>
                    
        )
    }
}
const style =  {
    display: 'flex',
    justifyContent: 'center'
}

export default LoanComponentAdd;