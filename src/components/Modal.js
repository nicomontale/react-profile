import React from 'react'
import {Dialog, DialogActions, Button} from 'react-mdl';
export default function Modal({img}) {
    return (
        <div>
        <Dialog className="modal" open={this.state.openDialog}>
                          
        <img className="img_modal" src={img} alt="tesi" height="400px" width="570px"/>
      
      <DialogActions>
        
        <Button type='button' onClick={this.handleCloseDialog}>BACK</Button>
      </DialogActions>
    </Dialog> 
        </div>
    )
}
